let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice"); // choice not choices remember this
const msg =document.querySelector("#msg")
const userScorePara =document.querySelector('.user-score')
const compScorePara =document.querySelector('.computer-score')
const gencompchoice =()=>{

    const options =["rock","paper","scissors"];
    const indexRandom = Math.floor(Math.random() * 3); //  0-1 range ko number multiply by 3 garda it will generate 0,1,2
    return options[indexRandom]
}
const winner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
      msg.innerHTML=`You Won! Your ${userChoice} beats ${compChoice}`
      msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML=`You lose! Computer ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="#b5316a"
    }
}
const PlayGame =(userChoice)=>{
console.log("Inside playGame userchoice",userChoice);
// We define for each process we have small function which make this this code *****modular**** 
// We follow modular way of programming 
//Computer will generate random move here
const compChoice = gencompchoice();
console.log("Inside playgame computer choice",compChoice)
let userWin=true;
if(userChoice===compChoice){
    console.log("Game was draw , play again");
     msg.innerHTML="Game was draw ";
     msg.style.backgroundColor="black"
    //  userWin=null;
}
else{
    if(userChoice==="rock"){
        //papper,scissors
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //rock,scissors
        userWin=compChoice==="rock"?false:true;
    }
    else {
        //rock,papper
        userWin=compChoice==="rock"?false:true;
    }
    winner(userWin,userChoice,compChoice);
}

}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
       const userChoice= choice.getAttribute("id")
        // console.log(`${userChoice} choice was clicked `);
        PlayGame(userChoice);

    })
})