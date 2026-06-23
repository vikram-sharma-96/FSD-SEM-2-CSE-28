let fruits = ["apple","Banana","cherry"];
console.log(fruits);
fruits.push("Date");
console.log(fruits.length);
console.log(fruits[1]);

// sum of element in array
    let marks = [24,34,56,43,65,23];
    let sum=0;
    for(let i=0;i<6;i++){
        sum+=marks[i];
    }
    console.log(sum);
    let avg = sum/marks.length;
    console.log(avg);
