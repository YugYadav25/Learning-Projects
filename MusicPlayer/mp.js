    let playpauseBtn = document.getElementById('playpause');
    let backward = document.getElementById('backward');
    let forward = document.getElementById('forward');

    let progress = document.getElementById('progress');
    let song = document.getElementById('song');

    song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
    };

    function togglePlayPause() {
        if (playpauseBtn.classList.contains('fa-circle-play')) {
            song.play();
            playpauseBtn.classList.remove('fa-circle-play');
            playpauseBtn.classList.add('fa-circle-pause');
        } else {
            song.pause();
            playpauseBtn.classList.remove('fa-circle-pause');
            playpauseBtn.classList.add('fa-circle-play');
        }
    }

    // keep progress bar updating
    song.ontimeupdate = function () {
        progress.value = song.currentTime;
    };

    // allow seeking
    progress.onchange = function () {
        song.currentTime = progress.value;
        song.play();
        playpauseBtn.classList.remove('fa-circle-play');
        playpauseBtn.classList.add('fa-circle-pause');
    };

  backward.onclick = function() {
    song.currentTime -= 5; // jump 5s back
};

forward.onclick = function() {
    song.currentTime += 5; // jump 5s forward
};