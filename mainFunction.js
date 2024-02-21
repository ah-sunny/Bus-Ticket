
let count = 0;

// Get all elements with the class name 'seat'
let seats = document.getElementsByClassName('seat');

for (let i = 0; i < seats.length; i++) {

  seats[i].addEventListener('click', function(event) {
    
//clickt limit
if(count < 4  ){
  


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
  alertForSeatLimit();
}



  });
}

//coupon Apply part
function discountApplyCoupon(){
  console.log('button clicked')
  const couponInputValue = document.querySelector("#discount_input").value;
  
  if(couponInputValue === 'NEW15' || couponInputValue === 'Couple 20' ){

    let curGrandPrice = getNumberByID('grand_price');

    
     let discountGrandPrice;
     let disPerName ;
    if(couponInputValue === 'NEW15'  ){
       discountGrandPrice = curGrandPrice * 0.15 ;
       disPerName = 15; 
    }
    if(couponInputValue === 'Couple 20'){
      discountGrandPrice = curGrandPrice * 0.20 ;
      disPerName = 20 ;
    }

    const afterDiscount = curGrandPrice - discountGrandPrice ;
    setNumberByID('grand_price',afterDiscount);

    const disText = document.createElement('p');
    disText.innerText = ` You Got ${disPerName}% Discount ` ;
    disText.className = `text-center m-auto text-green-500`;

    const discountTextPlace = document.getElementById('append_dis_text');
    discountTextPlace.appendChild(disText);

    const couponParentDiv = document.getElementById('coupon_apply_div');
    couponParentDiv.classList.add('hidden');


  }else{
    alerForApplyButton();
  }


}



function nextFunc(){
  showByID('popUp_next')

}
function PopUpContinue(){
  hiddenByID('popUp_next');
}
