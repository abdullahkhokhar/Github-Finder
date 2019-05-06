// Will be using ES6 classes

class Github{
  constructor(){
    this.client_id = 'df996cd4eaba88032bf8';
    this.client_secret = '5add4584a72df87098ae0d32b6022a0b6da10fcb';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'; // will use these as query strings to format our repsons
  }

    // create a get user method
    async getUser(user){
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profileData = await profileResponse.json(); // will give us the json data
      const repos = await repoResponse.json();

      return {
        // will return an object
        profile: profileData,
        repos
      }
    }
}
