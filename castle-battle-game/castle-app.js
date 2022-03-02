//modal section:
//open modal:
$('#openModal').on('click', () => {
    $('#modal').show();
})
//close modal with close button//
$('#close').on('click', () => {
    $('#modal').css('display', 'none');
})
////////////////MODAL END////////////////



const playerBarracks = {
        peons: [],
        hitpoints: 10,
}

let peonsList = playerBarracks.peons;

const computerBarracks = {
    hitpoints: 10,
    randomTurn: Math.floor(Math.random()*(6-1)+1)
}
//status function//
const displayStatus = () => {
    $('#player-hp').text(`${playerBarracks.hitpoints}`);
    $('#computer-hp').text(`${computerBarracks.hitpoints}`);
}
displayStatus()

//player turn click and choose C or S then player turn button hides until computer goes
const createOrSelect =()=>{
    $('#create-or-select').on('click', () => {
        $('.player-turn-buttons').show();
        $('#create-or-select').hide();
    })
    
}
createOrSelect();
//createOrSelect is acting as start of the game right now 


const peonsReadyToWork = () =>{
    for(i=0; i<peonsList.length; i++){
        if(peonsList[i].job === null){
            $('#peons-no-job').append($(`<li>${peonsList[i].name}</li>`));
        }else if(peonsList[i].job != null){
            $('#peons-no-job').remove();
        }
    }
}
peonsReadyToWork();


const $createPeon = () => {
        //hide player turn button so you can't click again until computer gets its turn
        $('.player-turn-buttons').hide();
        //use modal css styling to pop up create form when button clicked
        $('#form-div').css('display', 'block');
        //when submit is hit on the form, run respondToPeonName function
        $("#create-form").on("submit", $repsondToPeonName);
        //added a second event lisener to close the form when you hit submit
        $("#create-form").on("submit", () =>{
            $('#form-div').css('display', 'none'); 
        });
        
        

}
$('#create-button').on('click', $createPeon)


const $repsondToPeonName = (e) => {
    // Keep the page from reloading
    e.preventDefault();
    // Get the value from the input field with id 
    const $peonName = $("#peon-name").val()
    //now also store peon name in the peon array
    let peonAdded = {
        name: $peonName,
        job: null
        }
        peonsList.push(peonAdded)    
    //make an li element with this ^^ value
    // $('#peons-no-job').append($(`<li>${$peonName}</li>`));
    // // Reset the input field to an empty string
    $("#peon-name").val("") 
    updatePeons();
    // computerTurn();
}

 ////////need to figure out why submit on the select button form refreshes the page
/////////
const $selectPeon = () => {
    $('.player-turn-buttons').hide();
  
    $("#select-form").val("") 
        //use modal css styling to pop up form when button clicked
        $('#select-form-div').css('display', 'block');
        //when submit is hit on the form, run 
        $('#select-form').on("submit", ()=>{
            for(i=0; i<peonsList.length; i++){
                let peonToGetJob;
                if($("#select-peon-name").val() === peonsList[i].name){
                    peonToGetJob = peonsList[i];
                    console.log(peonToGetJob)
                    $('#select-form-div').css('display', 'none')
                    
                    //job option buttons pop up:

                    $('#give-job').css('display', 'block');
                    $('#repair').on('click', ()=>{
                        peonToGetJob.job = "repair"
                        $('#give-job').css('display', 'none')
                        //update peons gives them the job in the array above and types it out on screen
                        updatePeons(); 
                    })
                    $('#attack').on('click', ()=>{
                        peonToGetJob.job = "attack"
                        $('#give-job').css('display', 'none')
                        updatePeons();
                          
                    })
                }   
                
            } 
            
              
            //this stops the page refresh after hitting submit following peon choosing
            //but it also keeps the old ul of peons to choose from .... 
            return false;
        })

}
$('#select-button').on('click', $selectPeon)


// const updatePeons = () => {
//     for(i=0; i<peonsList.length; i++){
//         if(peonsList[i].job === "repair"){
//         $('.player-peons-list').append(`<li>${peonsList[i].name}'s job is to REPAIR the barracks`)
//         }else{
//         if(peonsList[i].job === "attack")
//             $('.player-peons-list').append(`<li>${peonsList[i].name}'s job is to ATTACK the enemy`)
           
//         }
//     }computerTurn();
   
// }
const updatePeons = () =>{
    //remove and refresh the list with info below
    $('.player-peons-list').empty();
    for (i=0; i<peonsList.length; i++){
        if(peonsList[i].job === "repair"){
            $('.player-peons-list').append(`<li>${peonsList[i].name}'s job is to REPAIR the barracks`)
        }else if(peonsList[i].job === "attack"){
            $('.player-peons-list').append(`<li>${peonsList[i].name}'s job is to ATTACK the enemy`)
        }else{
            $('.player-peons-list').append(`<li>${peonsList[i].name} is ready for work`)
        }
    }computerTurn();
}


//then loop through the peons in barracks
const barracksLoop = () =>{
    let peon ;
    for(i=0; i<peonsList.length; i++){
        if (peonsList[i].job === "repair"){
            peon = peonsList[i].name
            alert(`${peon} repairs your barracks by 1 hp. \n`)
            playerBarracks.hitpoints ++;
        }else if(peonsList[i].job === "attack"){
            peon = peonsList[i].name;
            alert(`${peon} attacks opponent's barracks by 1 hp. \n`)
            computerBarracks.hitpoints --;
        }
    }
  
    $('#create-or-select').show();
   
}



//choose random number of hit points from 1-5
//computer then repairs itself for that number of hp or damages you for that number of hp
const computerTurn = ()=>{
    let turn = Math.random()*1;
    if (turn > 0.5){
        computerBarracks.hitpoints += computerBarracks.randomTurn;
        alert(`Your opponent repaired their barracks by ${computerBarracks.randomTurn}.\n`)
    }else{
        playerBarracks.hitpoints -= computerBarracks.randomTurn;
        alert(`Your opponent attacked you causing ${computerBarracks.randomTurn} damage!\n`)
    }
    barracksLoop();
    loseGameCheck();
    
}

const loseGameCheck = ()=>{
    if (computerBarracks.hitpoints < 0){
        alert(`You destroyed your opponent's barracks!`)
        alert("You win!");
    }else if(playerBarracks.hitpoints < 0){
        alert(`Oops you got blown to smithereens.`)
        alert("Computer-opponent wins :(");
    }else if(computerBarracks.hitpoints < 0 && playerBarracks.hitpoints < 0){
        alert(`Well with your barracks at ${playerBarracks.hitpoints} and the opponent's barracks at ${computerBarracks.hitpoints}...`)
        alert("It's a tie.");
    }else if(computerBarracks.hitpoints >= 0 && playerBarracks.hitpoints >= 0){
        alert(`Your hitpoints are currently at ${playerBarracks.hitpoints}. Opponent is at ${computerBarracks.hitpoints}. Let's keep going!`)

    }
    displayStatus()
}









