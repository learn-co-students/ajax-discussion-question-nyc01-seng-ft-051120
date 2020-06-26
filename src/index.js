let button = document.querySelector(".btn btn-primary")
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.addEventListener("click", function(e){
    button = e.target
    fetchData()
  })
  
});

function fetchData(){
  fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( data => {console.log(data)
                    render(data)
    }) 
  }

function render(data){
  let person = data.results[0]

  let pic = document.querySelector("img")
  pic.src = `${person.picture.large}`
  
  let fullName = document.querySelector("#fullname")
  fullName.innerText = `${person.name.title}. ${person.name.first} ${person.name.last}`
  
  let email = document.querySelector("#email")
  email.innerText = `${person.email}`
  
  let street =  document.querySelector("#street")
  street.innerText = `${person.location.street.number} ${person.location.street.name}`
  
  let city =  document.querySelector("#city")
  city.innerText = `${person.location.city}`
  
  let state =  document.querySelector("#state")
  state.innerText = `${person.location.state}`
  
  let postcode =  document.querySelector("#postcode")
  postcode.innerText = `${person.location.postcode}`
  
  let phone =  document.querySelector("#phone")
  phone.innerText = `${person.phone}`
  
  let cell =  document.querySelector("#cell")
  cell.innerText = `${person.cell}`
  
  let dob =  document.querySelector("#date_of_birth")
  dob.innerText = `${person.dob.date}`
}




