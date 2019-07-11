/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// select cards div to attach our cards
const cards = document.querySelector('.cards');

const userName = 'SierraOG';

// axios get 
axios.get(`https://api.github.com/users/${userName}`)
  .then(data => {
    console.log(data.data)
    const userObject = data.data
    const element = createCard(userObject)
    cards.appendChild(element)
  })
  .catch(error => {
    console.log('error')
  })


// create component
function createCard(userObject){
  // create new elements
  const cardDiv = document.createElement('div');
  const userImage = document.createElement('img');
  const cardContent = document.createElement('div');
  const name = document.createElement('h3');
  const usersUserName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // setup element structure
  cardDiv.appendChild(userImage);
  cardDiv.appendChild(cardContent);
  cardContent.appendChild(name);
  cardContent.appendChild(usersUserName);
  cardContent.appendChild(location);
  cardContent.appendChild(profile);
  profile.appendChild(link);
  cardContent.appendChild(followers);
  cardContent.appendChild(following);
  cardContent.appendChild(bio);

  // add class names 
  cardDiv.classList.add('card');
  cardContent.classList.add('card-info');
  name.classList.add('name');

  // add content from input object 
  userImage.src = userObject.avatar_url;
  name.textContent = userObject.name;
  usersUserName.textContent = userObject.login; 
  location.textContent = userObject.location;
  link.href = userObject.html_url;
  followers.textContent = userObject.followers;
  following.textContent = userObject.following;
  bio.textContent = userObject.bio;

  return cardDiv;
}