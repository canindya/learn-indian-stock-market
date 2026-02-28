# Changelog

## [2026-02-28]

### Changed

- **Typography**: Bumped base font size from 14px to 16px for better readability
- **Typography**: Increased font sizes across all UI elements — headings, body text, labels, badges, and navigation — inspired by ProductHunt and Zerodha Varsity design patterns
- **Spacing**: Increased padding, margins, and grid gaps throughout for a more generous, breathable layout
- **Responsive**: Updated mobile breakpoints to match the larger typography scale

### Fixed

- **Android mobile**: Replaced heavy `backdrop-filter: blur()` with solid backgrounds on mobile to prevent GPU stalls
- **Android mobile**: Shrunk animated mesh orbs from 600px to 200-300px and reduced blur from 100px to 60px on small screens
- **Android mobile**: Added 1.5s safety-net timeout to force-reveal content if IntersectionObserver is slow to fire
- **Android mobile**: Added `overflow-x: hidden` on `html` and `overscroll-behavior: none` on `body` to prevent horizontal scroll and pull-to-refresh interference
- **Android mobile**: Disabled `:hover` transforms on touch devices that would stick after tap
- **Accessibility**: Added `prefers-reduced-motion` media query — disables all animations and shows content immediately
- **CSS**: Fixed invalid `--glass` custom property syntax
- **Mobile scroll**: Fixed erratic scrolling when tapping chapters — `scrollIntoView` was fighting the `max-height` expansion transition, causing the page to bounce up and down
