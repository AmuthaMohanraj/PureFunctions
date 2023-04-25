
// Write a function that takes an array of numbers and returns a new array with each
// number squared. Use the Map object to accomplish this.

arr = [1, 2, 3, 4, 5]
console.log(arr.map(e => e * e))



// Write a function that takes an array of objects with a name property and returns a new
// array of strings with the name of each object capitalized. Use the Map object to
// accomplish this.

student = [{ id: 459, name: "mohan", gender: 'male' }, { id: 970, name: "chandru", gender: 'male' }];
obj = student.map(temp => {

    temp.name = temp.name.charAt(0).toUpperCase() + temp.name.slice(1);
    return temp
})
console.log(obj)


// Write a function that takes an array of words and returns an object where the keys are
// the words and the values are the number of times each word appears in the array. Use
// the Map object to accomplish this.

appeararr = [
    { name: 'mohan', age: 23 },
    { name: 'suji', age: 19 },
    { name: 'mohanpriya', age: 25 },
    { name: 'mohan', age: 42 },
    { name: 'mohan', age: 32 },
    { name: 'mohanpriya', age: 19 },
]

obj = [];

appeararr.map(e => {

    if (e.name in obj) {

        return obj[e.name] += 1
    } else {

        return obj[e.name] = 1
    }

})

console.log(obj);
// console.log(appeararr.c.name)

// Write a function that takes an array of objects with a category property and returns an
// object where the keys are the categories, and the values are arrays of objects with that
// category. Use

food = [{
    "veg": [
        {
            "category": "Entree",
            "name": "Grilled Chicken Sandwich",
            "price": 10.99,
            "description": "Juicy grilled chicken breast topped with lettuce, tomato, and mayo on a brioche bun.",
            "calories": 450,
            "ingredients": [
                "Grilled chicken breast",
                "Lettuce",
                "Tomato",
                "Mayo",
                "Brioche bun"
            ]
        }
    ],
    "non-veg": [
        {
            "category": "Salad",
            "name": "Caesar Salad",
            "price": 9.99,
            "description": "Classic Caesar salad with romaine lettuce, croutons, and Parmesan cheese. Served with Caesar dressing.",
            "calories": 250,
            "ingredients": [
                "Romaine lettuce",
                "Croutons",
                "Parmesan cheese",
                "Caesar dressing"
            ]
        }
    ],

    "veg": [
        {
            "category": "Entree",
            "name": "Grilled Chicken Sandwich",
            "price": 10.99,
            "description": "Juicy grilled chicken breast topped with lettuce, tomato, and mayo on a brioche bun.",
            "calories": 450,
            "ingredients": [
                "Grilled chicken breast",
                "Lettuce",
                "Tomato",
                "Mayo",
                "Brioche bun"
            ]
        }
    ]
}

]

selectItem = 'veg'

console.log(food.map(m => m.selectItem))
