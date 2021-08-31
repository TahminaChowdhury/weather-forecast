

const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=4')
    .then(res => res.json())
    .then(data => displayUsers(data))
};
loadUsers();

const displayUsers = users => {
    const usersArray = users.results;
    const userDetails = document.getElementById('users-details')
    usersArray.forEach(user => {
       const div = document.createElement('div')
       div.classList.add('col')
       div.innerHTML = `
       <div class="card">
       <img src="${user.picture.large}" class="card-img-top" alt="...">
       <div class="card-body">
       <P>Name:${user.name.title} ${user.name.first} ${user.name.last} </p>
       <P>Email:${user.email} </p>
       <P>Coordinates:${user.location.coordinates.latitude} ${user.location.coordinates.longitude}</p>
       <P>Location:${user.location.city} ${user.location.street.number} ${user.location.street.name}</p>
       <p>Timezone:${user.location.timezone.offset} ${user.location.timezone.description}</p>
     
       </div>
     </div>
       `
    userDetails.appendChild(div);
   })
}