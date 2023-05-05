function submit() {
    alert(document.getElementById(text_input))
}

function canvas() {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    ctx.moveTo(200, 100);
    ctx.stroke();
}