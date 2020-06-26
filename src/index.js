const url = "https://randomuser.me/api/"
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

let button = document.querySelector(".btn-primary")
document.addEventListener("click", function(e) {
  if (e.target === button) {
    getData()
} })

function render(data) {
  let fullName = document.querySelector("#fullname")
  let person = data.results[0]
  fullName.innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
  let email = document.querySelector("#email")
  email.innerText = `${person.email}`
  let street = document.querySelector("#street")
  street.innerText = `${person.location.street.number} ${person.location.street.name}`
  let city = document.querySelector("#city")
  city.innerText = `${person.location.city}`
  let state = document.querySelector("#state")
  state.innerText = `${person.location.state}`
  let postcode = document.querySelector("#postcode")
  postcode.innerText = `${person.location.postcode}`
  let phone = document.querySelector("#phone")
  phone.innerText = `${person.phone}`
  let cell = document.querySelector("#cell")
  cell.innerText = `${person.cell}`
  let dob = document.querySelector("#date_of_birth")
  let dateData = person.dob.date
  let dateObject = new Date(Date.parse(dateData))
  dateReadable = dateObject.toDateString()
  dob.innerText = `${dateReadable}`
  let image = document.querySelector("img")
  image.src = `${person.picture.large}`
}


function getData() {
  let results = fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      render(data)
    })
}

 
getData()
  