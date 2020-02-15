<script>
  import Song from "components/Song";

  const onPlaySong = () => {
    console.log("playing...");
  };
</script>

<Song playSong={onPlaySong} />
