let reset = document.getElementById("reset");
let gameover = new Audio("gameover.mp3");
let ting = new Audio("ting.mp3");
let turn = 'X';
let gameover1 = false;

const turnChange = () =>{
    return turn === "X"?"0":"X";
}

const checkWins = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '' ))
        {
            //console.log(boxtext[e[0]].innerText);
            ting.pause();
            document.getElementsByClassName('info')[0].innerText = boxtext[e[0]].innerText + ","+"you won !";
            gameover1 = true;
            document.querySelector('.imagbox').getElementsByTagName('img')[0].style.width = "20vw";
            gameover.play();
        }
    })
}

let box = document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;
             turn = turnChange();
             checkWins();
             
             if(!gameover1)
             {
                ting.play();
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
             }
               
             
            
        }
        
    })
})

reset.addEventListener('click', ()=>{
   // gameover.play();
   Array.from(box).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    
        if((boxtext.innerText === 'X') || (boxtext.innerText === '0'))
        {
            boxtext.innerText = '';
             //turn = turnChange();
             //checkWins();
        }
    })

})

