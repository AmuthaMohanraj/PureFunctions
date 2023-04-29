// sales=[{id:78,name:'apple',price:220,category:'fruit'},
// {id:4,name:'carrot',price:40,category:'vegtable'},
// {id:12,name:'orange',price:10,category:'fruit'}]
// //  uniquecategory=[];

// //  sales.map(e=>{

// //     if(e.category in uniquecategory ){
// //        uniquecategory[e.category]+=1;
// //     }
// //     else{
// //        uniquecategory[e.category]=1;
// //     }
// //  })

//  const uniqueCategories = sales
//  .map(item => item.category)
//  .filter((category, index, categories) => categories.indexOf(category) === index);



//  console.log(uniqueCategories);


// 1.Write a function that takes an array of numbers and returns the sum of all the numbers.
//  Use the reduce method to accomplish this.

 var arr=[1,2,4,5,8];

function getReduceFunction(pass){
    return pass.reduce((a,b)=>a+b)
}

console.log(getReduceFunction(arr));




// 2.Write a function that takes an array of objects with a price property and returns
//  the total cost of all the objects. Use the reduce method to accomplish this.

arrOfObject=[{id:28,bookname:'IndiaManarvargalukku',price:457},{id:12,bookname:'Gd Naidu',price:457},
{id:34,bookname:'Zero to One',price:809},{id:46,bookname:'Salim ali',price:587}]

function getPriceArrayOfObject(value){

  return value.reduce((total,e)=>{return (total+  e.price)},0)
}

console.log(getPriceArrayOfObject(arrOfObject));




// 3.Write a function that takes an array of numbers and returns
//  the average of all the numbers. Use the reduce method to accomplish this.

var studentMarkslist=[89,64,57,84,92]
var i=0;

function getAverageFunction(marks){
    
    return marks.reduce((a,b)=>{
        i++;
        return a+b;
    },0)
}

console.log(getAverageFunction(studentMarkslist)/i)


// 4.Write a function that takes an array of objects with a quantity and price property and returns 
// the total cost of all the objects, considering the quantity of each object. Use the reduce method to accomplish this.

 stackList=[{id:7456,name:'T-Shirt',price:99,quantity:12},{id:7456,name:'Casual Shirt',price:649,quantity:12},
{id:4546,name:'Paint ',price:450,quantity:2},{id:7456,name:'T-Shirt',price:99,quantity:12}];

function totalCostObject(products){
  
return products.reduce((total,e)=>{

    if(!total[e.name]){
        total[e.name]=[e.price*e.quantity];
    }

    else{
        total[e.name].push([e.price*e.quantity]);
    }

return total
},{})

}
console.log(totalCostObject(stackList));



 console.log(stackList.reduce((total,e)=>{return (total+ (e.price*e.quantity))},0));


// 5. Write a function that takes an array of strings and returns an object where the keys are the strings, 
// and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.


var strArr=['mohan','thangam','mohan','hari'];

function apperStrins(pass){
  return pass.reduce((count,e)=>{
     if(!count[e]){
        count[e]=1;
     }else{
       count[e]++;
     }
     return count;
   },{})
}

console.log(apperStrins(strArr))


// 6.Write a function that takes an array of objects with a name and age property and returns 
// the average age of all the objects. Use the reduce method to accomplish this.

pepoleAgeAverage=[{name:'mohan',age:21},{name:'chandru',age:23},{name:'amutha',age:37},{name:'venkatesan',age:48}
,{name:'poongodi',age:25},{name:'komathi',age:19}]

function calculateAgeAverage(p){
   
    return p.reduce((total,e)=>{
        return total+e.age;
    },0)/pepoleAgeAverage.length;
}

console.log("Age-Average",calculateAgeAverage(pepoleAgeAverage))


// 7.Write a function that takes an array of strings and returns the longest string in the array. 
// Use the reduce method to accomplish this.

var str1=['mohan','venkatesan','chandru'];
var len=0;

function checkLengthOfString(str)
{
    return str.reduce((long,e)=>{

        if(e.split("").length>len)
        {     
         len=e.split('').length;
         long=e;
        }

        return long;
    },'')
}

console.log(checkLengthOfString(str1));


// 8. Write a function that takes an array of objects with a name and salary property 
// and returns the total salary of all the employees. Use the reduce method to 
// accomplish this.


var employeeSalaryList=[{name:'mohan',salary:20000},{name:'jeeva',salary:30000},{name:'saro',salary:40000},
{name:'muthu',salary:50000}]

function getEmployeeSalary(employee){
    return employee.reduce((total,e)=>{
        return total+e.salary;
    },0)
}

console.log('All Employee Salary Total',getEmployeeSalary(employeeSalaryList))


// 9. Write a function that takes an array of numbers and returns the product of all the 
// numbers. Use the reduce method to accomplish this.


var arrlist=[1,2,3,4,5,6];


function getProductAllNumbers(numbers){
 return numbers.reduce((total,e)=>
 {
    return total*e;
 },1)
}

console.log(getProductAllNumbers(arrlist))


// 10.Write a function that takes an array of objects with a category property and 
// returns an object where the keys are the categories, and the values are the total 
// cost of all the objects with that category. Use the reduce method to accomplish 
// this

shopProductsList=[{id:46,category:'shoe',price:656},{id:57,category:'belt',price:999},
{id:46,category:'shorts',price:200}]
var sum=item=0;

function getTotalCostOfProduct(list){

    return list.reduce((total,e)=>{
           
        item++;
        let view='item'+item;

        sum+=e.price;

        if(!total[e.category])
        {
            total[view]=e.category;
        }

    return total;

    },{})
}

console.log(getTotalCostOfProduct(shopProductsList),'TotalCost All Products',sum)