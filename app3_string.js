// Strings

// const name = 'Nicola'
// const age = 26
// function getAge() {
//     return age
// }

// const output = 'Hello, my name is ' + name + ' and my age: ' + age
// const output = `Hello, my name is ${name} and my ag is  ${getAge()} -- ${age < 30 ? 'A' : 'B'}`
// console.log(output)

// const output = `
// <div>This is div</div>
// <p>This is p </p>
// `
// console.log(output)

// const name = 'Nicola' // behind the scene = new String()
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('la'))
// console.log(name.indexOf('!'))
// console.log(name.startsWith('nic'))
// console.log(name.toLowerCase().startsWith('nic'))
// console.log(name.startsWith('Nic'))
// console.log(name.endsWith('la'))
// console.log(name.repeat(3))
// const string = '     password     '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    // console.log(s, name, age)
    // return 'Info about person'
    return `${s[0]} ${name} ${s[1]} ${age} ${s[2]}`
}
const personName = 'Nicola'
const personName2 = 'Tesla'
const personAge = 26
const personAge2 = -10

const output = logPerson`Name: ${personName}, age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}, age: ${personAge2}!`
console.log(output)
console.log(output2)