
document.querySelectorAll('.surah').forEach(item => {
    item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        document.getElementById('content-frame').src = src;
    });
});
document.querySelectorAll('.top-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        document.getElementById('content-frame').src = src;
    });
});
