// let score = [0,1,2,3,4,5,6];
// var turn ; 
// var team1 = {
// 	//Team 1 Details
// 	name: "CSK",
// 	runs: [],
// 	score: 0
// };
// var team2 = {
// 	//Team 2 Details
// 	name: "Mumbai Indians",
// 	runs: [],
// 	score: 0
// };

// window.onload = () => {
//     selectTurn(); // Decide who is gonna bat first
//     updateButtonText(); // Update the text of the button based on the strike
//     updateScore(); // update the initial score board
//     updateNames(); // update the team names at the start
// }

// // Function to assign a random strike to a team at start of the match
// let selectTurn = () => {
//     turn = Math.round(Math.random())+1;
//     // console.log(turn); 
// }

// let updateButtonText = () => {
//     var button = document.getElementById("strike-button");
//     console.log(button);
//     var result = document.getElementById("result");
//     console.log(result);
//     result.style.visibility = "";
//     //Update who is batting first
//     button.textContent = `${turn ===1 ? team1.name: team2.name} Batting`;


// }

// let updateScore = () =>{
//     //Update the total score of team 1
// 	document.getElementById("team-1-score").textContent = team1.score;
// 	//Update the total score of team 2
// 	document.getElementById("team-2-score").textContent = team2.score;
// }

// // Function to update names of the teams
// var updateNames = () => {
// 	document.getElementById("team-1-name").textContent = team1.name; // Update name of team 1
// 	document.getElementById("team-2-name").textContent = team2.name; // Update name of team 2
// };

var officers  =  [
    {  id:20, name: 'Venkatesh', years:14},
    {  id:21, name: 'Ragavi',years:8},
    {  id:22, name: 'Prasanth',years:7},
    {  id:23, name: 'Veeranaveen',years:6},
    ]
    //[20,21,22,23]
    //foreach
    // var ids=[];
    // officers.forEach(function (officer){
    //     ids.push(officer.id);
    // });
    // console.log(ids);
    
    var ids=officers.map(function (officer){
        return officer.id;
    })
    console.log(ids);
    
    // In ES6 notations
    var ids=officers.map((officer)=>{
        return officer.id;
    })
    console.log(ids);
    
    var totalYears = officers.reduce ( (total,year)=>{
        return total+year.years;
    },0);
    
    console.log(totalYears);
    
    var totalYears = officers.reduce ( (total,year)=>total+year.years,0);
    console.log(totalYears);
    