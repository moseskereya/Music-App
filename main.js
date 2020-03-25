window.addEventListener('load',  () => {
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    
      console.log(sound);
    
    pads.forEach ((pad, index )=> {
    pad.addEventListener('click', function(){
            sound[index].currentTime = 0;
            sound[index].play();
        })
       })
     });
     window.sr = ScrollReveal();
     sr.reveal('.right', {
         origin: 'right',
         duration: 1000,
         distance: '25rem',
         delay: 300
     })
     sr.reveal('.animate', {
        origin: 'bottom',
        duration: 1000,
        distance: '25rem',
        delay: 300
    })
    
     sr.reveal('.left', {
        origin: 'left',
        duration: 1000,
        distance: '25rem',
        delay: 300
    })
    sr.reveal('.top', {
        origin: 'top',
        duration: 1000,
        distance: '25rem',
        delay: 300
    })