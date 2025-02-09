var progressBar = document.getElementsByClassName("progress-bar")[0];

const intervalId = setInterval(()=>{
    const computedStyle = getComputedStyle(progressBar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressBar.style.setProperty("--width", width + .1);
    if(width === 100){
        clearInterval(intervalId);
    }
}, 5)