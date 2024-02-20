

// Get all elements with the class name 'seat'
let seats = document.getElementsByClassName('seat');

for (let i = 0; i < seats.length; i++) {

  seats[i].addEventListener('click', function(event) {
    
    event.target.style.backgroundColor = '#1DD100';
    event.target.style.color = 'white';

    const sani = event.target
    console.log('target : ',sani);

    //selected seat func
    const selectedSeat = getNumberByID('selected_seat')
    const currentSelectedSeat = selectedSeat + 1;
    setNumberByID('selected_seat',currentSelectedSeat);

    //avilable seat
    const avilSeatNUmber = getNumberByID('available_seat');
    const currentAvialableSeat = avilSeatNUmber - 1;
    setNumberByID('available_seat',currentAvialableSeat);


    //location
    const apendLocation = document.getElementById('append_seat')

    //apend
    const br = document.createElement('br')
    //apendLocation.appendChild(br);

    const p = document.createElement('div');
    p.innerHTML ='<div class="flex justify-between"> <p id="single_selected" ></p> <p>Economy</p> <p>550</p>  ';
    apendLocation.appendChild(p);

    // clicked seat
    const targetValue = event.target.innerText ;
    
    setNumberByID('single_selected',targetValue);
    


  });
}


