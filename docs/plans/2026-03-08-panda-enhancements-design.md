# Design Document: Panda Pet Enhancements & Bug Fixes

**Date:** 2026-03-08
**Topic:** Enhancement of Panda Pet extension features and bug fixes.

## 1. Overview
This update aims to make the Panda Pet feel more "alive" and interactive by adding a radial menu, a new dance state, natural blinking, petting mechanics, and intelligent speech bubbles. It also addresses core stability issues regarding window boundaries and notepad positioning.

## 2. Architecture & Components

### 2.1 UI Enhancements
- **Radial Context Menu:**
  - Trigger: Right-click (`contextmenu`) on the panda.
  - Options: Notepad (📝), Sleep/Wake (💤), Dance (🎵), Hide (❌).
  - Implementation: A new `div` with absolute positioning, using CSS transforms to "pop" icons from the center.
- **Side-Wiggle Dance State:**
  - Visual: CSS animation `groove-wiggle` applied to the `#panda-wrapper`.
  - Particles: SVG musical notes (`♪`, `♫`) generated dynamically or pre-defined in a group.
- **Natural Blinking:**
  - Implementation: A separate CSS animation `eye-blink` targeting the `eyes-normal` group, toggling opacity or scaleY.
- **Speech Bubbles:**
  - Implementation: A small floating bubble `div` with dynamic text. Appear/disappear logic using `setTimeout`.
- **Petting Mechanic:**
  - Logic: Track mouse movement speed over the panda's bounding box.
  - Feedback: Blushing cheeks and heart particles (`❤️`).

### 2.2 Intelligence & Fixes
- **Dynamic Boundaries:**
  - The `walkAround` function will now recalculate `window.innerWidth` and `window.innerHeight` on every move to ensure the panda stays within view.
  - Position clamping will be applied to the `savePosition` and `loadPosition` logic.
- **Viewport-Aware Notepad:**
  - Logic to check if the notepad `div` would exceed viewport edges and flip its anchor point accordingly.

## 3. Data Flow
- **State Management:**
  - New states in `settings` and local variables: `isDancing`, `isBlushing`, `menuOpen`.
  - Persistence: `isDancing` and `isSleeping` states will be synced to `chrome.storage` if needed for session continuity.

## 4. Testing Strategy
- **Manual Verification:**
  - Test right-click menu on various zoom levels.
  - Verify boundary clamping by resizing the window while the panda is walking.
  - Check "Hide" functionality and persistence.
- **Performance Check:**
  - Monitor CPU usage during the "Side-Wiggle" dance to ensure SVG animations aren't too taxing.
