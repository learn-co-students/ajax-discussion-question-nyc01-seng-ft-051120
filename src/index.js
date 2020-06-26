const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
let personArray = []

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");



 document.addEventListener('click', function(e){
  
   if(e.target = 'button.btn.btn-primary'){
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
         personArray.push(data.results[0])
     

    let firstRow= document.querySelector('.row.align-items-start')
    firstRow.innerHTML = `

      <div class="col">

        <img src="${personArray[0].picture.large}" alt="" id="profile_picture"/>

      </div>

      <div class="col">

        <label for="fullname"> <!-- Include first name, last name AND title -->
          Name:${personArray[0].name.title}. ${personArray[0].name.first} ${personArray[0].name.last}
        </label>
        <h3 id="fullname"></h3>

      </div>

      <div class="col">

        <label for="email">
          Email:${personArray[0].email}
        </label>
        <h4 id="email"></h4>

      </div>
    `
    let secondRow= document.querySelector('.row.align-items-center')
    secondRow.innerHTML =`

      <label for="street">Street:</label>
      <h4 id="street"> ${personArray[0].location.street.number} ${personArray[0].location.street.name}</h4>

      <label for="city">City:</label>
      <h4 id="city"> ${personArray[0].location.city}</h4>

      <label for="state">State:</label>
      <h4 id="state"> ${personArray[0].location.state}</h4>

      <label for="postcode">Post Code:</label>
      <h4 id="postcode"> ${personArray[0].location.postcode}</h4>

    </div>

    <div class="col">

      <label for="phone">Phone:</label>
      <h4 id="phone"> ${personArray[0].phone}</h4>

      <label for="cell">Cell:</label>
      <h4 id="cell"> ${personArray[0].location.cell}</h4>

    </div>

    <div class="col">

      <label for="date_of_birth">Date of Birth:</label>
      <h4 id="date_of_birth"> ${personArray[0].dob.date}</h4>

    </div>

  </div>
  `





      })
    } 
      
  
  
  
  
  })



});
