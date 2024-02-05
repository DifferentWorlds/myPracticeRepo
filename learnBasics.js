alert('this is alert message')

const s = 'shivani'

const x = s.__proto__
console.log(x)

const access = s[3]
const length = s.length
const small = s.toLowerCase()
const big = s.toUpperCase()
const substring = s.substring(3)
const charAt = s.charAt(4)
const color = s.fontcolor('blue')
const endsWith = s.endsWith(s, 'i')
const slice = s.slice(-3, -1)
const split = s.split('')

const upper = s.toUpperCase()
const replace = s.replace(s, upper.charAt(0))

const num = [1, 2, 3, 4, 5]
const num2 = [5, 6, 7, 8, 9, 10]

// const pu = num.push(6)
// const fir = num.unshift(0)
// const rev = num.reverse()
const spli = num2.splice(0, 1)
const spr = [...num, ...num2]
console.log(spr);