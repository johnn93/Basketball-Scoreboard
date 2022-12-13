let homePts=document.getElementById('home-pts')
let homeCount=0
let guestPts=document.getElementById('guest-pts')
let guestCount=0
let quarter=1;
let quarterNow=document.getElementById('quarterNow')

const startingMinutes=10;
let time = startingMinutes * 60;
const countdownEl=document.getElementById('timer');
let boolean=false;
let waitTimer;

function nextQuarter(){
    if(quarter==4){
        quarter="E";
        quarterNow.innerHTML=quarter;
    }else if(quarter=="E"){
        quarter=1;
        quarterNow.innerHTML=quarter;
    }else{
        quarter++;
        quarterNow.innerHTML=quarter;
    }
}

function homeAddPoint() {
    homeCount=homeCount+1
    homePts.innerText=homeCount    
}

function homeMinusPoint() {
    if(homeCount>=1){
    homeCount=homeCount-1
    homePts.innerText=homeCount
    }else{
        alert("can't have negative numbers")
    }    
}

function homeAddTwoPoints() {
    homeCount=homeCount+2
    homePts.innerText=homeCount
}

function homeMinusTwoPoints() {
    if(homeCount>=2){
        homeCount=homeCount-2
        homePts.innerText=homeCount
        }else{
            alert("can't have negative numbers")
        } 
}

function homeAddThreePoints() {
    homeCount=homeCount+3
    homePts.innerText=homeCount
}

function homeMinusThreePoints() {
    if(homeCount>=3){
        homeCount=homeCount-3
        homePts.innerText=homeCount
        }else{
            alert("can't have negative numbers")
        } 
}


function guestAddPoint() {
    guestCount=guestCount+1
    guestPts.innerText=guestCount    
}

function guestMinusPoint() {
    guestCount=guestCount-1
    guestPts.innerText=guestCount
    
}

function guestAddTwoPoints() {
    guestCount=guestCount+2
    guestPts.innerText=guestCount
}

function guestMinusTwoPoints() {
    guestCount=guestCount-2
    guestPts.innerText=guestCount
}

function guestAddThreePoints() {
    guestCount=guestCount+3
    guestPts.innerText=guestCount
}

function guestMinusThreePoints() {
    guestCount=guestCount-3
    guestPts.innerText=guestCount
}

function startStop(){
    if(boolean==false && time>0){
    waitTimer=setInterval(timer,1000);
    boolean=true;
    }else {
        clearInterval(waitTimer);
        boolean=false;
    }
}

function resetTime(){
    time = startingMinutes * 60;
    let minutes= Math.floor(time/60);
    let seconds=time %60;
    seconds = seconds <10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`
}

function timer(){
    let minutes= Math.floor(time/60);
    let seconds=time %60;
    minutes = minutes <10 ? '0' + minutes : minutes;
    seconds = seconds <10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--;
    if(minutes==00 && seconds==00){
        clearInterval(waitTimer);
        boolean=false;
    }
}

