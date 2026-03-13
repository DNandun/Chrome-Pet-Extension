# Real-Time Weather Sync Implementation Plan

**Goal:** Make the Panda react to the user's local weather (Rain, Snow, Night, Sunny).

**Architecture:**
- **Visuals:** Add SVG assets to `content.js` for a Leaf Umbrella (Rain), Scarf (Snow), and Lantern (Night).
- **Logic:** `background.js` fetches weather data every 30 minutes and stores it in `chrome.storage`.
- **Sync:** `content.js` updates the Panda's appearance based on the stored weather state.

---

### Task 1: Add Weather Assets to `content.js`
**Files:**
- Modify: `content.js`

**Step 1: Add Weather SVG Groups**
Add the following to `PANDA_SVG`:
- `<g id="weather-umbrella">` (A large green leaf)
- `<g id="weather-scarf">` (A red cozy scarf)
- `<g id="weather-lantern">` (A glowing lantern)

**Step 2: Add Weather CSS**
Add rules to show/hide these based on classes like `.weather-rain`, `.weather-snow`, etc.

---

### Task 2: Background Weather Fetching
**Files:**
- Modify: `background.js`
- Modify: `manifest.json` (Add `geolocation` permission if needed, or use IP-based API)

**Step 1: Implement `fetchWeather`**
Use a free API (like `wttr.in?format=j1`) to get local weather based on IP.

**Step 2: Set up an alarm**
Use `chrome.alarms` to fetch weather every 30 minutes.

---

### Task 3: Content Script Reaction
**Files:**
- Modify: `content.js`

**Step 1: Update Panda appearance based on weather state.**
**Step 2: Add "Weather Mode" toggle to settings.**

---
