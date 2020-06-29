document.addEventListener("DOMContentLoaded", e => {
  const clickHandler = () => {
    const button = document.querySelector("button")
    button.addEventListener("click", e => {
      getUser()
    })
  }

  const getUser = () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0]
      renderUser(user)
    })
  }
  
  function renderUser(user){

    const fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
    document.querySelector('#fullname').textContent = fullname

    const email = user.email
    document.querySelector('#email').textContent = email

    const profile_picture = user.picture.medium
    document.querySelector('#profile_picture').src = profile_picture

    const street = `${user.location.street.number} ${user.location.street.name}`
    document.querySelector('#street').textContent = street
  
  }
  
  clickHandler()
})