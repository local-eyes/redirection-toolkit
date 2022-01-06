document.addEventListener('DOMContentLoaded', function() {
    const origin = window.location.origin;
    const pathname = window.location.pathname
    const host = window.location.host;
    const protocol = window.location.protocol;
    console.log({ origin: origin, pathname: pathname, host: host, protocol: protocol });
})