function triggerResize() {
    // Trigger window resize function in javascript
    // source path : http://codrate.com/questions/how-can-trigger-the-window-resize-event-manually-in-javascript
    if (typeof (Event) === 'function') {
        // modern browsers
        window.dispatchEvent(new Event('resize'));
    } else {
        // This will be executed on old browsers and especially IE
        var resizeEvent = window.document.createEvent('UIEvents');
        resizeEvent.initUIEvent('resize', true, false, window, 0);
        window.dispatchEvent(resizeEvent);
    }
}

export { 
    triggerResize
};