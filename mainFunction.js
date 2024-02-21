
let count = 0;

// Get all elements with the class name 'seat'
let seats = document.getElementsByClassName('seat');

for (let i = 0; i < seats.length; i++) {

  seats[i].addEventListener('click', function(event) {
    
//clickt limit
if(count < 4 ){
  


    event.target.style.backgroundColor = '#1DD100';
    event.target.style.color = 'white';

    //selected seat func
    const selectedSeat = getNumberByID('selected_seat')
    const currentSelectedSeat = selectedSeat + 1;
    setNumberByID('selected_seat',currentSelectedSeat);

    //avilable seat
    const avilSeatNUmber = getNumberByID('available_seat');
    const currentAvialableSeat = avilSeatNUmber - 1;
    setNumberByID('available_seat',currentAvialableSeat);

    //capture clicked value
    const targetValue = event.target.innerText ;

    //apend by function call
    appendSelectedSeatWithPrice(targetValue);
    
  //total price update
  const totalPrice = getNumberByID('total_price')
  const currentTotalPrice = totalPrice + 550;
  setNumberByID('total_price',currentTotalPrice);

   //grand price update
  const grandPrice = getNumberByID('grand_price');
  setNumberByID('grand_price',currentTotalPrice)
  
  
  

    //setEnableById('discount_btn');
    //setEnableById('discount_input')
    //discountApplyCoupon();
    
    

  count++;



  

} else {
  alert('Click limit reached!'); // Inform user about click limit
}



  });
}




function nextFunc(){
  const popupForNextButton = document.getElementById('popUp_next');
  popupForNextButton.classList.remove('hidden');

}
function PopUpContinue(){
  const popupForNextButton = document.getElementById('popUp_next');
  popupForNextButton.classList.add('hidden');
}
