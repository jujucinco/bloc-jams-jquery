class helper{
    playPauseAndUpdate (song) {
      player.playPause(song);
      const totalTime = player.prettyTime(player.currentlyPlaying.duration);
      $('#time-control .total-time').text( totalTime );
    }
  }
  
  const helper = new helper();