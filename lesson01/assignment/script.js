const myForm=document.getElementById("myForm");
myForm.addEventListener("submit", (e)=>{
  e.preventDefault();
);
<!--This will show the value multiplied by 5 (5 mice per cat)---->

let array = [1,2,3];
array.map(function(value) { return value * 5
  });
   console.log(array)

<!--This will add cats, mice, and dogs together for total number of animals---->
   let sum = 0;
   sum2=array.reduce(function(sum, value){
     return sum + value;
   });

<!--If you have over 50 animals total, this will tell you you are eligible for nature preserve status--->
   let over50 = true;
   for(let i=0; i < array.length; i++) {
     if(array[i]<50)
       over50 = false;
     break;
     }

   console.log(over50);

<!--This will add number person inputs to my array below---->
