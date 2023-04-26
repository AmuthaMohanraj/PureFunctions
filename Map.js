
// //1. Write a function that takes an array of numbers and returns a new array with each
// // number squared. Use the Map object to accomplish this.

arr = [1, 2, 3, 4, 5]
console.log(arr.map(e => e * e))



// // 2. Write a function that takes an array of objects with a name property and returns a new
// // array of strings with the name of each object capitalized. Use the Map object to
// // accomplish this.

student = [{ id: 459, name: "mohan", gender: 'male' }, { id: 970, name: "chandru", gender: 'male' }];
obj = student.map(temp => {

    temp.name = temp.name.charAt(0).toUpperCase() + temp.name.slice(1);
    return temp
})
console.log(obj)


// //3. Write a function that takes an array of words and returns an object where the keys are
// // the words and the values are the number of times each word appears in the array. Use
// // the Map object to accomplish this.

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

// //4. Write a function that takes an array of objects with a category property and returns an
// // object where the keys are the categories, and the values are arrays of objects with that
// // category. Use


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
            "category": "Entree2",
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




obj= {};

i = 0;
food.map(e => {
    if (e.veg) {

        i++;
        if (e.veg in obj) {
            obj[e].push(e)
        } else {
            console.log(i)
            obj[e] = [e]
        }


    }
})

console.log(obj)






//5. Write a function that takes an array of objects with a categoryproperty and returns an object where the keys are the categories, and the values are arrays of objects with that category. Use 


//example 1


// students=[{name:'mohan',age:21,category:'it'},{name:'sarao',age:24,category:'eee'},{name:'vasu',age:21,category:'it'},{name:'guru',age:20,category:'it'}]

// obj={}
// students.map(e=>{
//    if(e.category in obj){

//        obj[e.category].push(e)

//    }else{
//        obj[e.category]=[e]
//    }
// }
//     )
// console.log(obj)


//example 2

students=[{name:'mohan',age:21,category:'it'},{name:'sarao',age:24,category:'eee'},{name:'vasu',age:21,category:'it'},{name:'guru',age:20,category:'it'}]

obj1={}
students.map(e=>{
   if(e.category.includes('it')){

      if(e.category in obj1){
       obj1[e.category].push(e)
      }else{
       obj1[e.category]=[e]
   }}
})
console.log(obj1)



// 6. Write a function that takes an array of strings and returns a new array 
// with only the unique strings. Use the Mapobject to accomplish this.

checkunique=['jode','jeeva','jode','siva']


  newarray=[]
  checkunique.map(e=>{
     if(!newarray.includes(e)){
        newarray.push(e);
     }
  })

console.log(newarray);


// 7. Write a function that takes an array of numbers and returns an object where the keys are
// the numbers and the values are arrays of their prime factors. Use the Map object to


primearr=[1,2,3,4,5,13,12,10];

primearr.map(e=>{

})


// 8. Write a function that takes an array of objects with a name and age property and returns
// an object where the keys are the age and the values are arrays of objects with that age.
// Use the Map object to accomplish this.


nameobject=[{name:'seshika',age:6},{name:'megha',age:3},{name:'poongodi',age:24},{name:'gopi',age:32},{name:'manasvi',age:3}];
  newnameobject={};

nameobject.map(e=>{
  if(e.age in newnameobject){
     newnameobject[e.age].push(e)
  }else{
   newnameobject[e.age]=[e]
  }
})

console.log(newnameobject)


// 9. Write a function that takes an array of strings and returns an object where the keys are
// the strings sorted alphabetically and the values are arrays of the original strings that are
// anagrams of each other. Use the Map object to accomplish this.


nameobject1=[{name:'seshika',surname:'arumugam'},{name:'megha'},{name:'poongodi'},{name:'gopi'},{name:'manasvi'},{name:'seshika'}];
  newsortarray={};

nameobject1.map(e=>{
    newsortarray[e.name.split("").sort().join("")]=[e];
})

console.log(newsortarray)


a="mohan"


console.log(a.split("").sort().join(""))


// 10.Write a function that takes an array of objects with a date property and returns an object 
// where the keys are the year and the values are arrays of objects with that year. Use the 
// Map object to accomplish this.


dateobject=[{name:'singaram',city:'thiruvannamalai',year:'24-04-1998'},{name:'saro',city:'ariyalur',year:'15-10-2000'},{name:'siva',city:'podaturper',year:'12-02-2002'},{name:'mohan',city:'podaturper',year:'23-04-2002'}]

newdateobject={};

dateobject.map(e=>{
        if(newdateobject.year in newdateobject){
            newdateobject[e.year.split("-").join("/").slice(6)].push(e);
        }else{
           newdateobject[e.year.split("-").join("/").slice(6)]=[e]
        }

    })

    console.log(newdateobject);