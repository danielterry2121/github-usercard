/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
	const followersArray = [
	"https://api.github.com/users/tetondan",
	"https://api.github.com/users/dustinmyers",
	"https://api.github.com/users/justsml",
	"https://api.github.com/users/luishrd",
	"https://api.github.com/users/bigknell",
	];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const myBod = document.querySelector('.cards');
function myProfile(me){
	const card = document.createElement('div');
	card.classList.add('card');
	const myImg = document.createElement('img');
	myImg.setAttribute('src', me.data.avatar_url);
	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');
	const h3 = document.createElement('h3');
	h3.classList.add('name');
	h3.textContent = ` Name: ${me.data.name}`;
	const username = document.createElement('p');
	username.classList.add('username');
	username.textContent =` Username: ${me.data.login}`;
	const location = document.createElement('p');
	location.textContent = `Location: ${me.data.location}`;
	const profile = document.createElement('p');
	profile.textContent = "Profile:";
	const profA = document.createElement('a');
	profA.setAttribute('href', me.data.url);
	profA.textContent = `${me.data.url}`;
	const followers = document.createElement('p');
	const following = document.createElement('p');
	followers.textContent = ` Followers : ${me.data.followers}`;
	following.textContent =` Following : ${me.data.following}`;
	profile.appendChild(profA)
	const bio = document.createElement('p');
	bio.textContent = me.data.bio;
	cardInfo.append(h3,username,location,profile,followers,following,bio);
	card.appendChild(myImg);
	card.appendChild(cardInfo);	
	return card
}

axios.get('https://api.github.com/users/danielterry2121')
	.then(function(response) {
		console.log(response);
			const myCard = myProfile(response);
			myBod.appendChild(myCard);
		
	})
	.catch(function (error) {
		console.log(error);
	});
	followersArray.forEach(person => {
	axios.get(person)
	.then(function(response) {
		console.log(response);
		const myCard = myProfile(response);
			myBod.appendChild(myCard);
		
	})
	.catch(function (error) {
		console.log(error);
	});
	})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
