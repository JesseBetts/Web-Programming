document.addEventListener("DOMContentLoaded", function () {
    let seconds = 0;
    let timerInterval = null;

    const display = document.getElementById("timer-display");
    const startBtn = document.getElementById("start-btn");
    const stopBtn = document.getElementById("stop-btn");

    function formatTime(totalSeconds) {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    startBtn.addEventListener("click", function () {
        if (timerInterval) return;

        startBtn.disabled = true;
        stopBtn.disabled = false;

        timerInterval = setInterval(function () {
            seconds++;
            display.textContent = formatTime(seconds);
        }, 1000);
    });

    stopBtn.addEventListener("click", function () {
        clearInterval(timerInterval);
        timerInterval = null;

        startBtn.disabled = false;
        stopBtn.disabled = true;
    });
});