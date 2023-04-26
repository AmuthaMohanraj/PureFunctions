

// 1. Write a function that takes an array of numbers and returns a new array with only 
// the even numbers. Use the filter method to accomplish this.

number=[1,2,3,4,5,6,7,8,9,10,12];
newnumberarr=[];


number.filter(e=>{
 
    if(e%2==0){
      newnumberarr.push(e)
    }

})

 console.log(newnumberarr);


//  2. Write a function that takes an array of objects with a price property and returns a 
//  new array with only the objects that have a price less than a given amount. Use 
//  the filter method to accomplish this

 sales=[{id:78,name:'apple',price:220,category:'fruit'},{id:4,name:'butter-banana',price:40,category:'fruit'},{id:12,name:'orange',price:10,category:'fruit'}]
 lowestprice=[];


 //example 1
let min = sales.reduce((e,a)=>{
    // console.log(e.price,'........',a.price);
    return e<a.price ? e:a.price;
});
 let a= sales.filter(e=>{
    return e.price < 60;

        // if(lowestprice.lowerstprice['price']>e.price){
        //     lowestprice['lowerstprice']=[e];
        //     console.log('hai mohan')
        // }
        //     lowestprice['lowerstprice']=[e];
    



        // if(e.price>60)
        // {

        // }
 })
console.log(min);
 console.log(a);

 //example 1
lowest=[];
 sales.filter(e=>{

   if(lowest['lowestprice']=e.price<=60){
    lowest.push(e);
   }
 })

console.log(lowest)




// 3.Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given amount. Use the filtermethod to accomplish this.


highestlength=[];
 sales.filter(e=>{

   if(e.name.length>8){
    highestlength.push(e.name);
   }
 })

console.log(highestlength)


//4. Write a function that takes an array of objects with a category property and 
// returns a new array with only the unique categories. Use the filter and map
// methods to accomplish this.

sales=[{id:78,name:'apple',price:220,category:'fruit'},
{id:4,name:'carrot',price:40,category:'vegtable'},
{id:12,name:'orange',price:10,category:'fruit'}]
 uniquecategory={};

 sales.map(e=>{
    if(uniquecategory in e.category){
       uniquecategory[e.category]+=1;
    }
    else{
       uniquecategory[e.category]=1
    }
 })

 console.log(uniquecategory);





// 5.Writea function that takes an array of objects with a nameand ageproperty and returns a new array with only the objects where the age is greater than a given amount. Use the filtermethod to accomplish this.

arr=[{name:'nethaji',age:18},{name:'ragul',age:16},{name:'thangam',age:24}]
newarr=[]
obj={}

arr.filter(e=>{
    if(e.age>=18){
        newarr.push(e)
        obj[e.name]=e;
    }
        

})

console.log(newarr,"array of object")
console.log(obj,"Object")


// 6.Write a function that takes an array of objects with a name with a name and hobbies property and returns a new array with only the objects where the hobbies include a given hobby. Use the filtermethod to accomplish this.and hobbiesproperty and returns a new array with only the objects where the hobbies include a given hobby. Use the filtermethod to accomplish this.

 personsArrayOfObject=[{name:'mohan',hobbies:'reading books'},{name:'kaviyarasu',hobbies:'peigeon-farm'},{name:'murali',hobbies:'reading books'},{name:'surya',hobbies:'cow-farm'}]

 hobbiesarr=[];

 personsArrayOfObject.filter(e=>{
    if(e.hobbies=='reading books'){
        hobbiesarr.push(e);
    }
 })

 console.log(hobbiesarr);



//7.  Write a function that takes an array of objects with a nameand gradesproperty and returns a new array with only the objects where the average grade is greater than a given amount. Use the filtermethod to accomplish this.


student=[{name:'mohan',grade:82},{name:'thangam',grade:85},{name:'raman',grade:60},{name:'haritha',grade:90}]
studentgrade={};

student.filter(e=>{
    if(e.grade>80&& e.grade<90){
       studentgrade['greaterthan 80%',e.name]=e
    }
})

console.log(studentgrade);


// 8. Write a function that takes an array of objects with a dateproperty and returns a new array with only the objects where the date is within a given range. Use the filtermethod to accomplish this.

items=[{id:'01',date:'2020-02-01'},{id:'78',date:'2023-04-12'},{id:'46',date:'2018-12-31'}];
checkingitems={};
startdate=new Date('2018-01-01');
enddate=new Date('2020-08-02');

items.filter(e=>{

    let checkdate=new Date(e.date)
    
    if(checkdate >= startdate&& checkdate < enddate){
        checkingitems[e.id]=[e];
    }
})

console.log(checkingitems)


// 9.Write a function that takes an array of objects with a nameand emailproperty and returns a new array with only the objects where the email address includes a given domain. Use the filtermethod to accomplish this.


var employee=[
    {name:'Mohanraj',email:'rajmohanraj.2304@gmail.com'},
    {name:'AmuthaMohanraj',email:'mohanraj.venkatesan@finstein.ai'},
    {name:'thangam',email:'thangam@gmail.com'}]

const domainExtension='ai';
var e_mailArr={};

employee.filter(e=>{

let currentExtension=e.email.split(".");

    let i=currentExtension.length-1;

    if(currentExtension[i]==domainExtension){
        
        e_mailArr[e.name]=e;
    }
   
})

console.log(e_mailArr);


// 10.Write a function that takes an array of strings and returns a new array with only 
// the strings that are palindromes. Use the filter method to accomplish this

var list=[{word:'malayalam'},{word:'teacher'},{word:'mam'}]


var palindromelist=[];


list.filter(e=>{
  let chkpalindrome=e.word.split("").reverse().join("");

    if(e.word==chkpalindrome){
       palindromelist.push(e);
    }
})

console.log("Palindrome ",palindromelist)


