/* Profile Object */
let myProfile = {
    name: "Nicholas Oblitey Commey",
    image: "images/myprofile.jpg",
    favoriteFoods: ['Banku', 'Fufu', 'Waakye', 'Beans with plantain'],
    hobbies: ['Singing', 'Playing the organ', 'Brainstorming ideas'],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({ place: 'Accra', length: '20yrs' });
myProfile.placesLived.push({ place: 'Nasarawa', length: '9 months' });

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector("#photo");
photoElement.setAttribute("src", myProfile.image);
photoElement.setAttribute("alt", myProfile.name);

/* Favorite Foods List */
myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
    let dl = document.createElement("dl");
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    dl.appendChild(dt);
    dl.appendChild(dd);
    document.querySelector("#places-lived").appendChild(dl);
});
