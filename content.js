const PANDA_SVG = `
<svg width="70" height="70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Shadow (New) -->
  <ellipse id="panda-shadow" cx="100" cy="195" rx="40" ry="8" fill="rgba(0,0,0,0.15)" style="transform-origin: center;" />

  <!-- OUTFIT: Fairy Wings (Behind) -->
  <g id="outfit-fairy-wings" style="display:none;">
    <path d="M60 130 Q20 80 60 160 Q40 120 60 130" fill="#E1F5FE" stroke="#4FC3F7" stroke-width="2" opacity="0.8" />
    <path d="M60 130 Q10 110 50 150" fill="#B3E5FC" opacity="0.6" />
    <path d="M140 130 Q180 80 140 160 Q160 120 140 130" fill="#E1F5FE" stroke="#4FC3F7" stroke-width="2" opacity="0.8" />
    <path d="M140 130 Q190 110 150 150" fill="#B3E5FC" opacity="0.6" />
  </g>

  <!-- Body -->
  <ellipse id="panda-body" cx="100" cy="150" rx="60" ry="45" fill="white" stroke="#2d2926" stroke-width="8"/>
  
  <!-- Arms/Legs -->
  <circle id="panda-leg-l" cx="60" cy="180" r="22" fill="#2d2926" />
  <circle id="panda-leg-r" cx="140" cy="180" r="22" fill="#2d2926" />
  <circle id="panda-arm-l" cx="45" cy="135" r="20" fill="#2d2926" />
  <circle id="panda-arm-r" cx="155" cy="135" r="20" fill="#2d2926" />
  
  <g id="panda-head">
    <!-- Ears -->
    <circle cx="60" cy="40" r="25" fill="#2d2926" />
    <circle cx="140" cy="40" r="25" fill="#2d2926" />
    <!-- Head Base -->
    <ellipse id="panda-head-base" cx="100" cy="85" rx="70" ry="60" fill="white" stroke="#2d2926" stroke-width="8"/>
    
    <!-- OUTFIT: King Crown -->
    <g id="outfit-king-crown" style="display:none;">
      <path d="M70 35 L130 35 L135 15 L115 25 L100 10 L85 25 L65 15 Z" fill="#FFD700" stroke="#B8860B" stroke-width="2"/>
      <circle cx="100" cy="10" r="3" fill="#FF0000" />
    </g>

    <!-- OUTFIT: Lady Bow -->
    <g id="outfit-lady-bow" style="display:none;">
      <path d="M50 25 L75 40 L50 55 Z" fill="#FF4081" />
      <path d="M50 25 L25 40 L50 55 Z" fill="#FF4081" />
      <circle cx="50" cy="40" r="5" fill="#F50057" />
    </g>

    <!-- OUTFIT: Fairy Tiara -->
    <g id="outfit-fairy-tiara" style="display:none;">
      <path d="M70 45 Q100 35 130 45" stroke="#FFD700" stroke-width="2" fill="none" />
      <circle cx="100" cy="40" r="4" fill="#E040FB" />
      <circle cx="85" cy="42" r="3" fill="#7C4DFF" />
      <circle cx="115" cy="42" r="3" fill="#7C4DFF" />
    </g>

    <!-- OUTFIT: Rapper Shades (Stunner Style) -->
    <g id="outfit-rapper-shades" style="display:none;">
      <defs>
        <linearGradient id="shade-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#444;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#000;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#444;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path d="M55 75 L145 75 L140 95 Q100 100 60 95 Z" fill="url(#shade-grad)" stroke="#EEEEEE" stroke-width="2" />
      <rect x="55" y="78" width="90" height="2" fill="#666" opacity="0.5"/>
      <rect x="60" y="84" width="80" height="2" fill="#666" opacity="0.5"/>
      <rect x="65" y="90" width="70" height="2" fill="#666" opacity="0.5"/>
    </g>

    <!-- OUTFIT: Rapper Cap (Snapback) -->
    <g id="outfit-rapper-cap" style="display:none;">
      <path d="M55 45 Q100 15 145 45 L145 55 L55 55 Z" fill="#3F51B5" stroke="#1A237E" stroke-width="2"/>
      <path d="M130 45 L170 50 L165 58 L130 55" fill="#3F51B5" stroke="#1A237E" stroke-width="2"/> <!-- Brim -->
      <circle cx="100" cy="25" r="3" fill="#1A237E" /> <!-- Button -->
      <text x="88" y="48" fill="#FFF" font-family="Impact, Arial" font-weight="bold" font-size="18">NY</text>
    </g>

    <!-- Eyes (Hidden when shades on) -->
    <g id="panda-eyes-normal">
      <ellipse id="panda-eye-l" cx="75" cy="80" rx="18" ry="22" fill="#2d2926" />
      <ellipse id="panda-eye-r" cx="125" cy="80" rx="18" ry="22" fill="#2d2926" />
      <circle id="panda-pupil-l" cx="75" cy="75" r="5" fill="white" />
      <circle id="panda-pupil-r" cx="125" cy="75" r="5" fill="white" />
    </g>
    
    <path id="panda-eye-closed-l" d="M60 80 Q75 85 90 80" stroke="#2d2926" stroke-width="4" fill="none" style="display:none;" />
    <path id="panda-eye-closed-r" d="M110 80 Q125 85 140 80" stroke="#2d2926" stroke-width="4" fill="none" style="display:none;" />
    <path id="panda-brow-l" d="M60 65 L85 75" stroke="#2d2926" stroke-width="5" stroke-linecap="round" style="display:none;" />
    <path id="panda-brow-r" d="M140 65 L115 75" stroke="#2d2926" stroke-width="5" stroke-linecap="round" style="display:none;" />
    <path id="panda-mouth" d="M95 105 Q100 110 105 105" stroke="#2d2926" stroke-width="4" fill="none" />
    <circle id="panda-cheek-l" cx="55" cy="105" r="8" fill="#ffb7c5" opacity="0.6" />
    <circle id="panda-cheek-r" cx="145" cy="105" r="8" fill="#ffb7c5" opacity="0.6" />
  </g>

  <!-- OUTFIT: Rapper Chain (Thick Gold) -->
  <g id="outfit-rapper-chain" style="display:none;">
    <path d="M65 125 Q100 160 135 125" stroke="#FFD700" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="8,2" />
    <g id="chain-pendant">
      <circle cx="100" cy="155" r="12" fill="#FFD700" stroke="#B8860B" stroke-width="2" />
      <text x="94" y="160" fill="#000" font-family="Arial" font-weight="bold" font-size="16">$</text>
    </g>
  </g>

  <!-- OUTFIT: Fairy Wand (Star) -->
  <g id="outfit-fairy-wand" style="display:none;">
    <line x1="160" y1="130" x2="185" y2="100" stroke="#8D6E63" stroke-width="3" />
    <g id="wand-star" transform="translate(185, 100)">
      <polygon points="0,-10 3,-3 10,-3 5,2 7,9 0,5 -7,9 -5,2 -10,-3 -3,-3" fill="#FFF176" stroke="#FDD835" stroke-width="1" />
    </g>
    <g id="wand-sparkles">
      <circle cx="180" cy="90" r="1.5" fill="white" opacity="0.8">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="195" cy="105" r="1" fill="white" opacity="0.8">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </g>
  </g>

  <!-- BEAUTIFUL ROSE GROUP -->
  <g id="rose-group" style="display:none; transform-origin: 160px 120px;">
    <path d="M160 120 Q150 100 160 70" stroke="#2E7D32" stroke-width="4" fill="none" />
    <ellipse cx="152" cy="105" rx="10" ry="5" fill="#4CAF50" transform="rotate(-35 152 105)" />
    <ellipse cx="168" cy="90" rx="8" ry="4" fill="#4CAF50" transform="rotate(25 168 90)" />
    <g id="flower-bloom" style="transform-origin: 160px 70px;">
      <circle cx="160" cy="70" r="15" fill="#C2185B" />
      <circle cx="152" cy="65" r="10" fill="#E91E63" />
      <circle cx="168" cy="65" r="10" fill="#E91E63" />
      <circle cx="160" cy="60" r="10" fill="#F06292" />
      <circle cx="160" cy="70" r="6" fill="#F8BBD0" />
    </g>
    <g id="rose-sparkles">
      <circle class="sparkle" cx="145" cy="60" r="2" fill="#FFD700" />
      <circle class="sparkle" cx="175" cy="55" r="1.5" fill="#FFF" />
      <circle class="sparkle" cx="160" cy="45" r="2" fill="#FFD700" />
    </g>
  </g>

  <g id="zzz-marks" style="display:none;">
    <text id="zzz-1" x="160" y="40" font-family="Arial" font-weight="bold" fill="#2d2926" font-size="20">Z</text>
    <text id="zzz-2" x="175" y="25" font-family="Arial" font-weight="bold" fill="#2d2926" font-size="14">z</text>
    <text id="zzz-3" x="185" y="15" font-family="Arial" font-weight="bold" fill="#2d2926" font-size="10">z</text>
  </g>
  <g id="sleep-extras" style="display:none;">
    <circle id="snot-bubble" cx="105" cy="105" r="5" fill="#B3E5FC" opacity="0.6" stroke="#81D4FA" stroke-width="1" />
    <text class="sleep-star" x="40" y="40" font-size="12">⭐</text>
    <text class="sleep-star" x="160" y="60" font-size="10">✨</text>
    <text class="sleep-star" x="50" y="80" font-size="8">⭐</text>
  </g>
  <g id="anger-extras" style="display:none;">
    <path id="anger-mark" d="M160 50 L180 50 M170 40 L170 60 M165 45 L175 55 M175 45 L165 55" stroke="#FF0000" stroke-width="4" stroke-linecap="round" />
    <g id="vibration-lines">
      <path d="M30 80 Q20 85 30 90" stroke="#FF0000" stroke-width="2" fill="none" opacity="0.6" />
      <path d="M170 80 Q180 85 170 90" stroke="#FF0000" stroke-width="2" fill="none" opacity="0.6" />
    </g>
  </g>
  <g id="smoke-marks" style="display:none;">
    <path id="smoke-1" d="M80 30 Q85 20 80 10" stroke="#888" stroke-width="3" fill="none" opacity="0.6" />
    <path id="smoke-2" d="M100 25 Q105 15 100 5" stroke="#888" stroke-width="3" fill="none" opacity="0.6" />
    <path id="smoke-3" d="M120 30 Q125 20 120 10" stroke="#888" stroke-width="3" fill="none" opacity="0.6" />
  </g>
  <g id="dance-notes" style="display:none;">
    <text class="note" x="160" y="80" font-size="20">♪</text>
    <text class="note" x="40" y="80" font-size="20">♫</text>
  </g>
  <g id="pet-hearts" style="display:none;">
    <text class="heart" x="100" y="40" font-size="20">❤️</text>
  </g>

  <!-- OUTFIT: Study (Glasses + Book) -->
  <g id="outfit-study" style="display:none;">
    <path d="M65 80 Q85 80 85 80 M115 80 Q135 80 135 80" stroke="#2d2926" stroke-width="3" fill="none" />
    <circle cx="75" cy="80" r="12" stroke="#2d2926" stroke-width="2" fill="rgba(255,255,255,0.2)" />
    <circle cx="125" cy="80" r="12" stroke="#2d2926" stroke-width="2" fill="rgba(255,255,255,0.2)" />
    <path d="M87 80 Q100 75 113 80" stroke="#2d2926" stroke-width="2" fill="none" />
    <g id="study-book" transform="translate(145, 130) rotate(15)">
      <rect x="0" y="0" width="30" height="40" rx="2" fill="#4A90E2" stroke="#2d2926" stroke-width="2" />
      <line x1="5" y1="10" x2="25" y2="10" stroke="white" stroke-width="2" />
      <line x1="5" y1="20" x2="25" y2="20" stroke="white" stroke-width="2" />
      <line x1="5" y1="30" x2="20" y2="30" stroke="white" stroke-width="2" />
    </g>
  </g>

  <!-- WEATHER: Leaf Umbrella (Rain) -->
  <g id="weather-umbrella" style="display:none; transform-origin: 155px 135px;">
    <path d="M155 135 L155 60" stroke="#8D6E63" stroke-width="4" fill="none" />
    <path d="M155 60 Q100 20 40 60 Q100 40 155 60 Z" fill="#4CAF50" stroke="#2E7D32" stroke-width="2" />
    <path d="M155 60 Q100 50 70 75" stroke="#2E7D32" stroke-width="1" fill="none" opacity="0.4" />
  </g>

  <!-- WEATHER: Scarf (Snow/Cold) -->
  <g id="weather-scarf" style="display:none;">
    <path d="M60 115 Q100 135 140 115 L145 125 Q100 145 55 125 Z" fill="#D32F2F" stroke="#B71C1C" stroke-width="1" />
    <path d="M60 120 L40 155 L65 160 L75 125 Z" fill="#D32F2F" stroke="#B71C1C" stroke-width="1" />
    <line x1="42" y1="155" x2="63" y2="158" stroke="#B71C1C" stroke-width="2" stroke-dasharray="2,2" />
  </g>

  <!-- WEATHER: Lantern (Night) -->
  <g id="weather-lantern" style="display:none;">
    <line x1="45" y1="135" x2="25" y2="150" stroke="#2d2926" stroke-width="3" />
    <rect x="15" y="150" width="20" height="30" rx="2" fill="#FFD54F" stroke="#FF8F00" stroke-width="2" />
    <rect x="18" y="155" width="14" height="20" fill="#FFF9C4" />
    <circle cx="25" cy="165" r="4" fill="#FFC107">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="25" cy="165" r="15" fill="rgba(255, 213, 79, 0.3)">
      <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
    </circle>
  </g>
</svg>
`;

