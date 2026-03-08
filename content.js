const PANDA_SVG = `
<svg width="70" height="70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
  <circle id="panda-leg-l" cx="55" cy="175" r="22" fill="#2d2926" />
  <circle id="panda-leg-r" cx="145" cy="175" r="22" fill="#2d2926" />
  <circle id="panda-arm-l" cx="50" cy="130" r="20" fill="#2d2926" />
  <circle id="panda-arm-r" cx="150" cy="130" r="20" fill="#2d2926" />
  
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
    <div class="menu-item" data-action="dance" title="Dance">🎵</div>
    <div class="menu-item" data-action="hide" title="Hide">❌</div>
  `;
  shadow.appendChild(menu);

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
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), 
                  left 4s cubic-bezier(0.45, 0, 0.55, 1), 
                  top 0.8s cubic-bezier(0.65, 0, 0.35, 1);
      will-change: transform, left, top;
    }
    #panda-wrapper:active {
      cursor: grabbing;
      transition: transform 0.2s ease !important;
    }

    /* OUTFIT CSS */
    .outfit-king #outfit-king-crown { display: block !important; }
    .outfit-lady #outfit-lady-bow { display: block !important; }
    
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

    .hands-up #panda-leg-l { animation: happy-kick 0.5s ease-in-out 2; }
    .hands-up #panda-leg-r { animation: happy-kick 0.5s ease-in-out 2 alternate-reverse; }
    .walking { animation: walk-cycle 0.6s cubic-bezier(0.45, 0, 0.55, 1) infinite !important; }
    .walking #panda-head { animation: head-waddle 0.6s ease-in-out infinite !important; }
    .walking #panda-leg-l { animation: step-l 0.6s ease-in-out infinite; }
    .walking #panda-leg-r { animation: step-r 0.6s ease-in-out infinite; }
    .walking #panda-arm-l { animation: arm-swing-l 0.6s ease-in-out infinite; }
    .walking #panda-arm-r { animation: arm-swing-r 0.6s ease-in-out infinite; }
    .walking #panda-body { animation: body-squash 0.3s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate; }
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
    .is-sleeping #panda-body { animation: sleep-breath 4s ease-in-out infinite alternate !important; }
    .is-sleeping #panda-head { animation: sleep-head-tilt 4s ease-in-out infinite alternate !important; }
    .is-sleeping #zzz-marks { display: block !important; }
    #zzz-1 { animation: zzz-float 3s ease-in-out infinite; }
    #zzz-2 { animation: zzz-float 3s ease-in-out infinite 1s; opacity: 0; }
    #zzz-3 { animation: zzz-float 3s ease-in-out infinite 2s; opacity: 0; }
    .is-angry { animation: angry-shake 0.1s linear infinite !important; }
    .is-angry #panda-cheek-l, .is-angry #panda-cheek-r { fill: #ff4d4d !important; opacity: 0.8 !important; }
    .is-angry #panda-head-base { animation: angry-head-red 0.5s ease-in-out forwards; }
    
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
    @keyframes walk-cycle { 0%, 100% { transform: translateY(0) rotate(-7deg); } 50% { transform: translateY(0) rotate(7deg); } 25%, 75% { transform: translateY(-10px) rotate(0deg); } }
    @keyframes head-waddle { 0%, 100% { transform: translate(-3px, 2px) rotate(-3deg); } 50% { transform: translate(3px, 2px) rotate(3deg); } 25%, 75% { transform: translate(0, -2px) rotate(0deg); } }
    @keyframes step-l { 0%, 100% { transform: translateY(0); } 25% { transform: translateY(-18px) translateX(8px); } 50%, 75% { transform: translateY(0); } }
    @keyframes step-r { 0%, 25%, 100% { transform: translateY(0); } 75% { transform: translateY(-18px) translateX(8px); } 50% { transform: translateY(0); } }
    @keyframes arm-swing-l { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(8px, -8px); } }
    @keyframes arm-swing-r { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(8px, -8px); } }
    @keyframes body-squash { 0% { transform: scale(1.08, 0.88); transform-origin: center bottom; } 100% { transform: scale(0.95, 1.05); transform-origin: center bottom; } }
    @keyframes landing-squash { 0% { transform: scale(1, 1); } 40% { transform: scale(1.25, 0.75); transform-origin: center bottom; } 100% { transform: scale(1, 1); } }
    @keyframes raise-arm-l { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-12px, -45px) rotate(-15deg); } }
    @keyframes handshake-right { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(12px, -30px) rotate(20deg); } }
    @keyframes happy-kick { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px) rotate(10deg); } }
    @keyframes raise-arm-r { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(12px, -45px) rotate(15deg); } }
    @keyframes walk-leg { 0% { transform: translateY(0px); } 100% { transform: translateY(-22px) translateX(6px); } }
    svg { width: 100%; height: 100%; transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); shape-rendering: geometricPrecision; }
    * { transform-box: fill-box; transform-origin: center; }
  `;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);

  function applyOutfit() {
    if (!wrapper) return;
    wrapper.classList.remove('outfit-king', 'outfit-lady', 'outfit-rapper', 'outfit-fairy');
    if (settings.selectedOutfit !== 'none') wrapper.classList.add(`outfit-${settings.selectedOutfit}`);
  }

  function toggleNotepad() {
    const isVisible = notepad.style.display === 'flex';
    notepad.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) { updateNotepadPosition(); textarea.focus(); }
  }

  function toggleDance() {
    if (isDragging || isWalking || settings.enableSleep || isAngry) return;
    wrapper.classList.toggle('is-dancing');
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
    menuOpen = !menuOpen;
    if (menuOpen) menu.classList.add('active'); else menu.classList.remove('active');
  });

  menu.addEventListener('click', (e) => {
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
    else if (action === 'dance') toggleDance();
    else if (action === 'hide') {
      settings.enablePanda = false;
      chrome.storage.sync.set({ enablePanda: false });
      removePanda();
    }
  });

  document.addEventListener('mousedown', (e) => {
    if (menuOpen && !wrapper.contains(e.target) && !menu.contains(e.target)) {
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
    if (on) {
      isAngry = true;
      wrapper.classList.remove('is-sleeping');
      wrapper.classList.add('is-angry');
      if (eyesNormal) eyesNormal.style.display = 'block';
      closedL.style.display = 'none'; closedR.style.display = 'none';
      browL.style.display = 'block'; browR.style.display = 'block';
      if (mouth) mouth.setAttribute('d', 'M85 120 Q100 105 115 120');
    } else {
      isAngry = false;
      wrapper.classList.remove('is-angry');
      browL.style.display = 'none'; browR.style.display = 'none';
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

  function walkAround() {
    if (isDragging || isWalking || !settings.enableWalking || settings.enableSleep || isAngry) return;
    isWalking = true;
    const maxX = window.innerWidth - 90;
    const bottomY = window.innerHeight - 90;
    const targetX = Math.max(20, Math.random() * maxX);
    const pos = clampPosition(targetX, bottomY);
    if (pos.left < wrapper.offsetLeft) wrapper.classList.add('facing-left'); else wrapper.classList.remove('facing-left');
    wrapper.classList.add('walking');
    wrapper.style.left = `${pos.left}px`;
    wrapper.style.top = `${pos.top}px`;
    setTimeout(() => { isWalking = false; wrapper.classList.remove('walking'); savePosition(); }, 8000);
  }

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

  window.addEventListener('pandaSleepUpdate', () => applySleepVisuals());
  window.addEventListener('pandaOutfitUpdate', () => { applyOutfit(); applySleepVisuals(); });
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
