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


//Task 3 — Find Largest Number

let newArray =[11,15,9,8,5,12]

let largest_num = newArray[0];

for(let i = 0 ; i<= newArray.length-1; i ++){
    if(newArray[i]>largest_num){
        largest_num = newArray[i];

    }

}
console.log("Largest number",largest_num);


//Task 4 — Function + Array

function countEven(numbersArray){
    let Even_count = 0;
    for(let i = 0; i <= numbersArray.length-1; i++ ){
        if(numbersArray[i]%2 ===0){
            Even_count++;
        }
    }
    console.log("Even_count = ", Even_count);

}
let numbersArray = [22,55,11,2,5,8,6,4,1,7,9];
countEven(numbersArray);

//Task 5 (Bonus) — Function + Array

function findMin(numbersArray){
    let min_num = numbersArray[0];
    for(let i = 0; i<= numbersArray.length-1;i++){
        if(numbersArray[i]<min_num){
            min_num = numbersArray[i];
        }
    }
    console.log("Smallest number = ",min_num);
}
let Array2 = [2,4,8,6,4,2,9,3]
findMin(Array2);