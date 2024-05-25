// console.log("AKASH SAMANTA");
// let num=prompt("Enter your name");
// console.log(num);
// let k= 5+ "5";
// console.log(k);
// let num1 = prompt("Enter a number:");
// if(num1 % 5 ===0){
//     console.log(num1," is multiple by 5");
// }
// else{
//     console.log(num1 ," is not multiple by 5");
// }
// let num1=prompt("Enter a number:");

// if(num1 < 40 && num1 >=0){
//     console.log(num1, " -> F");
// }
// else if(num1 >=40 && num1 <50){
//     console.log(num1, " -> D");
// }
// else if(num1 >=50 && num1 <60){
//     console.log(num1, " -> C");
// }
// else if(num1 >=60 && num1 < 70){
//     console.log(num1, " -> B");
// }
// else if(num1 >=70 && num1 < 80){
//     console.log(num1, " -> A");
// }
// else if(num1 >=80 && num1 < 90){
//     console.log(num1, " -> E");
// }
// else if(num1 >=90 && num1 < 100){
//     console.log(num1, " -> B");
// }
// else{
//     console.log("Out of range number");
// }

// let num2=Number(prompt("Enter a number for day:"));
// switch(num2){
//     case 1: console.log( num2, " -> Monday");
//     break;
//     case 2: console.log( num2, " -> Tuesday");
//     break;
//     case 3: console.log( num2, " -> wednesday");
//     break;
//     case 4: console.log( num2, " -> Thursday");
//     break;
//     case 5: console.log( num2, " -> Friday");
//     break;
//     case 6: console.log( num2, " -> Suturday");
//     break;
//     case 7: console.log( num2, " -> Sunday");
//     break;
//     default: console.log("Out of range");
//     console.log(num2);
    
// }
// let num1 = prompt("Enter a number:");
// let i= num1 %5 ===0 ? console.log(num1," is multiple by 5"):console.log(num1," is not multiple by 5");


// console.log(7/6);
// let n = prompt("Enter a number for FOR loops:");
// for(let i=1;i<=10;i++){
//     console.log(`${n} * ${i} = ${i*n}`);
// }
// let m = prompt("Enter a number for WHILE loop:");
// let i=1;
// while(i<=10){
//     console.log(m ," * ",  i ," = ",m*i);
//     i++;
// }

// if(0 == 5 > 8){
//     console.log("TRUE");
// }else{
//     console.log("FALSE");
// }
// let str = "AKASH SAMANTA";
// for(let i of str){
//     console.log(i);
// }
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
//     console.log(str.charAt(i));
// }

// const phoneNumber = {
//     akash : 123456,
//     subhajit:4365486,
//     shambuddha:34986,
//     dwaipayan:436898
// }

// console.log(str);
// console.log(phoneNumber);

// for(let j in phoneNumber){
//     console.log(`${j} -> ${phoneNumber[j]}`);
// }

// let str =prompt("Enter a string:");
// console.log(str.toUpperCase());
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str);
// console.log(str.slice(2,7));
// console.log(str);
// console.log(str.replace("sh","sshh"));
// console.log(str);
// console.log(str.concat("AKASH"));
// console.log(str);
// let k="";
// k=`@${str+str.length}`;
// console.log(k);
// let arr = [ 4,5,6,7,8,9];

// console.log("Good morning");


// console.log(`sum = ${sum(6,8)}`);

// function sum(a,b){
//     return a+b;
// }
// function print(){
//     console.log("Welcome to javascript programming.");
// }

// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// const sum1=(a,b)=>{
//     return a+b;
// }
// const fact=(n)=>{
//     if(n==1){
//         return 1;
//     }
//     return n*fact(n-1);
// }
// const fibonacci = (n)=>{
//     if(n===1 || n===0){
//         return n;
//     }
//     return fibonacci(n-1)+fibonacci(n-2);
// }
// let m = prompt("Enter a number:");5
// for(let i=0;i<m;i++){
//     console.log(`${i+1} fibonacci number = ${fibonacci(i)}`);
// }

// let str=prompt("Enter a string:");
// let vowel="aeiouAEIOU";
// console.log(`No of vowel= ${countVowel()}`);
// function countVowel(){
//     let count=0;
//     for(let i of str){
//         for(let j of vowel){
//             if(i === j){
//                 count++;
//                 console.log(`${count} vowel is ${i}`);
//             }
//         }
//     }
//     return count;
// }

// let str="astgfryht";
// let arr = [ 4,5,6,7,8,9];
// arr.forEach((a,b,c)=>{
//     console.log(a*2,b,c);
// });

// let arr = [ 4,5,6,7,8,9];
// const array=(a,b,c)=>{
//     console.log(a*a,c);
// }
// arr.forEach(array);

// let arr = [ 4,5,6,7,8,9];
// let array=arr.map((a,b,c)=>{
//     console.log(a*a,c);
//     return a*a;
// });
// console.log(array);
// let h=[];
// let g="";

// let arr1=(a,b,c)=>{
//     console.log(a*a,c);
//     return a*a;
// }
// let arr = [ 4,5,6,7,8,9];
// let array=arr.map(arr1);
// console.log(array);

// let arr1=(a,b,c)=>{
//     console.log(a*a,c);
//     return a%2===0;
// }
// let arr = [ 4,5,6,7,8,9];
// let array=arr.filter(arr1);
// console.log(array);

// let arr1=(a,b,c,d)=>{
//     console.log(a,b,c,d);
//     return a>b?a:b;
// }
// let arr = [ 3,4,5,6,7,8,9,3,56,7,4,2,5];
// let array=arr.reduce(arr1);
// console.log(array);

// let num=prompt("Enter no of studemt");
// let arr=[];
// for(let i=0;i<num;i++){
//     arr[i]=prompt(`Enter ${i+1} student marks:`);
// }
// let array=arr.filter((value)=>{
//     return value>90;
// });
// console.log(array);

// let num=prompt("Enter a number:");
// let arr=[];
// for(let i=0;i<num;i++){
//     arr[i]=i+1;
// }
// let array=arr.reduce((val1,val2)=>{
//     return val1*val2;
// });
// console.log(array);

// console.log(window);
// console.dir(window);
// console.log(window.document);
// console.dir(window.document);
// console.log(document); 
// console.dir(document);


console.dir(document.body);


