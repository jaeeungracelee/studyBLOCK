chrome.runtime.onInstalled.addListener(() => {
    console.log('studyBLOCK installed.');
  });

chrome.runtime.onInstalled.addListener(() => {
updateBlockingRules();
});

chrome.runtime.onStartup.addListener(() => {
updateBlockingRules();
});

function updateBlockingRules() {
chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3],
    addRules: [
    {
        "id": 1,
        "priority": 1,
        "action": {
        "type": "block"
        },
        "condition": {
        "urlFilter": "*://*.instagram.com/*",
        "resourceTypes": ["main_frame"]
        }
    },
    {
        "id": 2,
        "priority": 1,
        "action": {
        "type": "block"
        },
        "condition": {
        "urlFilter": "*://www.youtube.com/shorts/*",
        "resourceTypes": ["main_frame"]
        }
    },
    {
        "id": 3,
        "priority": 1,
        "action": {
        "type": "block"
        },
        "condition": {
        "urlFilter": "*://www.youtube.com/*",
        "resourceTypes": ["main_frame"],
        "excludedUrlPatterns": [
            "*tutorial*",
            "*lecture*",
            "*education*",
            "*course*"
        ]
        }
    }
    ]
});
console.log('studyBLOCK rules updated.');
}