let settings = {
  enablePanda: true,
  enableWalking: true,
  enableEyes: true,
  enableSleep: false,
  selectedOutfit: 'none'
};

let container = null;
let wrapper = null;
let notepad = null;
let isWalking = false;
let isDragging = false;
let isAngry = false;
let isBlooming = false;
let lastMouseMove = Date.now();

function injectPanda() {
  if (container || !document.body) return;

  container = document.createElement('div');
  container.id = 'panda-pet-root';
  container.style.cssText = 'position: fixed; top: 0; left: 0; width: 0; height: 0; z-index: 2147483647;';
  document.body.appendChild(container);

  const shadow = container.attachShadow({ mode: 'open' });
  wrapper = document.createElement('div');
  wrapper.id = 'panda-wrapper';
  wrapper.innerHTML = PANDA_SVG;

  notepad = document.createElement('div');
  notepad.id = 'panda-notepad';
  notepad.innerHTML = `
    <div class="notepad-header">🐼 Panda's Note</div>
    <textarea id="panda-textarea" placeholder="Type something here..."></textarea>
  `;
  shadow.appendChild(notepad);

  const menu = document.createElement('div');
  menu.id = 'panda-radial-menu';
  menu.innerHTML = `
    <div class="menu-item" data-action="note" title="Notepad">📝</div>
    <div class="menu-item" data-action="sleep" title="Sleep/Wake">💤</div>
    <div class="menu-item" data-action="timer" title="Pomodoro Timer (25m)">🍅</div>
    <div class="menu-item" data-action="dance" title="Dance">🎵</div>
    <div class="menu-item" data-action="hide" title="Hide">❌</div>
  `;
  wrapper.appendChild(menu);

  const bubble = document.createElement('div');
  bubble.id = 'panda-speech-bubble';
  shadow.appendChild(bubble);

  const timerDisplay = document.createElement('div');
  timerDisplay.id = 'panda-timer';
  shadow.appendChild(timerDisplay);

  let pomodoroInterval = null;
  let originalOutfit = 'none';

  function startPomodoro(minutes) {
    if (pomodoroInterval) stopPomodoro();
    
    originalOutfit = settings.selectedOutfit;
    settings.selectedOutfit = 'study';
    applyOutfit();
    
    let secondsLeft = minutes * 60;
    timerDisplay.style.display = 'block';
    
    const updateTimer = () => {
      const m = Math.floor(secondsLeft / 60);
      const s = secondsLeft % 60;
      timerDisplay.textContent = `${m}:${s.toString().padStart(2, '0')}`;
      
      if (secondsLeft <= 0) {
        stopPomodoro();
        bubble.textContent = "Break time! 🎋";
        bubble.classList.add('active');
        setTimeout(() => bubble.classList.remove('active'), 5000);
        return;
      }
      secondsLeft--;
    };
    
    updateTimer();
    pomodoroInterval = setInterval(updateTimer, 1000);
  }

  function stopPomodoro() {
    if (pomodoroInterval) {
      clearInterval(pomodoroInterval);
      pomodoroInterval = null;
    }
    timerDisplay.style.display = 'none';
    settings.selectedOutfit = originalOutfit;
    applyOutfit();
  }

  const mouth = wrapper.querySelector('#panda-mouth');
  const eyeL = wrapper.querySelector('#panda-eye-l');
  const eyeR = wrapper.querySelector('#panda-eye-r');
  const pupilL = wrapper.querySelector('#panda-pupil-l');
  const pupilR = wrapper.querySelector('#panda-pupil-r');
  const eyesNormal = wrapper.querySelector('#panda-eyes-normal');
  const closedL = wrapper.querySelector('#panda-eye-closed-l');
  const closedR = wrapper.querySelector('#panda-eye-closed-r');
  const browL = wrapper.querySelector('#panda-brow-l');
  const browR = wrapper.querySelector('#panda-brow-r');
  const cheekL = wrapper.querySelector('#panda-cheek-l');
  const cheekR = wrapper.querySelector('#panda-cheek-r');
  const headBase = wrapper.querySelector('#panda-head-base');
  const smoke = wrapper.querySelector('#smoke-marks');
  const zzz = wrapper.querySelector('#zzz-marks');
  const rose = wrapper.querySelector('#rose-group');
  const textarea = notepad.querySelector('#panda-textarea');

  const style = document.createElement('style');
  style.textContent = `
    #panda-wrapper {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 70px;
      height: 70px;
      cursor: grab;
      user-select: none;
      /* Default transition - will be overridden during walking */
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), 
                  left 0.4s ease-out, 
                  top 0.4s ease-out;
      will-change: transform, left, top;
    }
    #panda-wrapper:active {
      cursor: grabbing;
      transition: transform 0.2s ease !important;
    }

    /* OUTFIT CSS */
    .outfit-king #outfit-king-crown { display: block !important; }
    .outfit-lady #outfit-lady-bow { display: block !important; }
    .outfit-study #outfit-study { display: block !important; }
    
    /* WEATHER CSS */
    .is-raining #weather-umbrella { display: block !important; }
    .is-snowing #weather-scarf { display: block !important; }
    .is-night #weather-lantern { display: block !important; }
    
    /* ENHANCED RAPPER OUTFIT */
    .outfit-rapper #outfit-rapper-cap, 
    .outfit-rapper #outfit-rapper-chain,
    .outfit-rapper #outfit-rapper-shades { display: block !important; }
    .outfit-rapper #panda-eyes-normal { display: none !important; }
    .outfit-rapper #panda-head {
      animation: rapper-bob 0.8s ease-in-out infinite alternate;
    }
    .outfit-rapper #chain-pendant {
      animation: chain-glint 2s linear infinite;
    }

    /* ENHANCED FAIRY OUTFIT */
    .outfit-fairy #outfit-fairy-wings, 
    .outfit-fairy #outfit-fairy-wand,
    .outfit-fairy #outfit-fairy-tiara { display: block !important; }
    
    .outfit-fairy #outfit-fairy-wings {
      transform-origin: center;
      animation: fairy-flutter 0.2s ease-in-out infinite alternate;
    }
    .outfit-fairy #outfit-fairy-wand {
      animation: wand-float 2s ease-in-out infinite alternate;
    }

    @keyframes rapper-bob {
      0% { transform: translateY(0) rotate(-2deg); }
      100% { transform: translateY(3px) rotate(2deg); }
    }
    @keyframes chain-glint {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.5) drop-shadow(0 0 2px gold); }
    }
    @keyframes fairy-flutter {
      0% { transform: scaleX(1); }
      100% { transform: scaleX(0.8); }
    }
    @keyframes wand-float {
      0% { transform: translateY(0) rotate(0deg); }
      100% { transform: translateY(-5px) rotate(5deg); }
    }

    #panda-radial-menu {
      position: absolute;
      width: 140px;
      height: 140px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8);
      display: none;
      pointer-events: none;
      z-index: 1000;
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
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .menu-item:hover { background: #eee; transform: scale(1.2); }
    /* Position items in a circle around the 70x70 panda */
    .menu-item[data-action="note"] { top: -10px; left: 52px; }
    .menu-item[data-action="sleep"] { top: 40px; right: -15px; }
    .menu-item[data-action="timer"] { bottom: -15px; left: 52px; }
    .menu-item[data-action="dance"] { top: 90px; left: -5px; }
    .menu-item[data-action="hide"] { top: 40px; left: -15px; }

    #panda-timer {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid #2d2926;
      border-radius: 5px;
      padding: 2px 6px;
      font-weight: bold;
      font-family: monospace;
      color: #d32f2f;
      display: none;
      z-index: 1000;
      white-space: nowrap;
    }

    #panda-speech-bubble {
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%) scale(0);
      background: white;
      border: 2px solid #2d2926;
      border-radius: 10px;
      padding: 6px 10px;
      font-size: 12px;
      white-space: nowrap;
      pointer-events: none;
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 100;
    }
    #panda-speech-bubble.active { transform: translateX(-50%) scale(1); }
    #panda-speech-bubble::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 10px 10px 0;
      border-style: solid;
      border-color: #2d2926 transparent transparent;
    }

    #panda-notepad {
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 180px;
      height: 220px;
      background: #fffbe6;
      border: 4px solid #2d2926;
      border-radius: 15px;
      display: none;
      flex-direction: column;
      box-shadow: 8px 8px 0px rgba(0,0,0,0.1);
      overflow: hidden;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      animation: notepad-slide 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .notepad-header { background: #2d2926; color: white; padding: 8px; font-size: 12px; font-weight: bold; text-align: center; }
    #panda-textarea { flex: 1; border: none; padding: 10px; background: transparent; resize: none; font-size: 13px; color: #2d2926; line-height: 1.5; outline: none; }
    @keyframes notepad-slide { from { opacity: 0; transform: translateY(20px) scale(0.8); } to { opacity: 1; transform: translateY(0) scale(1); } }

    .hands-up #panda-arm-l { animation: raise-arm-l 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6) 2; }
    .hands-up #panda-arm-r { animation: handshake-right 0.5s cubic-bezier(0.45, 0, 0.55, 1) 2; }
    
    /* --- ENHANCED DANCE ANIMATIONS --- */
    .is-dancing { 
      animation: dance-body-groove 0.5s cubic-bezier(0.45, 0, 0.55, 1) infinite !important; 
    }
    /* Add a colorful glow behind the panda while dancing */
    .is-dancing::before {
      content: '';
      position: absolute;
      width: 120px;
      height: 120px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(255,105,180,0.4) 0%, rgba(138,43,226,0.2) 50%, transparent 70%);
      border-radius: 50%;
      z-index: -1;
      animation: dance-glow-pulse 1s ease-in-out infinite alternate;
    }

    @keyframes dance-glow-pulse {
      0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; filter: hue-rotate(0deg); }
      100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; filter: hue-rotate(360deg); }
    }

    @keyframes dance-body-groove {
      0%, 100% { transform: translateY(0) rotate(-8deg) scale(1.05, 0.95); }
      50% { transform: translateY(-12px) rotate(8deg) scale(0.95, 1.05); }
    }

    .is-dancing #panda-arm-l { animation: dance-arm-wave-l 0.5s ease-in-out infinite alternate; }
    .is-dancing #panda-arm-r { animation: dance-arm-wave-r 0.5s ease-in-out infinite alternate-reverse; }
    
    @keyframes dance-arm-wave-l {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(-15px, -35px) rotate(-45deg); }
    }
    @keyframes dance-arm-wave-r {
      0% { transform: translate(0, 0) rotate(0deg); }
      100% { transform: translate(15px, -35px) rotate(45deg); }
    }

    .is-dancing #panda-leg-l { animation: dance-step-l 0.5s ease-in-out infinite; }
    .is-dancing #panda-leg-r { animation: dance-step-r 0.5s ease-in-out infinite 0.25s; }

    @keyframes dance-step-l {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px) rotate(-10deg); }
    }
    @keyframes dance-step-r {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px) rotate(10deg); }
    }

    /* Ear Wiggles */
    .is-dancing circle[cx="60"][cy="40"] { animation: ear-wiggle-l 0.25s ease-in-out infinite alternate; }
    .is-dancing circle[cx="140"][cy="40"] { animation: ear-wiggle-r 0.25s ease-in-out infinite alternate-reverse; }
    
    @keyframes ear-wiggle-l { 0% { transform: rotate(-10deg); } 100% { transform: rotate(10deg); } }
    @keyframes ear-wiggle-r { 0% { transform: rotate(10deg); } 100% { transform: rotate(-10deg); } }

    .is-dancing #dance-notes { display: block !important; }
    .note { 
      animation: note-float-fancy 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; 
      opacity: 0; 
      filter: drop-shadow(0 0 2px white);
    }
    .note:nth-child(1) { animation-delay: 0s; fill: #FF4081; }
    .note:nth-child(2) { animation-delay: 0.7s; fill: #7C4DFF; }
    
    @keyframes note-float-fancy {
      0% { transform: translate(0, 0) scale(0.5) rotate(0deg); opacity: 0; }
      20% { opacity: 1; }
      50% { transform: translate(20px, -40px) scale(1.2) rotate(20deg); }
      100% { transform: translate(-10px, -80px) scale(0.8) rotate(-20deg); opacity: 0; }
    }
    /* --- END ENHANCED DANCE --- */

    .hands-up #panda-leg-l { animation: happy-kick 0.5s ease-in-out 2; }
    .hands-up #panda-leg-r { animation: happy-kick 0.5s ease-in-out 2 alternate-reverse; }

    /* --- REALISTIC WALKING ANIMATIONS --- */
    .walking { 
      /* The waddle: Body rotates side-to-side and bobs up/down */
      animation: walk-body-waddle 0.8s ease-in-out infinite !important; 
    }
    .walking #panda-head { 
      /* Head counter-rotates slightly to stay level (gyroscopic stabilization) and bobs slightly delayed */
      animation: walk-head-stabilize 0.8s ease-in-out infinite !important; 
    }
    .walking #panda-leg-l { 
      /* High knee lift and definitive stomp */
      animation: walk-leg-l 0.8s linear infinite; 
    }
    .walking #panda-leg-r { 
      animation: walk-leg-r 0.8s linear infinite; 
    }
    .walking #panda-arm-l { 
      /* Counter-swing to legs */
      animation: walk-arm-l 0.8s ease-in-out infinite; 
    }
    .walking #panda-arm-r { 
      animation: walk-arm-r 0.8s ease-in-out infinite; 
    }
    .walking #panda-shadow {
      /* Shadow shrinks when hopping/lifting */
      animation: walk-shadow-pulse 0.4s ease-in-out infinite alternate;
    }
    .walking #panda-body {
      /* Subtle squash on impact */
      animation: walk-body-squash 0.4s ease-in-out infinite alternate;
    }
    
    /* Body Waddle: Tilt Left -> Right. Low at tilts (impact), High at transition (passing).
       Cycle: 0% (Left Impact), 25% (Mid-air), 50% (Right Impact), 75% (Mid-air), 100% (Left Impact)
    */
    @keyframes walk-body-waddle {
      0%   { transform: rotate(-6deg) translateY(2px); }  /* Left foot down */
      25%  { transform: rotate(0deg) translateY(-4px); }  /* Mid-step lift */
      50%  { transform: rotate(6deg) translateY(2px); }   /* Right foot down */
      75%  { transform: rotate(0deg) translateY(-4px); }  /* Mid-step lift */
      100% { transform: rotate(-6deg) translateY(2px); }  /* Left foot down */
    }

    /* Head: Counter-rotate to keep eyes relatively level */
    @keyframes walk-head-stabilize {
      0%   { transform: rotate(4deg) translate(2px, 0); }
      25%  { transform: rotate(0deg) translate(0, -1px); }
      50%  { transform: rotate(-4deg) translate(-2px, 0); }
      75%  { transform: rotate(0deg) translate(0, -1px); }
      100% { transform: rotate(4deg) translate(2px, 0); }
    }

    /* Leg Cycle: Plant -> Slide Back (Ground) -> Lift -> Forward */
    @keyframes walk-leg-l {
      0%   { transform: translateY(0); }                       /* Planted */
      15%  { transform: translateY(0) translateX(4px); }      /* Push back slightly (ground) */
      40%  { transform: translateY(-15px) translateX(-2px); } /* Lift High */
      50%  { transform: translateY(-10px) translateX(-5px); } /* Forward swing peak */
      75%  { transform: translateY(0) translateX(0); }        /* Contact */
      100% { transform: translateY(0); }
    }

    /* Right Leg: Same but offset by 50% */
    @keyframes walk-leg-r {
      0%   { transform: translateY(-10px) translateX(-5px); } /* Forward swing peak */
      25%  { transform: translateY(0) translateX(0); }        /* Contact */
      50%  { transform: translateY(0); }                       /* Planted */
      65%  { transform: translateY(0) translateX(4px); }      /* Push back */
      90%  { transform: translateY(-15px) translateX(-2px); } /* Lift High */
      100% { transform: translateY(-10px) translateX(-5px); }
    }

    /* Arms: Opposite to legs (Left Arm moves with Right Leg) */
    @keyframes walk-arm-l {
      0%   { transform: translate(-5px, -5px); }
      50%  { transform: translate(5px, 5px); }
      100% { transform: translate(-5px, -5px); }
    }
    @keyframes walk-arm-r {
      0%   { transform: translate(5px, 5px); }
      50%  { transform: translate(-5px, -5px); }
      100% { transform: translate(5px, 5px); }
    }

    @keyframes walk-shadow-pulse {
      0%   { opacity: 0.3; transform: scaleX(1); }
      100% { opacity: 0.15; transform: scaleX(0.85); }
    }

    @keyframes walk-body-squash {
      0% { transform: scale(1.05, 0.95); }
      100% { transform: scale(0.98, 1.02); }
    }

    /* --- END REALISTIC WALKING --- */

    .facing-left svg { transform: scaleX(-1); }
    #panda-mouth { transition: d 0.3s ease; }
    #panda-eye-l, #panda-eye-r { transition: transform 0.3s cubic-bezier(0.45, 0, 0.55, 1); }
    
    @keyframes eye-blink {
      0%, 90%, 100% { transform: scaleY(1); }
      95% { transform: scaleY(0.1); }
    }
    #panda-eyes-normal {
      animation: eye-blink 4s infinite;
      transform-origin: center 80px;
    }

    .idle-looking #panda-head { animation: head-scan 6s ease-in-out infinite alternate; }
    .landing { animation: landing-squash 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important; }
    .has-rose #rose-group { display: block !important; animation: rose-bloom-reveal 2.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; filter: drop-shadow(0 0 5px rgba(233, 30, 99, 0.4)); }
    .has-rose #flower-bloom { animation: rose-sway 4s ease-in-out infinite alternate; }
    .has-rose .sparkle { animation: sparkle-twinkle 1.5s ease-in-out infinite alternate; }
    .has-rose #panda-arm-r { animation: hold-rose 2.5s ease-out forwards; }
    @keyframes rose-bloom-reveal { 0% { transform: scale(0) rotate(-60deg) translateY(20px); opacity: 0; } 100% { transform: scale(1) rotate(0deg) translateY(0); opacity: 1; } }
    @keyframes rose-sway { 0% { transform: rotate(-5deg); } 100% { transform: rotate(5deg); } }
    @keyframes sparkle-twinkle { 0% { opacity: 0.2; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1.2); } }
    @keyframes hold-rose { 0% { transform: translate(0, 0); } 100% { transform: translate(-15px, -20px) rotate(15deg); } }
    .is-sleeping { 
      filter: brightness(0.85) sepia(0.2) hue-rotate(180deg); /* Night tint */
    }
    .is-sleeping #panda-body { animation: sleep-breath 5s ease-in-out infinite alternate !important; }
    .is-sleeping #panda-head { animation: sleep-head-tilt 5s ease-in-out infinite alternate !important; }
    .is-sleeping #zzz-marks, .is-sleeping #sleep-extras { display: block !important; }
    
    #snot-bubble { 
      animation: snot-pulse 5s ease-in-out infinite; 
      transform-origin: 105px 105px;
    }
    @keyframes snot-pulse {
      0%, 10% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1); opacity: 0.6; }
      90%, 100% { transform: scale(0); opacity: 0; }
    }

    .sleep-star { animation: star-twinkle 2s ease-in-out infinite alternate; }
    .sleep-star:nth-child(2) { animation-delay: 0.5s; }
    .sleep-star:nth-child(3) { animation-delay: 1s; }
    .sleep-star:nth-child(4) { animation-delay: 1.5s; }

    @keyframes star-twinkle {
      0% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
      100% { opacity: 1; transform: scale(1.2) rotate(20deg); }
    }

    #zzz-1 { animation: zzz-float 3s ease-in-out infinite; }
    #zzz-2 { animation: zzz-float 3s ease-in-out infinite 1s; opacity: 0; }
    #zzz-3 { animation: zzz-float 3s ease-in-out infinite 2s; opacity: 0; }
    .is-angry { 
      animation: angry-shake-intense 0.1s linear infinite !important; 
      filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.7)); /* Fiery aura */
    }
    .is-angry #panda-cheek-l, .is-angry #panda-cheek-r { fill: #ff0000 !important; opacity: 1 !important; transform: scale(1.4); }
    .is-angry #panda-head-base { animation: angry-head-pulse 0.2s ease-in-out infinite alternate; }
    .is-angry #anger-extras { display: block !important; }
    
    #anger-mark { 
      animation: anger-mark-pulse 0.4s ease-in-out infinite;
      transform-origin: 170px 50px;
    }
    @keyframes anger-mark-pulse { 0% { transform: scale(0.8); } 100% { transform: scale(1.3); } }

    #vibration-lines path { animation: vibrate-lines 0.1s linear infinite alternate; }
    @keyframes vibrate-lines { 0% { opacity: 0.3; transform: translateX(-2px); } 100% { opacity: 0.8; transform: translateX(2px); } }

    @keyframes angry-head-pulse { 0% { fill: #ffcccc; } 100% { fill: #ff9999; } }
    @keyframes angry-shake-intense { 
      0% { transform: translate(2px, 2px) rotate(0deg); } 
      25% { transform: translate(-2px, -2px) rotate(-2deg); }
      50% { transform: translate(-3px, 1px) rotate(2deg); }
      75% { transform: translate(3px, -1px) rotate(-1deg); }
      100% { transform: translate(2px, 2px) rotate(0deg); } 
    }

    .is-angry #smoke-marks { display: block !important; }
    #smoke-1 { animation: smoke-rise 1s ease-out infinite; }
    #smoke-2 { animation: smoke-rise 1s ease-out infinite 0.3s; }
    #smoke-3 { animation: smoke-rise 1s ease-out infinite 0.6s; }
    @keyframes smoke-rise { 0% { opacity: 0; transform: translateY(10px) scale(0.5); } 50% { opacity: 0.8; } 100% { opacity: 0; transform: translateY(-30px) scale(1.5); } }
    @keyframes angry-head-red { 0% { fill: white; } 100% { fill: #ffcccc; } }
    @keyframes angry-shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 20% { transform: translate(-1px, -1px) rotate(-1deg); } 40% { transform: translate(-2px, 0px) rotate(1deg); } 60% { transform: translate(2px, 1px) rotate(0deg); } 80% { transform: translate(1px, -1px) rotate(1deg); } 100% { transform: translate(-1px, 1px) rotate(0deg); } }
    @keyframes zzz-float { 0% { opacity: 0; transform: translate(0, 10px) scale(0.5); } 30% { opacity: 1; } 100% { opacity: 0; transform: translate(15px, -30px) scale(1.2); } }
    @keyframes sleep-breath { 0% { transform: scale(1, 1); } 100% { transform: scale(1.05, 0.95); transform-origin: center bottom; } }
    @keyframes sleep-head-tilt { 0% { transform: rotate(0deg) translateY(0px); } 100% { transform: rotate(3deg) translateY(2px); } }
    @keyframes landing-squash { 0% { transform: scale(1, 1); } 40% { transform: scale(1.25, 0.75); transform-origin: center bottom; } 100% { transform: scale(1, 1); } }
    @keyframes raise-arm-l { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-12px, -45px) rotate(-15deg); } }
    @keyframes handshake-right { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(12px, -30px) rotate(20deg); } }
    @keyframes happy-kick { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px) rotate(10deg); } }
    @keyframes raise-arm-r { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(12px, -45px) rotate(15deg); } }
    svg { width: 100%; height: 100%; transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); shape-rendering: geometricPrecision; }
    * { transform-box: fill-box; transform-origin: center; }
  `;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);

  function applyOutfit() {
    if (!wrapper) return;
    wrapper.classList.remove('outfit-king', 'outfit-lady', 'outfit-rapper', 'outfit-fairy', 'outfit-study');
    if (settings.selectedOutfit !== 'none') wrapper.classList.add(`outfit-${settings.selectedOutfit}`);
  }

  function toggleNotepad() {
    const isVisible = notepad.style.display === 'flex';
    notepad.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) { updateNotepadPosition(); textarea.focus(); }
  }

  function toggleDance() {
    if (isDragging || isWalking || settings.enableSleep || isAngry) return;
    const isDancing = wrapper.classList.toggle('is-dancing');
    if (isDancing) {
      if (mouth) mouth.setAttribute('d', 'M90 110 A10 10 0 1 0 110 110 A10 10 0 1 0 90 110');
    } else {
      if (mouth) mouth.setAttribute('d', 'M95 105 Q100 110 105 105');
    }
  }

  let mouseTraveled = 0;
  let lastX = 0, lastY = 0;
  wrapper.addEventListener('mousemove', (e) => {
    if (isDragging) return;
    const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
    mouseTraveled += dist;
    lastX = e.clientX; lastY = e.clientY;
    
    if (mouseTraveled > 1000) {
      triggerHappy();
      mouseTraveled = 0;
    }
  });
  setInterval(() => { mouseTraveled = Math.max(0, mouseTraveled - 50); }, 200);

  function triggerHappy() {
    if (isAngry || settings.enableSleep) return;
    wrapper.classList.add('is-blushing');
    if (mouth) mouth.setAttribute('d', 'M85 105 Q100 125 115 105');
    setTimeout(() => {
      wrapper.classList.remove('is-blushing');
      if (mouth) mouth.setAttribute('d', 'M95 105 Q100 110 105 105');
    }, 2000);
  }

  const quotes = ["Feed me! 🎋", "I love you! ❤️", "Zzz... 😴", "Let's dance! 🎵", "You're doing great! ✨"];

  function getContextSpeech() {
    const host = window.location.hostname;
    if (host.includes('github.com')) return "Coding hard? You're a pro! 💻";
    if (host.includes('youtube.com')) return "Watching videos? Save some bamboo! 🍿";
    if (host.includes('google.com')) return "Searching for bamboo? 🔍";
    if (host.includes('stackoverflow.com')) return "Finding answers? Genius! 💡";
    if (host.includes('facebook.com') || host.includes('twitter.com') || host.includes('instagram.com')) return "Scrolling again? Take a break! 🛑";
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function showQuote() {
    if (settings.enableSleep || isAngry || !bubble) return;
    bubble.textContent = getContextSpeech();
    bubble.classList.add('active');
    setTimeout(() => bubble.classList.remove('active'), 4000);
  }
  setInterval(showQuote, 30000);

  function updateNotepadPosition() {
    const wrapperRect = wrapper.getBoundingClientRect();
    notepad.style.left = `${wrapperRect.left - 55}px`;
    notepad.style.top = `${wrapperRect.top - 230}px`;
  }

  chrome.storage.sync.get(['pandaNotes'], (result) => { if (result.pandaNotes) textarea.value = result.pandaNotes; });
  textarea.addEventListener('input', () => { chrome.storage.sync.set({ pandaNotes: textarea.value }); });
  
  let menuOpen = false;
  wrapper.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
    menuOpen = !menuOpen;
    if (menuOpen) menu.classList.add('active'); else menu.classList.remove('active');
  });

  menu.addEventListener('mousedown', (e) => e.stopPropagation());

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    const action = e.target.closest('.menu-item')?.dataset.action;
    if (!action) return;
    
    menuOpen = false;
    menu.classList.remove('active');
    
    if (action === 'note') toggleNotepad();
    else if (action === 'sleep') {
      settings.enableSleep = !settings.enableSleep;
      chrome.storage.sync.set({ enableSleep: settings.enableSleep });
      applySleepVisuals();
    }
    else if (action === 'timer') startPomodoro(25);
    else if (action === 'dance') toggleDance();
    else if (action === 'hide') {
      settings.enablePanda = false;
      chrome.storage.sync.set({ enablePanda: false });
      removePanda();
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (menuOpen && !e.composedPath().includes(wrapper)) {
      menuOpen = false;
      menu.classList.remove('active');
    }
  });

  function applySleepVisuals() {
    if (!wrapper) return;
    if (settings.enableSleep && !isAngry) {
      wrapper.classList.add('is-sleeping');
      if (eyesNormal) eyesNormal.style.display = 'none';
      closedL.style.display = 'block'; closedR.style.display = 'block';
      if (mouth) mouth.setAttribute('d', 'M90 115 A10 10 0 1 0 110 115 A10 10 0 1 0 90 115');
    } else {
      wrapper.classList.remove('is-sleeping');
      if (!isAngry) {
        if (settings.selectedOutfit !== 'rapper') {
          if (eyesNormal) eyesNormal.style.display = 'block';
        }
        closedL.style.display = 'none'; closedR.style.display = 'none';
        if (mouth) mouth.setAttribute('d', 'M95 105 Q100 110 105 105');
      }
    }
  }

  function applyAngryVisuals(on) {
    const angerExtras = wrapper.querySelector('#anger-extras');
    if (on) {
      isAngry = true;
      wrapper.classList.remove('is-sleeping');
      wrapper.classList.add('is-angry');
      if (eyesNormal) eyesNormal.style.display = 'block';
      if (closedL) closedL.style.display = 'none'; 
      if (closedR) closedR.style.display = 'none';
      if (browL) browL.style.display = 'block'; 
      if (browR) browR.style.display = 'block';
      if (angerExtras) angerExtras.style.display = 'block';
      // Jagged gritting teeth mouth
      if (mouth) mouth.setAttribute('d', 'M85 115 L95 110 L100 115 L105 110 L115 115');
    } else {
      isAngry = false;
      wrapper.classList.remove('is-angry');
      if (browL) browL.style.display = 'none'; 
      if (browR) browR.style.display = 'none';
      if (angerExtras) angerExtras.style.display = 'none';
      applySleepVisuals();
    }
  }

  function updateEyes(x, y) {
    if (eyeL && eyeR && settings.enableEyes && !settings.enableSleep && !isAngry) {
      const transform = `translate(${x}px, ${y}px)`;
      eyeL.style.transform = transform; eyeR.style.transform = transform;
      pupilL.style.transform = transform; pupilR.style.transform = transform;
    } else if (eyeL && eyeR && !isAngry) {
      eyeL.style.transform = 'none'; eyeR.style.transform = 'none';
    }
  }

  document.addEventListener('mousemove', (e) => {
    lastMouseMove = Date.now();
    if (isDragging || !settings.enableEyes || settings.enableSleep || isAngry) return;
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperCenterX = wrapperRect.left + wrapperRect.width / 2;
    const wrapperCenterY = wrapperRect.top + wrapperRect.height / 2;
    const angle = Math.atan2(e.clientY - wrapperCenterY, e.clientX - wrapperCenterX);
    const distance = Math.min(8, Math.hypot(e.clientX - wrapperCenterX, e.clientY - wrapperCenterY) / 15);
    updateEyes(Math.cos(angle) * distance, Math.sin(angle) * distance);
  });

  setInterval(() => {
    if (isDragging || isWalking || !settings.enableEyes || settings.enableSleep || isAngry) return;
    if (Date.now() - lastMouseMove > 2000) {
      wrapper.classList.add('idle-looking');
      if (Math.random() > 0.7) updateEyes((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8);
    } else { wrapper.classList.remove('idle-looking'); }
  }, 1500);

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

  window.addEventListener('resize', () => {
    if (!wrapper) return;
    const pos = clampPosition(wrapper.offsetLeft, wrapper.offsetTop);
    wrapper.style.left = `${pos.left}px`;
    wrapper.style.top = `${pos.top}px`;
    savePosition();
  });

  function walkAround(forcedX = null) {
    if (isDragging || isWalking || !settings.enableWalking || settings.enableSleep || isAngry) return;
    isWalking = true;
    const maxX = window.innerWidth - 90;
    const bottomY = window.innerHeight - 90;
    // If forcedX is provided, center the panda (70px wide) on that point. Otherwise pick random.
    const targetX = forcedX !== null ? forcedX - 35 : Math.max(20, Math.random() * maxX);
    const pos = clampPosition(targetX, bottomY);
    
    // Face direction
    if (pos.left < wrapper.offsetLeft) wrapper.classList.add('facing-left'); else wrapper.classList.remove('facing-left');
    
    // Calculate Speed (pixels per second)
    const currentLeft = wrapper.offsetLeft;
    const distance = Math.abs(pos.left - currentLeft);
    const speed = 60; // pixels per second
    const duration = Math.max(2, distance / speed); // Minimum 2s walk

    // Apply custom transition duration for this walk, preserving transform transition
    wrapper.style.transition = `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), left ${duration}s linear, top 0.5s ease-out`;

    wrapper.classList.add('walking');
    wrapper.style.left = `${pos.left}px`;
    wrapper.style.top = `${pos.top}px`;

    setTimeout(() => { 
      isWalking = false; 
      wrapper.classList.remove('walking'); 
      savePosition();
      // Reset transition to default
      wrapper.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), left 0.4s ease-out, top 0.4s ease-out';
    }, duration * 1000);
  }

  // Double click at bottom to summon panda
  document.addEventListener('dblclick', (e) => {
    // If user double clicks in the bottom 150px of the screen
    if (e.clientY > window.innerHeight - 150) {
      // Don't trigger if clicking on the panda itself (handled by its own dblclick for rose)
      if (e.composedPath().includes(wrapper)) return;
      walkAround(e.clientX);
    }
  });

  setInterval(() => { if (Math.random() > 0.6) walkAround(); }, 8000);

  wrapper.addEventListener('click', () => {
    if (isDragging || isAngry) return;
    if (settings.enableSleep) { applyAngryVisuals(true); setTimeout(() => applyAngryVisuals(false), 2000); return; }
    wrapper.classList.add('hands-up');
    if (mouth) mouth.setAttribute('d', 'M85 105 Q100 125 115 105');
    setTimeout(() => { wrapper.classList.remove('hands-up'); if (mouth) mouth.setAttribute('d', 'M95 105 Q100 110 105 105'); }, 1000);
  });

  wrapper.addEventListener('dblclick', () => {
    if (isDragging || isAngry || settings.enableSleep) return;
    isBlooming = !isBlooming;
    if (isBlooming) wrapper.classList.add('has-rose'); else wrapper.classList.remove('has-rose');
  });

  let startX, startY;
  wrapper.addEventListener('mousedown', (e) => {
    if (settings.enableSleep || isAngry) return;
    isDragging = true;
    startX = e.clientX - wrapper.offsetLeft;
    startY = e.clientY - wrapper.offsetTop;
    wrapper.style.transition = 'none';
    notepad.style.display = 'none';
  });

  document.addEventListener('mousemove', (e) => { if (isDragging) { wrapper.style.left = `${e.clientX - startX}px`; wrapper.style.top = `${e.clientY - startY}px`; } });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    const bottomY = window.innerHeight - 90;
    const pos = clampPosition(wrapper.offsetLeft, bottomY);
    wrapper.style.transition = 'left 0.4s ease-out, top 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    wrapper.style.left = `${pos.left}px`;
    wrapper.style.top = `${pos.top}px`;
    setTimeout(() => { wrapper.classList.add('landing'); savePosition(); setTimeout(() => { wrapper.classList.remove('landing'); wrapper.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), left 4s cubic-bezier(0.45, 0, 0.55, 1), top 0.8s cubic-bezier(0.65, 0, 0.35, 1)'; }, 500); }, 800);
  });

  chrome.storage.sync.get(['pandaPos'], (result) => { 
    if (result.pandaPos) { 
      wrapper.style.left = result.pandaPos.left; 
      wrapper.style.top = result.pandaPos.top; 
    } else {
      wrapper.style.bottom = '20px';
      wrapper.style.right = '20px';
    }
  });

  applySleepVisuals();
  applyOutfit();
  applyWeather();

  function applyWeather() {
    if (!wrapper) return;
    chrome.storage.sync.get(['weatherType'], (result) => {
      wrapper.classList.remove('is-raining', 'is-snowing', 'is-night');
      const weather = result.weatherType || 'clear';
      if (weather === 'rain') wrapper.classList.add('is-raining');
      else if (weather === 'snow') wrapper.classList.add('is-snowing');
      else if (weather === 'night') wrapper.classList.add('is-night');
    });
  }

  window.addEventListener('pandaSleepUpdate', () => applySleepVisuals());
  window.addEventListener('pandaOutfitUpdate', () => { applyOutfit(); applySleepVisuals(); });
  window.addEventListener('pandaWeatherUpdate', () => applyWeather());
}

function savePosition() { if (wrapper) chrome.storage.sync.set({ pandaPos: { left: wrapper.style.left, top: wrapper.style.top } }); }
function removePanda() { if (container) { container.remove(); container = null; wrapper = null; } }

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'UPDATE_SETTINGS') {
    settings[msg.id] = msg.value;
    if (msg.id === 'enablePanda') msg.value ? injectPanda() : removePanda();
    else if (msg.id === 'enableSleep') window.dispatchEvent(new CustomEvent('pandaSleepUpdate'));
    else if (msg.id === 'selectedOutfit') window.dispatchEvent(new CustomEvent('pandaOutfitUpdate'));
  }
});

if (document.readyState === 'complete') { loadAndInject(); } else { window.addEventListener('load', loadAndInject); }

function loadAndInject() {
  chrome.storage.sync.get(['enablePanda', 'enableWalking', 'enableEyes', 'enableSleep', 'selectedOutfit'], (result) => {
    settings = { ...settings, ...result };
    if (settings.enablePanda) injectPanda();
  });
}
