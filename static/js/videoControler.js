function playPause(index) {
    let video = document.getElementById(index);
    let playPauseIcon = document.getElementById(`play-pause-icon-${index}`);
    if (video.paused) {
      video.play();
      playPauseIcon.textContent = "||";
    } else {
      video.pause();
      playPauseIcon.textContent = "▶";
    }
  }
  
    function fnVideoPrincipal(id) {
    let video = document.getElementById(id);
    let videoCentral = document.getElementById('videoCentral');
    videoCentral.src = video.src;
    videoCentral.alt = "videocentral";
  }
  
  function muteUnmute(index) {
    var myVideo = document.getElementById(index);
    if (myVideo.muted) {
      myVideo.muted = false;
    } else {
      myVideo.muted = true;
    }
  }
  
  function changeVolume(index) {
    var myVideo = document.getElementById(index);
    var volume = document.getElementById('volume-' + index);
    myVideo.volume = volume.value;
  }