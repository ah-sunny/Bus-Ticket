//available
const availableSeatElement = document.getElementById('available_seat');
const availableSeatText = availableSeatElement.innerText;
const availableSeat = parseInt(availableSeatText);
// selected
const selectSeatElement = document.getElementById('selected_seat');
const selectSeatText = selectSeatElement.innerText;
const selectSeat = parseInt(selectSeatText);
    //const presentSeat = selectSeat + 1
    //selectSeatElement.innerText = presentSeat;
    
    console.log("available ",availableSeat , 'select = ',selectSeat)
    console.log(selectSeatElement)

function SetAvailableSeatNumber(event){
    availableSeatElement.innerText = event ;
}
function setSelecetSeatNumber(event){
    selectSeatElement.innerText = event;
}
