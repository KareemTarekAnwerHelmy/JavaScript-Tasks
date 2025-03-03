function getRandomNames(array) {
    if (array.length < 2) return [];  
    let firstIndex = Math.floor(Math.random() * array.length);
    let secondIndex;
    do {
        secondIndex = Math.floor(Math.random() * array.length);
    } while (secondIndex === firstIndex);
    return [array[firstIndex], array[secondIndex]];
}

const names = ["ahmed", "islam", "sandra", "Fatma", "Ali"];
const randomNames = getRandomNames(names);
console.log(randomNames);
