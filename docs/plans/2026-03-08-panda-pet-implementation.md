# Panda Pet Chrome Extension Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a draggable, interactive panda pet that lives on every website and remembers its position using Chrome Storage.

**Architecture:** A Manifest V3 extension using a Content Script to inject a Shadow DOM-protected SVG panda. Persistence is handled via `chrome.storage.sync`.

**Tech Stack:** JavaScript, CSS, Chrome Extension APIs.

---

### Task 1: Basic Extension Structure

**Files:**
- Create: `manifest.json`
- Create: `content.js`
- Create: `background.js`

**Step 1: Create `manifest.json`**

```json
{
  "manifest_version": 3,
  "name": "Panda Pet",
  "version": "1.0",
  "description": "A cute panda companion for your browser.",
  "permissions": ["storage"],
  "host_permissions": ["<all_urls>"],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "background": {
    "service_worker": "background.js"
  }
}
```

**Step 2: Create empty `content.js` and `background.js`**

```javascript
// content.js
console.log('Panda Pet content script loaded');
```

```javascript
// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log('Panda Pet extension installed');
});
```

**Step 3: Commit**

```bash
git add manifest.json content.js background.js
git commit -m "chore: initial extension structure"
```

---

### Task 2: SVG Panda & Shadow DOM Injection

**Files:**
- Modify: `content.js`

**Step 1: Define the SVG Panda and Injection Logic**

```javascript
const PANDA_SVG = `
<svg width="100" height="120" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <!-- Ears -->
  <circle cx="60" cy="50" r="25" fill="#2d2926" />
  <circle cx="140" cy="50" r="25" fill="#2d2926" />
  
  <!-- Body -->
  <rect x="60" y="130" width="80" height="80" rx="40" fill="#2d2926" />
  <ellipse cx="100" cy="175" rx="35" ry="30" fill="white" /> <!-- Belly -->
  
  <!-- Arms -->
  <rect x="40" y="145" width="30" height="40" rx="15" fill="#2d2926" transform="rotate(-20 55 165)" />
  <rect x="130" y="145" width="30" height="40" rx="15" fill="#2d2926" transform="rotate(20 145 165)" />
  
  <!-- Legs -->
  <rect class="leg-left" x="70" y="195" width="25" height="35" rx="12" fill="#2d2926" />
  <rect class="leg-right" x="105" y="195" width="25" height="35" rx="12" fill="#2d2926" />
...
---

### Task 6: Beautiful Walking & Roaming Behavior

**Files:**
- Modify: `content.js`

**Step 1: Add "Panda Waddle" Animations to CSS**

```css
/* The Waddle: Body bobs and leans */
@keyframes waddle {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-4px) rotate(-2deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(-4px) rotate(2deg); }
}

/* Stepping: Legs move back and forth */
@keyframes step-left {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(-10deg); }
}
@keyframes step-right {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(10deg); }
}

.walking {
  animation: waddle 0.6s ease-in-out infinite !important;
}
.walking .leg-left {
  animation: step-left 0.6s ease-in-out infinite;
}
.walking .leg-right {
  animation: step-right 0.6s ease-in-out infinite 0.3s;
}

.flipped {
  transform: scaleX(-1);
}
```

**Step 2: Add Smooth Roaming Logic**

```javascript
let isWalking = false;

function roam() {
  if (isDragging || isWalking || Math.random() > 0.3) return;

  isWalking = true;
  wrapper.classList.add('walking');
  
  const targetX = Math.random() * (window.innerWidth - 100);
  const targetY = Math.random() * (window.innerHeight - 120);
  
  const currentX = parseFloat(wrapper.style.left) || (window.innerWidth - 120);
  const svg = wrapper.querySelector('svg');
  
  // Smoothly face the target
  if (targetX < currentX) {
    svg.style.transition = 'transform 0.3s ease';
    svg.classList.add('flipped');
  } else {
    svg.style.transition = 'transform 0.3s ease';
    svg.classList.remove('flipped');
  }

  // Calculate duration based on distance (beautifully paced)
  const distance = Math.sqrt(Math.pow(targetX - currentX, 2) + Math.pow(targetY - (parseFloat(wrapper.style.top) || 20), 2));
  const duration = Math.max(2000, distance * 5); // At least 2s, slower for longer distances

  wrapper.style.transition = `left ${duration}ms cubic-bezier(0.45, 0.05, 0.55, 0.95), top ${duration}ms cubic-bezier(0.45, 0.05, 0.55, 0.95)`;
  wrapper.style.left = `${targetX}px`;
  wrapper.style.top = `${targetY}px`;

  setTimeout(() => {
    isWalking = false;
    wrapper.classList.remove('walking');
    wrapper.style.transition = 'transform 0.2s ease';
    chrome.storage.sync.set({
      pandaPos: { left: wrapper.style.left, top: wrapper.style.top }
    });
  }, duration);
}

setInterval(roam, 12000); // Check every 12 seconds
```

