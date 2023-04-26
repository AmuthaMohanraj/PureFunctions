sales=[{id:78,name:'apple',price:220,category:'fruit'},
{id:4,name:'carrot',price:40,category:'vegtable'},
{id:12,name:'orange',price:10,category:'fruit'}]
 uniquecategory={};

 sales.map(e=>{

    if(e.category in uniquecategory ){
       uniquecategory[e.category]+=1;
    }
    else{
       uniquecategory[e.category]=1
    }
 })



 console.log(uniquecategory);
