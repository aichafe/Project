/*
My first assignment in javascript;
variables are defined and include strings, numbers, objects and arrays for the artist 
Danzaki Mawaki.
*/
var albumName = "My Songs";
var songName = "Happ Sallah";
var track = 5;
var musicGenre = "Kotso";
var dateProduced = 2008;
var bandName = "Masu Ganga";
var isNewRelease = false;
var artistDetails = {
    surName: 'Danzaki',
    firstName = "Mawaki",
    gender: 'Male', 
    numberOfSongs: 25,
    dateOfBirth: 21/09/1960,
    address: 'Sokoto, Nigeria',
    phone: 08065910743,
    email: 'danzaki@musicWow.com',
    tracksArray = ['Gamudai', 'Rawa Zuma', 'Wake Wake', 'Rawa da Waka', 'Ruwan Zaki'],
};

console.log(albumName); //Displays the name of the album.
console.log(songName);
console.log(track); //The serial number of the track in the album
console.log(musicGenre);
console.log(dateProduced);
console.log(bandName);
console.log(isNewRelease);
console.log(asrtistDetails.surName + ", " + artistDetails.firstName); //Show the full name of the artist
console.log(artistDetails.trackArray[3]);
console.log(artistDetails.email);


