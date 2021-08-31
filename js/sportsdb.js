

const searchTeams = () => {
    const searchField =document.getElementById('search-field');
    const searchText =searchField.value;
    
    // clear input field
    searchField.value ='';
    
    const url =`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayTeamDetails(data))
}

const displayTeamDetails = details => {
  const teams =details.teams;
  const teamDetails = document.getElementById('team-details');
  teamDetails.textContent = '';
    for(const team of teams){
     const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML =`
        <div onclick="displayDetails()" class="card">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${team.strTeam}</h5>
              <p class="card-text">${team.strDescriptionEN.slice(0, 150)}</p>
            </div>
          </div>
        `
        teamDetails.appendChild(div)
  }
};

