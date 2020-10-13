// console.log("Welcome ProGrads");
// // alert("Welcome");

// var a = 5;
// var b = 6;

// if (a == b )
//     console.log(a);
//     else 
//     console.log(b);

// (a==b)? console.log(a):console.log(b);

// // for(var i = 1;i<=5;i++ )
// //     console.log(i);

// var array = [1,2,3,4,5];

// for(let j = 1; j<=array.length;j++)
// {
//     console.log("using loops")
//     console.log(array[j]);
// }

// console.log(array.forEach((index)=>{
//     console.log("using foreach");
//     console.log(index);
// }));


var score = [0,1,2,3,4,5,6];

var team1={
    //Team1 details
    name: "CSK",
    runs: [],
    score:0
}

var team2={
    //Team2 details
    name: "Mumbai Indians",
    runs: [],
    score:0
}

var toss;


// window.addEventListener("load", () => {


// })

window.onload = () =>{
    selectToss(); // Deciding the strike
    updateButtonText(); // update the text of the button according to the strike
    updateNames(); // Updating the teams that are playing
    updateScore();
}

// function selectToss(){
//     toss = Math.round(Math.random())+1;
//     console.log(toss);
// }
// Function for deciding the toss
var selectToss = () =>{
    toss = Math.round(Math.random())+1;
    console.log(toss);
}

// Function to change the button text
var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    var result = document.getElementById("result");
    result.style.visibility ="";
    // check if game is over
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
        // check if the match is draw Don't forget to use backticks ` ` and $ while calculating
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team1.runs.length ===6 ? 2 : team2.runs.length === 6 ? 1 : toss;
    }


    button.textContent = `${toss === 1 ? team1.name:team2.name} Batting`;
};

// Function to update the teams name that are playing
var updateNames = () =>{
    // Update Team - 1 name
    document.getElementById("team-1-name").textContent = team1.name;
    // Update Team - 2 name
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () =>{
    // updating the score of team1 and team2
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns(); //update the scoreboard
}

// Strike button click
var handleStrikeButtonClick = () =>{
 var runs = score[Math.floor(Math.random()*score.length)];
 console.log(runs);

 runs = runs === 5?"W": runs; // if run is 5 we mark it as a wicket
 console.log(runs);

 // check which team is on strike
 if (toss ===1)
   {
    team1.runs.push(runs);
   team1.score= calculateScore(team1.runs); // Update the team score
    
   } 
   else{
    team2.runs.push(runs);
    team2.score = calculateScore(team2.runs); // Update the team score
    
   }

   updateButtonText();
   updateScore();
}

var calculateScore = (runs) =>{
console.log("Calculate score method");

return runs.map(num =>{
    
return num =='W'? 0: num;

}).reduce((total,num) => total + num

);

};
        


var updateRuns = () =>{
    var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
    var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;
    // update runs on score board
    team1.runs.forEach((run,index)=>{
        teamOneRunsElement[index].textContent = run;
    });
    team2.runs.forEach((run,index)=>{
        teamTwoRunsElement[index].textContent = run;
    });
}