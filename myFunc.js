window.myTimer = setInterval(function() {
    /* Example: Send data to your Chrome extension*/
    document.dispatchEvent(new CustomEvent('SetIt', {
        detail: window.rv
    }));
}, 500);