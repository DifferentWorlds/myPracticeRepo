const me ={
    name: 'shivani',
    'my age' : 24,
    profession: 'software'
}

const messvalues = Object.assign(me)

const dotmeth = me.name
const bramet = me['my age'] // in this case dot notation doesnot work, but dont property like that

me.hobbies = 'eat' // add property
me.watch = function () {
    console.log('watch netflix');
} // add functin 
console.log(messvalues, 'messvalues');