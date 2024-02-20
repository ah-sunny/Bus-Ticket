

// Get all elements with the class name 'seat'
let seats = document.getElementsByClassName('seat');

for (let i = 0; i < seats.length; i++) {

  seats[i].addEventListener('click', function(event) {
    
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
    


  

  });
}


