/**
 * Server-Authoritative Countdown Client
 * 
 * This module manages a countdown timer that:
 * - Fetches target time from a server endpoint
 * - Calculates and maintains client-server time offset
 * - Updates countdown display every second
 * - Handles countdown completion
 */

class ServerCountdown {
  constructor(options = {}) {
    this.apiEndpoint = options.apiEndpoint || '/api/countdown';
    this.refreshInterval = options.refreshInterval || 60000; // 60 seconds
    this.elements = {
      days: options.daysElement || document.querySelector('.days'),
      hours: options.hoursElement || document.querySelector('.hr'),
      minutes: options.minutesElement || document.querySelector('.min'),
      seconds: options.secondsElement || document.querySelector('.sec'),
      title: options.titleElement || document.querySelector('.countdown-title')
    };
    
    this.timeOffset = 0;
    this.targetTimestamp = null;
    this.updateTimer = null;
    this.refreshTimer = null;
    
    this.onComplete = options.onComplete || this.defaultOnComplete.bind(this);
  }

  /**
   * Fetch countdown data from server
   * @returns {Promise<boolean>} Success status
   */
  async fetchCountdownData() {
    try {
      const response = await fetch(this.apiEndpoint, {
        cache: 'no-store'
      });
      const data = await response.json();
      
      // Calculate clock offset: server time - client time
      this.timeOffset = data.server - Date.now();
      this.targetTimestamp = data.end;
      
      console.log('Server target:', new Date(this.targetTimestamp).toISOString());
      console.log('Time offset (ms):', this.timeOffset);
      
      return true;
    } catch (error) {
      console.error('Failed to fetch countdown data:', error);
      return false;
    }
  }

  /**
   * Update countdown display
   */
  updateCountdown() {
    if (!this.targetTimestamp) return;

    // Use corrected time
    const correctedNow = Date.now() + this.timeOffset;
    const remainingMs = this.targetTimestamp - correctedNow;

    if (remainingMs <= 0) {
      this.stop();
      this.setCountdownValues(0, 0, 0, 0);
      this.onComplete();
      return;
    }

    // Use countdown.js library to calculate time units
    const timespan = countdown(
      new Date(correctedNow),
      new Date(this.targetTimestamp),
      countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
    );

    this.setCountdownValues(
      timespan.days || 0,
      timespan.hours || 0,
      timespan.minutes || 0,
      timespan.seconds || 0
    );
  }

  /**
   * Set countdown display values
   */
  setCountdownValues(days, hours, minutes, seconds) {
    if (this.elements.days) this.elements.days.textContent = days;
    if (this.elements.hours) this.elements.hours.textContent = hours;
    if (this.elements.minutes) this.elements.minutes.textContent = minutes;
    if (this.elements.seconds) this.elements.seconds.textContent = seconds;
  }

  /**
   * Default completion handler
   */
  defaultOnComplete() {
    if (this.elements.title) {
      this.elements.title.textContent = 'Event Started!';
    }
  }

  /**
   * Start the countdown
   */
  async start() {
    const success = await this.fetchCountdownData();
    
    if (success) {
      this.updateCountdown(); // Run immediately
      this.updateTimer = setInterval(() => this.updateCountdown(), 1000);
      
      // Auto-refresh server time periodically
      this.refreshTimer = setInterval(async () => {
        await this.fetchCountdownData();
      }, this.refreshInterval);
    } else {
      // Fallback display
      this.setCountdownValues(0, 0, 0, 0);
      if (this.elements.title) {
        this.elements.title.textContent = 'Loading...';
      }
    }
  }

  /**
   * Stop the countdown
   */
  stop() {
    if (this.updateTimer) {
      clearInterval(this.updateTimer);
      this.updateTimer = null;
    }
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  }

  /**
   * Get time remaining in milliseconds
   */
  getTimeRemaining() {
    if (!this.targetTimestamp) return null;
    const correctedNow = Date.now() + this.timeOffset;
    return Math.max(0, this.targetTimestamp - correctedNow);
  }
}

// Export for use as module or global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ServerCountdown;
} else {
  window.ServerCountdown = ServerCountdown;
}
