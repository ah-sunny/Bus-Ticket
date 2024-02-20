
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





    /*
    //note
// 
    
//     const p = document.createElement('div');
//     p.innerHTML =`<div class="flex justify-between"> <p id="single_selected" ></p> <p>Economy</p> <p>550</p> `;
//     //apendLocation.appendChild(p);
const classNumber = 0;

    //location
  
    const apendLocation = document.querySelectorAll('.ape_seat')
    console.log(apendLocation);
    console.log(apendLocation[classNumber]);

    */