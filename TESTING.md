# Countdown System Testing Guide

## Manual Testing Steps

### 1. Basic Functionality Test
1. Start the server: `npm start`
2. Open `http://localhost:3000` in browser
3. Verify countdown displays correctly with days, hours, minutes, seconds
4. Refresh the page - countdown should continue from where it left off (no reset)

### 2. Server Time Sync Test
1. Open browser developer console
2. Check for logs showing:
   - "Server target: 2026-02-02T14:30:00.000Z"
   - "Time offset (ms): [some value]"
3. Verify the countdown updates every second

### 3. API Endpoint Test
```bash
curl http://localhost:3000/api/countdown
```
Expected response:
```json
{
  "end": 1770060600000,
  "server": [current-timestamp]
}
```

### 4. Client Clock Offset Test
1. Change your system clock to an incorrect time (e.g., 1 day ahead)
2. Refresh the page
3. The countdown should still show the correct time (not affected by local clock)

### 5. Multiple Browser Test
1. Open the page in multiple browsers/tabs simultaneously
2. All should show the exact same countdown values at the same time

### 6. Event Started Message Test
To test the "Event Started!" message:
1. Temporarily modify `server.js` to set a target a few seconds in the future:
   ```javascript
   const TARGET_TIMESTAMP = Date.now() + 5000; // 5 seconds from now
   ```
2. Restart server and refresh browser
3. Wait for countdown to reach zero
4. Verify title changes to "Event Started!"

## Automated Testing Ideas

### API Test (using curl or similar)
```bash
# Test that API returns correct structure
response=$(curl -s http://localhost:3000/api/countdown)
echo "$response" | jq '.end, .server'

# Verify target is correct (2026-02-02T14:30:00.000Z = 1770060600000)
echo "$response" | jq '.end == 1770060600000'
```

### Browser Console Test
Open browser console and run:
```javascript
// Verify countdown.js is loaded
console.log(typeof countdown); // should be "function"

// Manually fetch and verify API
fetch('/api/countdown', { cache: 'no-store' })
  .then(r => r.json())
  .then(data => {
    console.log('Target:', new Date(data.end).toISOString());
    console.log('Server time:', new Date(data.server).toISOString());
    console.log('Expected: 2026-02-02T14:30:00.000Z');
  });
```

## Acceptance Criteria Checklist

- [ ] `/api/countdown` returns `end` and `server` epoch timestamps
- [ ] Target time is correctly set to **2026-02-02 14:30 UTC**
- [ ] Client computes and uses timestamp offset
- [ ] Countdown updates every second
- [ ] Display matches real remaining time on server
- [ ] When countdown reaches zero, "Event Started!" shows
- [ ] Works correctly on all modern browsers (Chrome, Firefox, Safari, Edge)
- [ ] Countdown remains correct even when user manually changes system time

## Optional Features Implemented

- [x] Auto-refresh `/api/countdown` every 60 seconds (for long-term accuracy)
- [ ] Modularize client code into its own file
- [ ] Use SSE (Server-Sent Events) to push updated end time if needed
- [ ] Styling with boxes for days/hours/minutes/seconds (already exists in design)
