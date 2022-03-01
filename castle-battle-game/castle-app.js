//modal:
const $openButton = $('#openModal');
const $modal = $('#modal');
const $closeButton = $('#close');

const openModal = () => {
    $modal.css('display', 'block');
}
//or use .show()

const closeModal = () => {
    $modal.css('display', 'none');
}

$openButton.on('click', openModal)
$closeButton.on('click', closeModal)
////////////////MODAL END////////////////
/////////////////////////////////////////


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



const $createPeon = () => {
        $('.player-turn-buttons').hide();
        //use modal css styling to pop up form when button clicked
        $('#form-div').css('display', 'block');
        $('#create-close').css('display', 'block');
        //when submit is hit on the form, run respondToPeonName function
        $("#create-form").on("submit", $repsondToPeonName);
        //added a second event lisener to close the form when you hit submit
        $("#create-form").on("submit", $closeOnSubmit);       
}
$('#create-button').on('click', $createPeon)
const $closeOnSubmit = () =>{
        $('#form-div').css('display', 'none');
}


// 1. Grab the element
// const $form = $("#create-form")
// 2. Define the function you want to happen
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
    $('#peons-no-job').append($(`<li>${$peonName}</li>`));
    // Reset the input field to an empty string
    $("#peon-name").val("")
    barracksLoop();  
}

 ////////need to figure out why submit on the select button form refreshes the page
/////////
const $selectPeon = () => {
    $('.player-turn-buttons').hide();
    //show list of peons to choose from - those without a job
    const $ul = $('<ul>Peons To Choose From</ul>');
            $('#select-form').append($ul);
    for(i=0; i<peonsList.length; i++){
        if(peonsList[i].job === null){
            let $li = $(`<li>${peonsList[i].name}</li>`)
        $ul.append($li);
        }
    }
    $("#select-form").val("") 
        //use modal css styling to pop up form when button clicked
        $('#select-form-div').css('display', 'block');
        // $('#select-close').css('display', 'block');
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
                        updatePeons();
                    })
                    $('#attack').on('click', ()=>{
                        peonToGetJob.job = "attack"
                        $('#give-job').css('display', 'none')
                        updatePeons();
                    })
                }   
                
            }
            barracksLoop();  
            //this stops the page refresh after hitting submit following peon choosing
            //but it also keeps the old ul of peons to choose from .... 
            return false;
        })
}
$('#select-button').on('click', $selectPeon)


const updatePeons = () => {
    for(i=0; i<peonsList.length; i++){
        if(peonsList[i].job === "repair"){
        $('.player-peons-list').append(`<li>${peonsList[i].name}'s job is to repair the barracks`)
        }else{
            if(peonsList[i].job === "attack")
            $('.player-peons-list').append(`<li>${peonsList[i].name}'s job is to attack the enemy`)
        }
    }
}



//then loop through the peons in barracks
const barracksLoop = () =>{
    let peon ;
    for(i=0; i<peonsList.length; i++){
        if (peonsList[i].job === "repair"){
            peon = peonsList[i].name
            console.log(`${peon} repairs your barracks by 1 hp. \n`)
            playerBarracks.hitpoints ++;
        }else if(peonsList[i].job === "attack"){
            peon = peonsList[i].name;
            console.log(`${peon} attacks opponent's barracks by 1 hp. \n`)
            computerBarracks.hitpoints --;
        }
    }
    computerTurn();
    loseGameCheck();
    $('#create-or-select').show();
   
}



//choose random number of hit points from 1-5
//computer then repairs itself for that number of hp or damages you for that number of hp
const computerTurn = ()=>{
    let turn = Math.random()*1;
    //console.log(turn);
    if (turn > 0.5){
        computerBarracks.hitpoints += computerBarracks.randomTurn;
        console.log(`Your opponent repaired their barracks by ${computerBarracks.randomTurn}.\n`)
    }else{
        playerBarracks.hitpoints -= computerBarracks.randomTurn;
        console.log(`Your opponent attacked you causing ${computerBarracks.randomTurn} damage!\n`)
    }
    
}

const loseGameCheck = ()=>{
    if (computerBarracks.hitpoints < 0){
        console.log(`You destroyed your opponent's barracks!`)
        console.log("You win!");
    }else if(playerBarracks.hitpoints < 0){
        console.log(`Oops you got blown to smithereens.`)
        console.log("Computer-opponent wins :(");
    }else if(computerBarracks.hitpoints < 0 && playerBarracks.hitpoints < 0){
        console.log(`Well with your barracks at ${playerBarracks.hitpoints} and the opponent's barracks at ${computerBarracks.hitpoints}...`)
        console.log("It's a tie.");
    }else if(computerBarracks.hitpoints >= 0 && playerBarracks.hitpoints >= 0){
        console.log(`Your hitpoints are currently at ${playerBarracks.hitpoints}. Opponent is at ${computerBarracks.hitpoints}. Let's keep going!`)
        // gameRound();
    }
}









