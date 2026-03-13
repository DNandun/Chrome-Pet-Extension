# Panda Pet Enhancements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Panda Pet into a more interactive and stable companion with a radial menu, dancing, petting, and smart boundaries.

**Architecture:** 
- Add new SVG groups for UI elements (menu, bubbles, particles).
- Implement a state-driven animation system in `content.js`.
- Use `requestAnimationFrame` or high-frequency mouse event tracking for the petting mechanic.
- Centralize boundary logic into a `clampToViewport` utility.

**Tech Stack:** Vanilla JavaScript, SVG, CSS Animations, Chrome Extension API.

---

### Task 1: Natural Blinking & SVG Preparation

**Files:**
- Modify: `content.js` (Update `PANDA_SVG` and CSS)

**Step 1: Add blinking animation to CSS**
```javascript
/* In the style.textContent string */
@keyframes eye-blink {
  0%, 90%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.1); }
}
#panda-eyes-normal {
  animation: eye-blink 4s infinite;
  transform-origin: center 80px;
}
```

**Step 2: Add Musical Notes & Heart groups to SVG**
```html
<!-- Inside PANDA_SVG -->
<g id="dance-notes" style="display:none;">
  <text class="note" x="160" y="80" font-size="20">♪</text>
  <text class="note" x="40" y="80" font-size="20">♫</text>
</g>
<g id="pet-hearts" style="display:none;">
  <text class="heart" x="100" y="40" font-size="20">❤️</text>
</g>
```

**Step 3: Commit**
```bash
git add content.js
git commit -m "feat: add natural blinking and SVG decoration groups"
```

---

### Task 2: Smart Boundaries & Resize Support

**Files:**
- Modify: `content.js`

**Step 1: Create `clampPosition` function**
```javascript
function clampPosition(left, top) {
  const width = 70; // Panda width
  const height = 70; // Panda height
  const maxX = window.innerWidth - width - 20;
  const maxY = window.innerHeight - height - 20;
  return {
    left: Math.max(20, Math.min(left, maxX)),
    top: Math.max(20, Math.min(top, maxY))
  };
}
```

**Step 2: Update `walkAround` and `mouseup` to use clamping**
Modify the logic where `wrapper.style.left/top` are set to ensure they call `clampPosition`.

**Step 3: Add `resize` listener**
```javascript
window.addEventListener('resize', () => {
  const pos = clampPosition(wrapper.offsetLeft, wrapper.offsetTop);
  wrapper.style.left = `${pos.left}px`;
  wrapper.style.top = `${pos.top}px`;
  savePosition();
});
```

**Step 4: Commit**
```bash
git add content.js
git commit -m "fix: implement smart viewport boundaries and resize support"
```

---

### Task 3: Radial Context Menu

**Files:**
- Modify: `content.js`

**Step 1: Create the menu HTML in `injectPanda`**
```javascript
const menu = document.createElement('div');
menu.id = 'panda-radial-menu';
menu.innerHTML = `
  <div class="menu-item" data-action="note" title="Notepad">📝</div>
  <div class="menu-item" data-action="sleep" title="Sleep/Wake">💤</div>
  <div class="menu-item" data-action="dance" title="Dance">🎵</div>
  <div class="menu-item" data-action="hide" title="Hide">❌</div>
`;
shadow.appendChild(menu);
```

**Step 2: Add CSS for the Radial Menu**
```css
#panda-radial-menu {
  position: absolute;
  width: 120px;
  height: 120px;
  top: -25px;
  left: -25px;
  display: none;
  pointer-events: none;
  z-index: 10;
}
#panda-radial-menu.active { display: block; pointer-events: auto; }
.menu-item {
  position: absolute;
  width: 35px;
  height: 35px;
  background: #fff;
  border: 2px solid #2d2926;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s;
}
.menu-item:hover { background: #eee; transform: scale(1.2); }
/* Position items in a circle */
.menu-item[data-action="note"] { top: 0; left: 42px; }
.menu-item[data-action="sleep"] { top: 42px; right: 0; }
.menu-item[data-action="dance"] { bottom: 0; left: 42px; }
.menu-item[data-action="hide"] { top: 42px; left: 0; }
```

