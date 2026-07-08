const videoInput = document.getElementById("videoInput");
const videoPlayer = document.getElementById("videoPlayer");
const timelineBox = document.getElementById("timelineBox");

videoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    videoPlayer.src = url;

    timelineBox.innerHTML = `
        <p><strong>${file.name}</strong></p>
        <p>Duration: Loading...</p>
    `;

    videoPlayer.onloadedmetadata = function () {
        timelineBox.innerHTML = `
            <p><strong>${file.name}</strong></p>
            <p>Duration: ${videoPlayer.duration.toFixed(1)} sec</p>
        `;
    };

});
