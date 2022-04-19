chrome.runtime.onInstalled.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['script.js']
    });
});

