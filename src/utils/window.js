function triggerResize() {
    // Trigger window resize function in javascript
    // source path : http://codrate.com/questions/how-can-trigger-the-window-resize-event-manually-in-javascript
    // if (typeof (Event) === 'function') {
    //     // modern browsers
    //     console.log("triggerResize() called dispatchEvent() (modern browser)")
        // window.dispatchEvent(new Event('resize'));
    // } else {
        // This will be executed on old browsers and especially IE
        setTimeout(() => {
            console.log("triggerResize() called initUIEvent() (older browser)")
            var resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
        }, 200);    // Firefox can't use window.dispatchEvent and needs 200ms timeout to render properly; both Chrome and IE Edge don't
    // }
}

export { 
    triggerResize
};