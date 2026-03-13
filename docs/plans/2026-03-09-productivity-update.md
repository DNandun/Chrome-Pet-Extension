# Productivity Update Implementation Plan

**Goal:** Add a Pomodoro focus timer and context-aware speech to the Panda Pet.

**Architecture:**
- **Pomodoro:** Add a "Study" outfit and a timer to `content.js`. Manage timer state in `chrome.storage`.
- **Context Speech:** Use `window.location.hostname` to trigger specific speech bubbles in `content.js`.
- **UI:** Add a "Pomodoro" option to radial menu and "Study" outfit to settings.

---

### Task 1: Add "Study" Outfit to SVG and CSS
**Files:**
- Modify: `content.js`

**Step 1: Add Study Outfit SVG**
Add `<g id="outfit-study">` inside `PANDA_SVG`.

**Step 2: Add Study Outfit CSS**
Add `.outfit-study #outfit-study { display: block !important; }`.

---

### Task 2: Implement Pomodoro Timer Logic
**Files:**
- Modify: `content.js`

**Step 1: Add Timer UI element.**
**Step 2: Implement start/stop logic.**

---

### Task 3: Update Radial Menu and Popup
**Files:**
- Modify: `content.js`, `popup.html`, `popup.js`

---

### Task 4: Context-Aware Speech
**Files:**
- Modify: `content.js`