**Step 3: Commit**

```bash
git add content.js
git commit -m "feat: implement beautiful panda waddle and roaming"
```



  <!-- Head -->
  <ellipse cx="100" cy="100" rx="75" ry="65" fill="white" stroke="#2d2926" stroke-width="6"/>
  
  <!-- Eye Patches -->
  <ellipse cx="70" cy="100" rx="22" ry="26" fill="#2d2926" />
  <ellipse cx="130" cy="100" rx="22" ry="26" fill="#2d2926" />
  
  <!-- Eyes -->
  <circle cx="70" cy="95" r="7" fill="white" />
  <circle cx="130" cy="95" r="7" fill="white" />
  <circle cx="72" cy="93" r="3" fill="white" opacity="0.8" />
  <circle cx="132" cy="93" r="3" fill="white" opacity="0.8" />
  
  <!-- Nose/Muzzle -->
  <path d="M95 120 Q100 125 105 120" stroke="#2d2926" stroke-width="3" fill="none" />
  
  <!-- Cheeks -->
  <circle cx="50" cy="125" r="10" fill="#ffb7c5" opacity="0.5" />
  <circle cx="150" cy="125" r="10" fill="#ffb7c5" opacity="0.5" />
</svg>
`;

function injectPanda() {
  const container = document.createElement('div');
  container.id = 'panda-pet-root';
  document.body.appendChild(container);

  const shadow = container.attachShadow({ mode: 'open' });
  const wrapper = document.createElement('div');
  wrapper.id = 'panda-wrapper';
  wrapper.innerHTML = PANDA_SVG;

  const style = document.createElement('style');
  style.textContent = `
    #panda-wrapper {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 100px;
      height: 100px;
      cursor: grab;
      z-index: 999999;
      user-select: none;
      transition: transform 0.2s ease;
    }
    #panda-wrapper:active {
      cursor: grabbing;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
}

injectPanda();
```

**Step 2: Commit**

```bash
git add content.js
git commit -m "feat: inject panda via shadow dom"
```

---

### Task 3: Drag & Drop Logic

**Files:**
- Modify: `content.js`

**Step 1: Implement Drag and Drop**

```javascript
// Add inside injectPanda function, after shadow.appendChild(wrapper)
let isDragging = false;
let startX, startY;

wrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - wrapper.offsetLeft;
  startY = e.clientY - wrapper.offsetTop;
  wrapper.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const x = e.clientX - startX;
  const y = e.clientY - startY;
  
  wrapper.style.left = `${x}px`;
  wrapper.style.top = `${y}px`;
  wrapper.style.bottom = 'auto';
  wrapper.style.right = 'auto';
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  wrapper.style.transition = 'transform 0.2s ease';
  
  // Save position
  chrome.storage.sync.set({
    pandaPos: {
      left: wrapper.style.left,
      top: wrapper.style.top
    }
  });
});
```

**Step 2: Commit**

```bash
git add content.js
git commit -m "feat: implement draggable behavior"
```

---

### Task 4: Position Persistence

**Files:**
- Modify: `content.js`

**Step 1: Load Position on Startup**

```javascript
// Modify injectPanda to load storage
chrome.storage.sync.get(['pandaPos'], (result) => {
  if (result.pandaPos) {
    wrapper.style.left = result.pandaPos.left;
    wrapper.style.top = result.pandaPos.top;
    wrapper.style.bottom = 'auto';
    wrapper.style.right = 'auto';
  }
});
```

**Step 2: Commit**

```bash
git add content.js
git commit -m "feat: persist panda position via storage"
```

---

### Task 5: Idle & Click Animations

**Files:**
- Modify: `content.js` (CSS in Shadow DOM)

**Step 1: Add Animations to CSS**

```css
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
@keyframes wave {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-15deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
}
#panda-wrapper {
  animation: float 3s ease-in-out infinite;
}
.waving {
  animation: wave 0.5s ease-in-out !important;
}
```

**Step 2: Add Click Event for Waving**

```javascript
wrapper.addEventListener('click', () => {
  if (isDragging) return;
  wrapper.classList.add('waving');
  setTimeout(() => wrapper.classList.remove('waving'), 500);
});
```

**Step 3: Commit**

```bash
git add content.js
git commit -m "feat: add floating and waving animations"
```
