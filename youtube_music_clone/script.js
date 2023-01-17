console.log("welcome to youtube music")
let songidenx = 1 ;
let audioplay = new Audio(`songs/${songidenx}.mp3`);
let masterplay = document.getElementById('masterplay')
let progressbar = document.getElementById('progressBar');
let pre = document.getElementById('pre');
let next = document.getElementById('next');
//let audiocollection = ['1.mp3','2.mp3','3.mp3','1.mp3']
//audioplay.play();
//play song on clicking on play 


masterplay.addEventListener('click', ()=>{
    if(audioplay.paused || audioplay.currentTime<=0)
    {
        console.log(songidenx);
        audioplay.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else
    {
        audioplay.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
}) 

audioplay.addEventListener('timeupdate', ()=>
{
    console.log('timeupdate');
    progress = parseInt((audioplay.currentTime/audioplay.duration)*100);
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{

    audioplay.currentTime = progressbar.value * audioplay.duration/100;


})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    
    element.addEventListener('click',(e)=>{
        
       if(audioplay.paused || audioplay.currentTime<=0)
       {
        //console.log(songidenx);
         songidenx = parseInt(e.target.id)
         audioplay.src = `songs/${songidenx}.mp3`
         //console.log(songidenx);
        audioplay.play();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
       }
       else 
       {
        audioplay.pause();
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
       }

    })

})

next.addEventListener('click', ()=>{

    if(songidenx>=3)
    {
        songidenx = 1 ;
        //console.log(songidenx);
        

    }

    else
    {
        songidenx += 1 ;
    }

    audioplay.src = `songs/${songidenx}.mp3`
    console.log(songidenx);
    audioplay.play();
})


//event listener

