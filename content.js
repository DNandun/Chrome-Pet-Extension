const PANDA_SVG = `
<svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Ears -->
  <circle cx="50" cy="50" r="30" fill="#2d2926" />
  <circle cx="150" cy="50" r="30" fill="#2d2926" />
  <!-- Head -->
  <ellipse cx="100" cy="110" rx="80" ry="70" fill="white" stroke="#2d2926" stroke-width="8"/>
  <!-- Eyes -->
  <ellipse cx="70" cy="100" rx="20" ry="25" fill="#2d2926" />
  <ellipse cx="130" cy="100" rx="20" ry="25" fill="#2d2926" />
  <circle cx="70" cy="95" r="6" fill="white" />
  <circle cx="130" cy="95" r="6" fill="white" />
  <!-- Nose -->
  <path d="M95 125 Q100 130 105 125" stroke="#2d2926" stroke-width="4" fill="none" />
  <!-- Cheeks -->
  <circle cx="50" cy="130" r="10" fill="#ffb7c5" opacity="0.6" />
  <circle cx="150" cy="130" r="10" fill="#ffb7c5" opacity="0.6" />
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
