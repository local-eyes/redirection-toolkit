document.addEventListener('DOMContentLoaded', async function() {
    const pathname = window.location.pathname;
    setTimeout(() => {
        window.location.href = `https://localeyes.in${pathname}`;
    }, 3000);
});

function redirect() {
    const pathname = window.location.pathname
    window.location.href = `https://localeyes.in${pathname}`;
}