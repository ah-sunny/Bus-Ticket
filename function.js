
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

//apend
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
    alert('Please input the correct coupon');
  }


}


