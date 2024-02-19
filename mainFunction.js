

const buttons = document.querySelectorAll('.seat');

console.log(buttons);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = 'red';

    const currentAvailableSeat = availableSeat - 1;
    SetAvailableSeatNumber(currentAvailableSeat);

    const currentSelectedSeat = selectSeat + 1;
    setSelecetSeatNumber(currentSelectedSeat);



  });
});



