var arrayOne = [2, 8, 9, 10, 13, 14];

for (let i = 0; i < arrayOne.length; i++) {
    arrayOne[i] = arrayOne[i] * 2;
}

console.table(arrayOne);



var arrayTwo = ["a", "b", "8", 9, 10, 7, "B"];

var arrayThree = [];

for (let i = 0; i < arrayTwo.length; i++) {
    if (typeof(arrayTwo[i]) === "number") {
        arrayThree.push(arrayTwo[i]);
    }
}

console.log(arrayThree);



var person = [
    {
        nom : "Rakoto",
        prenom : "Rasoa"
    },
    {
        nom : "Rabe",
        prenom : "loha"
    },
    {
        nom : "bema",
        prenom : "kely"
    }
];

for (let i = 0; i < person.length; i++) {
    person[i].nomComplet = person[i].nom + ' ' + person[i].prenom;
}

console.log(person);