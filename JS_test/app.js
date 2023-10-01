const people = [
    {name:'Jan', lastname: 'Kowalski', country: 'Poland', salary: 5000 },
    {name:'Krzysztof', lastname: 'Nowak', country: 'Niemcy', salary: 25000 },
    {name:'John', lastname: 'Smith', country: 'USA', salary: 8000 },
    {name:'Sophia', lastname: 'Dubois', country: 'Francja', salary: 35000 },
    {name:'Sarah', lastname: 'Taylor', country: 'Australia', salary: 50000 }
    ];
    

    // console.log("🚀 ~ file: index.html:17 ~ people:", people);
// person = people;    
// console.log("🚀 ~ file: index.html:20 ~ person:", person);
// console.log(people[3]);

const personDisplay = (person, index, arr) => {
    // console.log(person.name, person.lastname, person.country);
    console.log(`${index+1} z ${arr.length }: ${person.name} ${person.lastname}, kraj: ${person.country}`);
}

for (let i=0; i < people.length; i++ ) {
const person = people[i];
    // console.log(people[i]);
//    console.log(`${person.name} ${person.lastname}, kraj: ${person.country}`);

    personDisplay(person, i, people);
};

console.log('#forEach#');

    // console.log(people.forEach(pozycja));
    // people.forEach((person_linii) => {

people.forEach ((person_linii,index) => {
    // console.log(person_linii);
    personDisplay(person_linii,index);

});

// skrot cmd+alt+strzalka gora/dol pisanie w wielu liniach na raz 

// console.log(people[0],1,people)
// console.log(people[1],2,people)
// console.log(people[2],3,people)
// console.log(people[3],4,people)
// console.log(people[4],5,people)

