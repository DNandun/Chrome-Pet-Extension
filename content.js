const PANDA_SVG = `
<svg width="70" height="70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Body -->
  <ellipse cx="100" cy="150" rx="60" ry="45" fill="white" stroke="#2d2926" stroke-width="8"/>
  <!-- Arms/Legs -->
  <circle id="panda-leg-l" cx="55" cy="175" r="22" fill="#2d2926" />
  <circle id="panda-leg-r" cx="145" cy="175" r="22" fill="#2d2926" />
  <circle id="panda-arm-l" cx="50" cy="130" r="20" fill="#2d2926" />
  <circle id="panda-arm-r" cx="150" cy="130" r="20" fill="#2d2926" />
  
  <!-- Ears -->
  <circle cx="60" cy="40" r="25" fill="#2d2926" />
  <circle cx="140" cy="40" r="25" fill="#2d2926" />
  <!-- Head -->
  <ellipse cx="100" cy="85" rx="70" ry="60" fill="white" stroke="#2d2926" stroke-width="8"/>
  <!-- Eyes -->
  <ellipse cx="75" cy="80" rx="18" ry="22" fill="#2d2926" />
  <ellipse cx="125" cy="80" rx="18" ry="22" fill="#2d2926" />
  <circle cx="75" cy="75" r="5" fill="white" />
  <circle cx="125" cy="75" r="5" fill="white" />
  <!-- Nose -->
  <path id="panda-mouth" d="M95 105 Q100 110 105 105" stroke="#2d2926" stroke-width="4" fill="none" />
  <!-- Cheeks -->
  <circle cx="55" cy="105" r="8" fill="#ffb7c5" opacity="0.6" />
  <circle cx="145" cy="105" r="8" fill="#ffb7c5" opacity="0.6" />
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

  const mouth = wrapper.querySelector('#panda-mouth');

  const style = document.createElement('style');
  style.textContent = `
    #panda-wrapper {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 70px;
      height: 70px;
      cursor: grab;
      z-index: 999999;
      user-select: none;
      /* Ultra-smooth cubic-bezier for running */
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), 
                  left 2s cubic-bezier(0.65, 0, 0.35, 1), 
                  top 0.8s cubic-bezier(0.65, 0, 0.35, 1);
      will-change: transform, left, top;
    }
    #panda-wrapper:active {
      cursor: grabbing;
      transition: transform 0.2s ease !important;
    }
    .hands-up #panda-arm-l {
      animation: raise-arm-l 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6) 2;
    }
    .hands-up #panda-arm-r {
      animation: handshake-right 0.2s linear 4;
    }
    .walking {
      animation: walk-bob 0.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate !important;
    }
    .walking #panda-leg-l {
      animation: walk-leg 0.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
    }
    .walking #panda-leg-r {
      animation: walk-leg 0.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate-reverse;
    }
    .walking ellipse[cy="150"] {
      animation: body-squash 0.5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
    }
    .facing-left svg {
      transform: scaleX(-1);
    }
    #panda-mouth {
      transition: d 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes walk-bob {
      0% { transform: translateY(0px) rotate(-6deg); }
      100% { transform: translateY(-10px) rotate(6deg); }
    }
    @keyframes body-squash {
      0% { transform: scale(1.1, 0.85); transform-origin: center bottom; } 
      100% { transform: scale(0.92, 1.08); transform-origin: center bottom; }
    }
    @keyframes raise-arm-l {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-12px, -45px) rotate(-15deg); }
    }
    @keyframes handshake-right {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(15px, -15px) rotate(10deg); }
    }
    @keyframes raise-arm-r {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(12px, -45px) rotate(15deg); }
    }
    @keyframes walk-leg {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-22px) translateX(6px); }
    }
    svg {
      width: 100%;
      height: 100%;
      transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      shape-rendering: geometricPrecision;
    }
    * {
      transform-box: fill-box;
      transform-origin: center;
    }
  `;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);

  let isWalking = false;

  function walkAround() {
    if (isDragging || isWalking) return;
    
    isWalking = true;
    
    const maxX = window.innerWidth - 90;
    // Constrain to bottom
    const bottomY = window.innerHeight - 90;
    
    const targetX = Math.max(20, Math.random() * maxX);

    const currentX = wrapper.offsetLeft;
    if (targetX < currentX) {
      wrapper.classList.add('facing-left');
    } else {
      wrapper.classList.remove('facing-left');
    }

    wrapper.classList.add('walking');
    wrapper.style.left = `${targetX}px`;
    wrapper.style.top = `${bottomY}px`;
    wrapper.style.bottom = 'auto';
    wrapper.style.right = 'auto';

    setTimeout(() => {
      wrapper.classList.remove('walking');
      isWalking = false;
      
      chrome.storage.sync.set({
        pandaPos: {
          left: wrapper.style.left,
          top: wrapper.style.top
        }
      });
    }, 2000); // Matches the new 2s running transition
  }

  // Start walking randomly every 8-15 seconds for a more natural feel
  setInterval(() => {
    if (!isDragging && !isWalking && Math.random() > 0.6) {
      walkAround();
    }
  }, 8000);

  wrapper.addEventListener('click', () => {
    if (isDragging) return;
    
    // Hands up animation
    wrapper.classList.add('hands-up');
    
    // Smile animation
    if (mouth) {
      mouth.setAttribute('d', 'M85 105 Q100 125 115 105');
    }

    setTimeout(() => {
      wrapper.classList.remove('hands-up');
      if (mouth) {
        mouth.setAttribute('d', 'M95 105 Q100 110 105 105');
      }
    }, 800); // 2 iterations of 0.4s = 0.8s
  });

  // Load position
  chrome.storage.sync.get(['pandaPos'], (result) => {
    if (result.pandaPos) {
      wrapper.style.left = result.pandaPos.left;
      wrapper.style.top = result.pandaPos.top;
      wrapper.style.bottom = 'auto';
      wrapper.style.right = 'auto';
    }
  });

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
}

injectPanda();
