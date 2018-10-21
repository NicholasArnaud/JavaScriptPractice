let name = 'surprise';
console.log(name);

const interestrate = 0.11;
let cost = 4.56;
console.log((interestrate * cost)+cost);

let selected = undefined;
let unselected = null;
console.log(selected == unselected);

let person = {
    name: '',
    age: 12
};
console.log(person);

person.name = 'Sam';
console.log(person.name);

selected = 'name';
person[selected] = 'Bobby';
console.log(person.name);

let selectedItems = ['box','cart'];
console.log(selectedItems);

function totalCost(cost, interest){
    let total = (interest * cost)+ cost;
    total = Math.round(total*100)/100;
    return total;
}
console.log("The total cost is: "+ totalCost(cost, interestrate));