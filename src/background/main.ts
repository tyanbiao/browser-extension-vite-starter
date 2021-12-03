chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    sendResponse('ok')
    return true
})
console.log('background.js loaded')