<div align="center">

<img src="assets/favicon.svg" alt="Unstruction" width="50"/>

# Unstruction
An open-source web template built with [Shoelace](https://shoelace.style/) for setting up a simple and easy **website under construction** page.

[![Static Badge](https://img.shields.io/badge/jekyll-theme-CC0000?logo=jekyll&logoColor=%23CC0000)](https://github.com/digitalmalayalistudio/unstruction-jekyll-theme/)
[![Gem (including prereleases)](https://img.shields.io/gem/v/unstruction-jekyll-theme?logo=ruby&logoColor=%23E9573F)](https://rubygems.org/gems/unstruction-jekyll-theme)
[![Gem](https://img.shields.io/gem/dt/unstruction-jekyll-theme?logo=ruby&logoColor=%23E9573F)](https://rubygems.org/gems/unstruction-jekyll-theme)

[![WordPress Theme Version](https://img.shields.io/wordpress/theme/v/unstruction?logo=wordpress&labelColor=%2321759B)](https://wordpress.org/themes/unstruction/)
[![WordPress Theme Downloads](https://img.shields.io/wordpress/theme/dt/unstruction?logo=wordpress&labelColor=%2321759B&color=green)](https://wordpress.org/themes/unstruction/)
[![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/DigitalMalayaliStudio/unstruction-wordpress-theme/total?logo=github&labelColor=%23181717&color=%232f81f7)](https://github.com/DigitalMalayaliStudio/unstruction-wordpress-theme/releases)

[Live Demo ◉](https://digitalmalayalistudio.github.io/unstruction/)

</div>

## Features
- 😊 No installation or fancy setup; just add the website name and contact details!
- ⏱️ Displays a countdown timer until the website launch date! 
- ⚡ Uses [Shoelace](https://shoelace.style/), a powerful web component library!

## Usage
The first step is to click the **Use this template** button above the file list to create a new repository.

### Add website name and URL
Go to [line 92](https://github.com/digitalmalayalistudio/unstruction/blob/main/index.html#L92) in `index.html` file and add website name:

```html
<strong>Unstruction</strong>
```

Make sure to change the [meta](https://github.com/digitalmalayalistudio/unstruction/blob/main/index.html#L13) URL as well:

```html
<meta property="og:url" content="https://digitalmalayalistudio.github.io/unstruction/">
```

### Change image
Add an image with a minimum width of 350px to assets folder replacing [preview.webp](https://github.com/DigitalMalayaliStudio/unstruction/blob/main/assets/preview.webp).

### Add contact details
Add the necessary contact details, such as phone number and email, in [lines 98–112](https://github.com/digitalmalayalistudio/unstruction/blob/main/index.html#L98-L112).

```html
<div slot="footer">
    <sl-button-group label="Alignment">
        <sl-button size="medium" circle href="tel:123456789">
            <sl-icon name="telephone" label="Phone"></sl-icon>
        </sl-button>
        <sl-button size="medium" circle href="mailto:mail@example.com">
            <sl-icon name="envelope" label="Mail"></sl-icon>
        </sl-button>
        <sl-button size="medium" circle href="https://wa.me/91123456789">
            <sl-icon name="whatsapp" label="WhatsApp"></sl-icon>
        </sl-button>
        <sl-button size="medium" circle href="https://maps.google.com" target="_blank">
            <sl-icon name="geo-alt" label="Map"></sl-icon>
        </sl-button>
    </sl-button-group>
</div>
```

### Add website launch date
You can change the date in [line 126](https://github.com/digitalmalayalistudio/unstruction/blob/main/index.html#L126) of `index.html`. Make sure to use a ISO 8601 format or the format shown in the example:

```js
const target = new Date('Jan 1, 3000, 00:00:00').getTime();
```
