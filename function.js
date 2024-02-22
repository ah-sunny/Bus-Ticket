
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

//apend bus seat function
function appendSelectedSeatWithPrice(event){
  //location
  const apendLocation = document.getElementById('append_seat')

  const parentDiv = document.createElement('div');
  parentDiv.classList = `flex justify-between`;
  apendLocation.appendChild(parentDiv)

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  p1.innerText = `${event}`;
  p2.innerText = `Economy`;
  p3.innerText = `550`;
  parentDiv.appendChild(p1)
  parentDiv.appendChild(p2)
  parentDiv.appendChild(p3)

}

//remove disabled Attribute
function setEnableById(event){
  const targetElement = document.getElementById(event);
  targetElement.removeAttribute('disabled');

}
 
//hidden added
function hiddenByID(event){
  const alertText = document.getElementById(event);
  alertText.classList.add('hidden');
}
//remove hidden
function showByID(event){
  const alertText = document.getElementById(event);
  alertText.classList.remove('hidden');
}


//alert for coupon button
function alerForApplyButton(){
  showByID('aler_apply');
  const closeButton = document.getElementById('apply_alert_close');
  closeButton.addEventListener('click',function(){
     hiddenByID('aler_apply');

  })
 
 }

 //alert for bus seat limit 
 function alertForSeatLimit(){
  const modalAsAlert = document.getElementById('my_modal_5');
  modalAsAlert.showModal();

 }
//alert for double click
function alertForDoubleClick(){
  const modalAsAlert = document.getElementById('double_click');
  modalAsAlert.showModal();
}