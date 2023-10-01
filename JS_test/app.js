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

const personDisplay = (person) => {
    // console.log(person.name, person.lastname, person.country);
    console.log(`${person.name} ${person.lastname}, kraj: ${person.country}`);
}

for (let i=0; i < people.length; i++ ) {
const person = people[i];
    // console.log(people[i]);
//    console.log(`${person.name} ${person.lastname}, kraj: ${person.country}`);

    personDisplay(person);
};
