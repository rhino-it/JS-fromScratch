// JS is a dynamically typed language
// there are 8 data types
// camelCase

// 1 Variables

// var name = "Nick" // string
// const firstName = "Nick"
// const lastName = "Tesla"
// let age = 29 // number
// age = 30
// age = "thirty"
// age = false
// const age = 29 // number

// const isProgrammer = true // boolean
//
//
// const _private = "private"
// const _ = "some value"
// const $ = "dollar"

// const if = "error"   // err

// const withNum5 = "5"
// const 5withNum = "5"  // err

// name = 'Nicola'
// lastName = "Tesla" it is const. you can't redefine or reassign

// console.log(age)


// 2 Mutation

// console.log('Name of individual: ' + firstName + ', age of individual: ' + age)
// console.log(age.toString()) number

// prompt('Input second name')
// const lastName = prompt('Input second name')
// alert(firstName + ' ' +lastName)


// 3 Operators

// const currentYear = 2021
// const birthYear = 1993

// const age = currentYear - birthYear
// const age = currentYear + birthYear
// console.log(age)

// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
//
// let currentYear = 2021
// console.log(currentYear++)
// console.log(currentYear)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)


// 4 Data types

// const isProgrammer =true
// const name = 'Nick'
// const age = 1993
// let x
// let m = null  // gives object. this is js bug
//
// // Primitive data types
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof m)


// 5 Priority(precedence) of operators

// const fullAge = 29
// const birthYear = 1992
// const currentYear = 2021
//
//
// // tip. write in google - mdn operator precedence
// // tip. mdn  = Mozilla Developer Network
// // < > >= <=
// const isFullAge = (currentYear - birthYear) >= fullAge // 29 >= 29 => true
// console.log(fullAge)


// 6 Conditional operators

// const courseStatus = 'ready' // ready, fail, pending
//
// // if (courseStatus === 'ready') {
// //     console.log('the course is already ready and you can take it')
// // }
// // // if (courseStatus === 'pending') {
// // //     console.log('the course is still under development')
// // // }
// // else if (courseStatus === 'pending') {
// //     console.log('the course is still under development')
// // } else {
// //     console.log('the course is canceled')
// // }
// // const isReady = false
//
// // // if (isReady === true){
// // //     console.log('Ready')
// // // }
// // if (isReady){
// //     console.log('Ready')
// // } else {
// //     console.log('Not ready')
// // }
//
// // Ternary operator
// isReady ? console.log('Ready') : console.log('Not Ready')
//
// // const num1 = 42
// // const num2 = '42'
// // console.log(num1 == num2)
// // console.log(num1 === num2)


// Boolean logic
// // tip. write in google - mdn logic operators


// function  calculateAge(year) {
//     return 2021 - year
// }
// // const myAge = calculateAge(1992)
// // console.log(myAge)
// // console.log(calculateAge(1992))
// // console.log(calculateAge(1996))
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('A man/woman named ' + name + ' is now in his/her ' + age)
//     } else {
//         console.log('actually, it’s the future')
//     }
// }
//
// logInfoAbout('Nicola', 1992)
// logInfoAbout('Elena', 1995)
// logInfoAbout('Elena', 2022)


// 9 Arrays

// const cars = ['Mazda', 'Mersedes', 'Ford']
// // const  cars = new Array('Mazda', 'Mersedes', 'Ford') //What's going on backstage of js
// console.log(cars)
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[3])
//
// cars[0] = 'Porsche'
// cars[3] = 'Tesla'
// cars[cars.length] = 'VW'
// console.log(cars)


// 10 Loops

// const cars = ['Mazda', 'Mersedes', 'Ford']
//
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }
//
// for (let car of cars) {  // new type of for
//     console.log(car)
// }

// 11 Objects
//
// // const person = new Object({ })
// const person = {
//     firsName: 'Nicola',
//     lastName: 'Tesla',
//     year: 1995,
//     language: ['Kg', 'Ru', 'En'],
//     maritalStatus: false,
//     greet: function () {  // this is method, cos it's in object
//         console.log('greet from person')
//     }
// }
// console.log(person.firsName)
// console.log(person['lastName'])
// const key = 'language'
// console.log(person[key])
// person.maritalStatus = true
// person.isProgrammer = true
// console.log(person)
// person.greet()

// timer 1:43


