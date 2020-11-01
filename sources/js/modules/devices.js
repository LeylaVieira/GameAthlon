// Detect device type
function f_detectDevices() {
    if (typeof window.orientation !== "undefined" || /Mobi/.test(window.navigator.userAgent)) {
        HTML.classList.add("mobile-device");
    } else {
        HTML.classList.add("non-mobile-device");
    }
    if (/ipad/i.test(navigator.userAgent)) {
        HTML.classList.add("ipad");
    }
    if (/iphone/i.test(navigator.userAgent)) {
        HTML.classList.add("iphone");
    }
    if (/Trident/.test(navigator.userAgent)) {
        HTML.classList.add("iexplorer");
    }
    if (/Edge/.test(navigator.userAgent)) {
        HTML.classList.add("edge");
    }
    if (/Firefox/.test(navigator.userAgent)) {
        HTML.classList.add("firefox");
    }
    if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
        HTML.classList.add("chrome");
    }
    if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
        HTML.classList.add("safari");
    }
}
