export const consoleApps = (key, payload) => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        const message = JSON.stringify({
            key,
            payload,
        });
        window.ReactNativeWebView.postMessage(message);
    }
}