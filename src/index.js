const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.addEventListener("click",function(e){
    if (e.target.className == "btn btn-primary"){
      fetchUser()
    }
  })
});


function fetchUser(){
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( json => displayUser(json) )
}

function displayUser(obj){
  const user = obj.results[0]
  console.log(user)
  const fullName = document.querySelector("#fullname")
  fullName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`
  document.querySelector("#email").textContent = user.email
  document.querySelector("#street").textContent = `${user.location.street.number} ${user.location.street.name}`
  document.querySelector("#city").textContent = user.location.city
  document.querySelector("#state").textContent = user.location.state
  document.querySelector("#postcode").textContent = user.location.postcode
  document.querySelector("#phone").textContent = user.phone
  document.querySelector("#cell").textContent = user.cell
  let date  =  new Date(user.dob.date)
  document.querySelector("#date_of_birth").textContent = date.toLocaleDateString(undefined, options)

}