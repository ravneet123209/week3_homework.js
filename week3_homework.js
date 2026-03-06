//Task 1 — Print Numbers
for(let i =1; i<=50; i++){
    if(i%2===0){
        console.log(i,"Even")

    }else{
        console.log(i)
    }
}
//Task 2 — Sum Array
let array = [1,2,3,4,5] 
let sum = 0; //for storing value of sum


//for loop
for (let i = 0 ; i<= array.length-1; i ++){
    
    sum+=array[i]; //adding array to sum
    
}
console.log("sum =",sum, "average = " , sum/array.length);
