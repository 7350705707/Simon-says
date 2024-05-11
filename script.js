let gameSeq = [];
let userSeq =[];

let btns = ["red","blue","black","yellow"];

let started = false;

let level = 0;

let highestscore = 0;



let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        console.log("game started");

        levelUp();

    }


});

function btnFlash (btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    }, 300);



}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userSeq.push(btn.getAttribute("id"));
    console.log(userSeq);
   checkAns(userSeq.length-1);

}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp , 1000);
       }
    }else{
        
        h3.innerHTML = `Game Over Your Score is ${level}! <br> & Highest Score is ${highestscore}  <br> Press any key to start`;
        document.querySelector("body").classList.add("red");
        setTimeout(()=>{
            document.querySelector("body").classList.remove("red");
        },500);
        reset();
    }
    
}

function reset(){
    if(highestscore < level){
        highestscore = level;
    }
    started = false;
    level = 0;
    gameSeq = [];
    
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `level:- ${level}`;
    // random btn choose

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    btnFlash(randbtn);

}