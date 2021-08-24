function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

let useInterval =  setInterval(() => {
    try {
        let use_btn = document.querySelector("#__layout > div > div:nth-child(2) > div > div > div.sidebar.tw-hidden.sm\\:tw-flex.sm\\:tw-flex-col.tw-flex-grow-0.tw-flex-shrink-0.tw-w-48.tw-pt-4 > div:nth-child(1) > div > div:nth-child(4) > div.tw-hidden.sm\\:tw-flex > button.activeuse")
        if(use_btn) {
            triggerMouseEvent (use_btn, "mouseover")
            triggerMouseEvent (use_btn, "mousedown")
            triggerMouseEvent (use_btn, "mouseup")
            triggerMouseEvent (use_btn, "click")
            clearInterval(useInterval)
        }
    } catch (err) {}
}, 100)