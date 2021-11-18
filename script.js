// Separate array items ',' then at the second last item,
// add 'and'.

//const arrayItems = [1, 2, 3, 5, 20, 3]
const arrayItems = ['Steve', 'Mary', 'Jane', 'Peter', 'Tony', 'Bruce']
let stringy = ''
let separator = ''
let counter = 1
for (let i = 0; i < arrayItems.length; i++) {
    if ((i + 1) < (arrayItems.length - 1)) {
        separator = ', '
    } else if ((i + 1) == (arrayItems.length - 1)) { 
        separator = ' and '
    } else if ((i + 1) > (arrayItems.length - 1)) {
        separator = ''
    }
    stringy += arrayItems[i].toString() + separator
}
console.log(stringy)