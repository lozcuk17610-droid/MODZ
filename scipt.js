// HIỆN POPUP
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("popup").style.display = "flex";
    }, 800);
});

// ĐÓNG POPUP
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// TEXT TO SPEECH
function speak(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "vi-VN";
    msg.rate = 1;
    msg.pitch = 1;
    speechSynthesis.speak(msg);
}

window.onload = function() {
    speak("admin ..... minh chúp pi , quang tú , thái dúi ");
};

// DOWNLOAD
function download(url) {
    document.getElementById("loading").style.display = "flex";

    speak("");

    setTimeout(() => { window.location.href = url; }, 300);
    setTimeout(() => { window.location.replace(url); }, 800);
}

// OPEN APP
function openApp() {
    const url = "https://drive.google.com/file/d/1QPXYb3jNvIgFZOmBOkLB31Lw-nMg67cJ/view?usp=drivesdk";
    window.location.href = url;
}

// CANVAS BACKGROUND
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];

for (let i = 0; i < 75; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < points.length; i++) {
        let p = points[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.fillRect(p.x, p.y, 2, 2);

        for (let j = i + 1; j < points.length; j++) {
            let p2 = points[j];
            let dx = p.x - p2.x;
            let dy = p.y - p2.y;
            let dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < 140) {
                ctx.strokeStyle = "rgba(255,255,255," + (1 - dist/140) + ")";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});