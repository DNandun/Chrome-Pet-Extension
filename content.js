const PANDA_SVG = `
<svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Body -->
  <ellipse cx="100" cy="150" rx="60" ry="45" fill="white" stroke="#2d2926" stroke-width="8"/>
  <!-- Arms/Legs -->
  <circle id="panda-leg-l" cx="55" cy="175" r="22" fill="#2d2926" />
  <circle id="panda-leg-r" cx="145" cy="175" r="22" fill="#2d2926" />
  <circle cx="50" cy="130" r="20" fill="#2d2926" />
  <circle cx="150" cy="130" r="20" fill="#2d2926" />
  
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
      width: 100px;
      height: 100px;
      cursor: grab;
      z-index: 999999;
      user-select: none;
      transition: transform 0.2s ease, left 2s ease-in-out, top 2s ease-in-out;
      animation: float 3s ease-in-out infinite;
    }
    #panda-wrapper:active {
      cursor: grabbing;
      transition: none;
    }
    .waving {
      animation: wave 0.5s ease-in-out !important;
    }
    .walking #panda-leg-l {
      animation: walk-leg 0.4s ease-in-out infinite alternate;
    }
    .walking #panda-leg-r {
      animation: walk-leg 0.4s ease-in-out infinite alternate-reverse;
    }
    #panda-mouth {
      transition: d 0.2s ease;
    }
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
    @keyframes walk-leg {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-15px); }
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);

  let isWalking = false;

  function walkAround() {
    if (isDragging || isWalking) return;
    
    isWalking = true;
    wrapper.classList.add('walking');

    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    wrapper.style.left = `${randomX}px`;
    wrapper.style.top = `${randomY}px`;
    wrapper.style.bottom = 'auto';
    wrapper.style.right = 'auto';

    setTimeout(() => {
      wrapper.classList.remove('walking');
      isWalking = false;
      
      // Save position
      chrome.storage.sync.set({
        pandaPos: {
          left: wrapper.style.left,
          top: wrapper.style.top
        }
      });
    }, 2000); // Matches the 2s transition in CSS
  }

  // Start walking randomly every 5-10 seconds
  setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance to walk every interval
      walkAround();
    }
  }, 5000);

  wrapper.addEventListener('click', () => {
    if (isDragging) return;
    
    // Wave animation
    wrapper.classList.add('waving');
    
    // Smile animation
    if (mouth) {
      mouth.setAttribute('d', 'M85 105 Q100 125 115 105');
    }

    setTimeout(() => {
      wrapper.classList.remove('waving');
      if (mouth) {
        mouth.setAttribute('d', 'M95 105 Q100 110 105 105');
      }
    }, 500);
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
