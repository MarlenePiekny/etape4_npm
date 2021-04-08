//on créé un nouvel objet date d'aujourd'hui
let date = new Date();

//on affecte le jour d'aujourd'hui au format 2 chiffres ex : 08 à une variable
let todayDay = date.getDate();
if (todayDay < 10) {
    todayDay = "0" + todayDay;
}

//on affecte le mois d'aujourd'hui au format 2 chiffres ex : 04 à une variable
let todayMonth = date.getMonth() + 1;
if (todayMonth < 10) {
    todayMonth = "0" + todayMonth;
}

//on affecte le mois d'aujourd'hui au format 4 chiffres ex : 2021 à une variable
let todayYear = date.getFullYear();

//on affiche chacune des variables pour afficher la date au format 08/04/2021
console.log(todayDay + '/' + todayMonth + '/' +  todayYear);
