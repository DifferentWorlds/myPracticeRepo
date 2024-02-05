const library = [
    {
        title: 'one',
        author: 'shivani',
        status: {
           own : true,
           reading: false,
           read: false
        }
    },
    {
        title: 'two',
        author: 'balu',
        status: {
           own : true,
           reading: false,
           read: false
        }
    },
    {
        title: 'three',
        author: 'kikki',
        status: {
           own : true,
           reading: false,
           read: false
        }
    }
]

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

const {title: firstBook} = library[0]
const conv = JSON.stringify(library)