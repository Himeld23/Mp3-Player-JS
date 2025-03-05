const songs = [
    {
         title: "Stutterfly",
         artist: "Spektrum",
         src: "resources/Spektrem - Stutterfly [NCS Release].mp3",
         cover: "resources/Sttuerfly_Album.png"
     },
     {
         title: "Another Way",
         artist: "KDH",
         src: "resources/KDH, Syn Cole, Vikkstar, Joe Jury - Another Way [NCS Release].mp3",
         cover: "resources/AnotherWay_Album.png"
     },
     {
         title: "On The Break Of Dawn",
         artist: "Spektrum",
         src: "resources/Nordic Pulse, Kitty Florentine, Kristjan Järvi, Cartoon - On The Break Of Dawn [NCS Release].mp3" ,
         cover: "resources/Onthebreakofdawn_album.png"
     },
     {
         title: "Desperate",
         artist: "TOKYO MACHINE , Neffex",
         src: "resources/TOKYO MACHINE, NEFFEX - Desperate [NCS Release].mp3",
         cover: "resources/Desperate_album.png"
     },
     {
         title: "Mortals",
         artist: "Warriyo, Laura Brehm",
         src: "resources/Warriyo, Laura Brehm - Mortals (feat. Laura Brehm) [NCS Release].mp3",
         cover: "resources/Mortals_album.png"
     }
    ]
 
    let songIndex = 0;
    const audio = document.getElementById("audio");
    const title = document.getElementById("title");
    const cover = document.getElementById("cover")
    const artist = document.getElementById("artist");
 
     function loadsong(index) {
         audio.src = songs[index].src
         title.innerText = songs[index].title
         cover.src = songs[index].cover
         artist.innerText = songs[index].artist
     }
 
     function nextSong(){
         songIndex = (songIndex + 1) % songs.length
         loadsong(songIndex)
         audio.currentTime = 0;
         audio.play()
     }
 
     function prevSong(){
         songIndex = (songIndex - 1 + songs.length) % songs.length
         loadsong(songIndex)
         audio.currentTime = 0;
         audio.play()
     }
     function playPause() {
         let playbtn = document.getElementById("play");
     if (audio.paused) {
         playbtn.innerText = "▶"
         audio.play();  // If audio is paused, play it
     } else {
         playbtn.innerText = "⏸"
         audio.pause(); // If audio is playing, pause it
     }
 }
     loadsong(songIndex)