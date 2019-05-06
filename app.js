// Init Github
const github = new Github;
// init ui
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text that is being typed in
  const userText = e.target.value;

  if(userText != ''){
    // make an HTTP call to github
    // will be done in github.js file
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === "Not Found"){
        // Show alert (will happen through ui.js)
        ui.showAlert('user not found', 'alert alert-danger'); // bootstrap allert classes
      } else {
        // Show the profile (will happen through ui.js)
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // clear profile
    ui.clearProfile();
  }
});
