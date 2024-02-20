
function getNumberByID(event){
    const selectSeatElement = document.getElementById(event);
    const selectSeatText = selectSeatElement.innerText;
    const selectSeat = parseInt(selectSeatText);

    return selectSeat;
    
  }
function setNumberByID(eventID,eventValue){
    const selectSeatElement = document.getElementById(eventID);
    selectSeatElement.innerText = eventValue;
}