**Step 3: Implement Menu Logic**
Replace the old `contextmenu` listener with one that toggles `.active` on `#panda-radial-menu`. Add click listeners to items.

**Step 4: Commit**
```bash
git add content.js
git commit -m "feat: add radial context menu"
```

---

### Task 4: Side-Wiggle Dance & Music Particles

**Files:**
- Modify: `content.js`

**Step 1: Add Dance CSS**
```css
@keyframes groove-wiggle {
  0% { transform: translateX(-5px) rotate(-3deg); }
  100% { transform: translateX(5px) rotate(3deg); }
}
.is-dancing { animation: groove-wiggle 0.4s ease-in-out infinite alternate !important; }
.is-dancing #dance-notes { display: block !important; }
.note { animation: note-float 2s linear infinite; opacity: 0; }
@keyframes note-float {
  0% { transform: translateY(0) scale(0.5); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translateY(-40px) translateX(10px) rotate(20deg); opacity: 0; }
}
```

**Step 2: Implement `toggleDance` function**
Toggle `.is-dancing` class on `wrapper`.

**Step 3: Commit**
```bash
git add content.js
git commit -m "feat: implement side-wiggle dance and music particles"
```

---

### Task 5: Petting Mechanic (The "Blush" Logic)

**Files:**
- Modify: `content.js`

**Step 1: Add Blush/Pet CSS**
```css
.is-blushing #panda-cheek-l, .is-blushing #panda-cheek-r { 
  fill: #ff69b4 !important; opacity: 0.9 !important; transform: scale(1.3);
}
.is-blushing #pet-hearts { display: block !important; }
.heart { animation: heart-pop 1s ease-out forwards; }
@keyframes heart-pop {
  0% { transform: scale(0); opacity: 0; }
  50% { opacity: 1; transform: scale(1.2) translateY(-10px); }
  100% { opacity: 0; transform: scale(1) translateY(-30px); }
}
```

**Step 2: Implement Mouse Speed Tracker**
```javascript
let mouseTraveled = 0;
let lastX = 0, lastY = 0;
wrapper.addEventListener('mousemove', (e) => {
  if (isDragging) return;
  const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
  mouseTraveled += dist;
  lastX = e.clientX; lastY = e.clientY;
  
  if (mouseTraveled > 1000) { // Threshold for petting
    triggerHappy();
    mouseTraveled = 0;
  }
});
setInterval(() => { mouseTraveled = Math.max(0, mouseTraveled - 50); }, 200);
```

**Step 3: Implement `triggerHappy` function**
Add `.is-blushing` class, change mouth to happy, and remove after 2 seconds.

**Step 4: Commit**
```bash
git add content.js
git commit -m "feat: add petting mechanic and blush reaction"
```

---

### Task 6: Speech Bubbles

**Files:**
- Modify: `content.js`

**Step 1: Add Bubble HTML & CSS**
```javascript
const bubble = document.createElement('div');
bubble.id = 'panda-bubble';
shadow.appendChild(bubble);
```
```css
#panda-bubble {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  background: white;
  border: 2px solid #2d2926;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 11px;
  white-space: nowrap;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 5;
}
#panda-bubble.active { transform: translateX(-50%) scale(1); }
#panda-bubble::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #2d2926;
}
```

**Step 2: Implement Randomizer Logic**
```javascript
const quotes = ["You're doing great! ✨", "Stretch time! 🤸", "Bamboo? 🎋", "Stay focused! 🚀"];
function showQuote() {
  if (isSleeping || isAngry || menuOpen) return;
  bubble.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  bubble.classList.add('active');
  setTimeout(() => bubble.classList.remove('active'), 4000);
}
setInterval(showQuote, 30000); // Every 30 seconds
```

**Step 3: Commit**
```bash
git add content.js
git commit -m "feat: implement interactive speech bubbles"
```
