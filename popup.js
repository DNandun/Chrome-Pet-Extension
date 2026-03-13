// popup.js
const switches = ['enablePanda', 'enableWalking', 'enableEyes', 'enableSleep'];
const selectors = ['selectedOutfit'];

// Load saved settings
chrome.storage.sync.get([...switches, ...selectors], (result) => {
  switches.forEach(id => {
    const el = document.getElementById(id);
    if (result[id] !== undefined) el.checked = result[id];
  });
  selectors.forEach(id => {
    const el = document.getElementById(id);
    if (result[id] !== undefined) el.value = result[id];
  });
});

// Save switch settings
switches.forEach(id => {
  document.getElementById(id).addEventListener('change', (e) => {
    const value = e.target.checked;
    chrome.storage.sync.set({ [id]: value });
    sendMessage({ type: 'UPDATE_SETTINGS', id, value });
  });
});

// Save selector settings
selectors.forEach(id => {
  document.getElementById(id).addEventListener('change', (e) => {
    const value = e.target.value;
    chrome.storage.sync.set({ [id]: value });
    sendMessage({ type: 'UPDATE_SETTINGS', id, value });
  });
});

function sendMessage(msg) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) chrome.tabs.sendMessage(tabs[0].id, msg);
  });
}
