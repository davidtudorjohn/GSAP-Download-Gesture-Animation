downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
    TweenMax.to(".fa.fa-download", 2, {y:"240px", opacity:0, overflow:"visible"});
    downloadBtn.style.backgroundColor = "#bebebe";
    downloadBtn.textContent = "DONE";
});
