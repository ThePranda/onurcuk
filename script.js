// Sayaç Fonksiyonu
function updateCounter() {
    let count = localStorage.getItem('visitorCount');
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visitorCount', count);
    document.getElementById('view-count').innerText = count;
}

updateCounter();

// Giriş Fonksiyonu
function startSite() {
    const enterScreen = document.getElementById('enter-screen');
    enterScreen.style.opacity = '0';
    setTimeout(() => {
        enterScreen.style.display = 'none';
    }, 800);

    const video = document.getElementById('bg-video');
    video.play();
    video.muted = false;
    video.volume = 0.5;
}