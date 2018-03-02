/*eslint-env browser*/

//STEP 1
/*
var favMovies = ['Matrix', 'Badboys', 'Batman', 'Spiderman', 'Avengers'];
window.console.log(favMovies[1]);
*/
//STEP 2
/*
var movies = new Array(5);

movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Batman';
movies[3] = 'Spiderman';
movies[5] = 'Avengers';

window.console.log(movies[0]);
*/
//STEP 3
/*
var movies = new Array(5);

movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies.push('Notebook');

window.console.log(movies.length);
*/
//STEP 4
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';

delete movies[0];
window.console.log(movies);
*/
//STEP 5
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies[5] = 'Thor';
movies[6] = 'Iron Man';

for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
*/
//STEP 6
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies[5] = 'Thor';
movies[6] = 'Iron Man';

for (var movie in movies) {
    window.console.log(movies[movie]);
}
*/
//STEP 7
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies[5] = 'Thor';
movies[6] = 'Iron Man';

movies.sort();

for (var i = 0; i < movies.length; i++) {
    window.console.log(movies[i]);
}
*/
//STEP 8
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies[5] = 'Thor';
movies[6] = 'Iron Man';

var leastFavMovies = ["Kill Bill 2", 'Trolls', 'Cars 2'];

window.console.log('\nMovies I like:');
movies.forEach(function(movie){
    return window.console.log(movie);
})

window.console.log('\nMovies I regret watching:');
leastFavMovies.forEach(function(movie){
    return window.console.log(movie);
})
*/

//STEP 9
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies[5] = 'Thor';
movies[6] = 'Iron Man';

var leastFavMovies = ["Kill Bill 2", 'Trolls', 'Cars 2'];

movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

window.console.log(movies);
*/
//STEP 10
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies[5] = 'Thor';
movies[6] = 'Iron Man';

var leastFavMovies = ["Kill Bill 2", 'Trolls', 'Cars 2'];

movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

var lastMovies = movies.pop();

window.console.log(lastMovies);
*/

//STEP 11
/*
var movies = [];
movies[0] = 'Matrix';
movies[1] = 'Badboys';
movies[2] = 'Avengers';
movies[3] = 'Batman';
movies[4] = 'Spiderman';
movies[5] = 'Thor';
movies[6] = 'Iron Man';

var leastFavMovies = ["Kill Bill 2", 'Trolls', 'Cars 2'];

movies.concat(leastFavMovies);
movies.sort();
movies.reverse();

var firstMovies = movies.shift();

window.console.log(firstMovies);
*/
//STEP 12
/*
var favMovies = ['Matrix', 'Bad Boys', 'Trolls', 'Cars 2', 'Transformers', 'Batman', 'Superman', 'Hulk'];

for(var i = 0; i < favMovies.length; i++){
    if (favMovies[i] === 'Trolls'){
        favMovies[i] = 'DragonHeart'
    }
    if (favMovies[i] === 'Cars 2'){
        favMovies[i] = 'Iron Man';
    }
}

window.console.log(favMovies);
*/

//STEP 13
/*
var employee1 = [];
employee1["id"] = 1;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 2;
employee2["name"] = "Johnny Rivera";
employee2["title"] = "Web Student";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employee = [];
employee[0] = employee1;
employee[1] = employee2;

window.console.log(employee[1]["name"]);
*/

//STEP 14
/*
var employee1 = [];
employee1["id"] = 1;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 2;
employee2["name"] = "Johnny Rivera";
employee2["title"] = "Web Student";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 2;
employee3["name"] = "Darth Vader";
employee3["title"] = "Emporer";
employee3["department"] = "Empire";
employee3["isCurrent"] = false;

var employee = [];
employee[0] = employee1;
employee[1] = employee2;
employee[2] = employee3;

for(var i = 0; i<employee.length; i++){
    window.console.log(employee[i]['name']);
    
}
*/

//STEP 15

/*
var employee1 = [];
employee1["id"] = 1;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = 2;
employee2["name"] = "Johnny Rivera";
employee2["title"] = "Web Student";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = 2;
employee3["name"] = "Darth Vader";
employee3["title"] = "Emporer";
employee3["department"] = "Empire";
employee3["isCurrent"] = false;

var employee = [];
employee[0] = employee1;
employee[1] = employee2;
employee[2] = employee3;

for(var i = 0; i<employee.length; i++){
    if(employee[i]['isCurrent']){
        window.console.log(employee[i]);
    }
}
*/

//STEP 16
/*
var movies = [["Matrix", 1], ["Transformers", 2], ["Batman", 3], ["Superman", 4], ["Hulk", 5]];

movies.filter(function(movie){
    window.console.log(movie[0]);
});
*/

//STEP 17

//STEP 18

//STEP 19

//STEP 20
