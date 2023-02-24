import React from 'react'
import './trial.css'
import { useEffect } from 'react';

export default function Trial() {
  useEffect(() => {
    document.title = "Discord | learning JS"
  }, []);
  // there are two types of if esle statement
  // 1. we can normally use if else statement
  // 2. we can use if else statement just after "else"
  // 3. we can use if else statement inside a if lse statement
  // 4. we can use if else statement as suitable to our logic

  // var age = 18;

  // alert(( age >= 18) ? "you can vote indeed" : "you cannot vote");:
  // { 
  //     var area = 4;

  //     switch(area){
  //       case 2:
  //         alert("this is circle");
  //         break;
  //       case 3:
  //         alert("this is triangle");
  //         break;
  //       case 4:
  //         alert("this is rectangle");
  //         break;
  //       default:
  //         alert("theek se data daalo");
  //     } }

  // while loop

  // var num = 1;

  // while( true ){
  //   console.log(num);
  //   num++;
  // }

  //do while loop

  // var num = 1;

  //  do{
  //   console.log(num);
  //   num++;
  // }
  // while( num <= 1500 );  

  // for loop

  // for( var num = 10; num >= 1; num-- ){
  //   console.log(num)
  // }

  // table by for loop, project...!

  // var val = 9;

  // for(var mul = 1; mul <= 5; mul++){
  //   console.log(mul);
  // }
//////////////////////////////////////////////////////////////////////////////////////////////
  // functions

  // function hi(){
  //   console.log("Hi there...!");
  // };

  // hi();

  // parameterss and arguments

  // function chase(a,b,c,d){
  //   var exp = ((a+b)-c)/d;
  //   console.log(exp);
  // };

  // chase(10,10,10,10);

  //  var mun = 100

  //  while(true){
  //    console.log(mun, mun++;);
  //    
  //  }

  // var num = 1;

  // if(num > 10){
  //   console.log("Please enter the value that is more then 1");
  // }else if(num === undefined){
  //   console.log("Please Enter some value, it's necassary..!");
  // } else{
  //   while(true){
  //     // console.log(num);
  //     // num++;
  //   }
  // }

  // let myFunction = ["abc", "xyz", "def", "ghi", "juke"];

  //for loop in array

  //   for(var i = 0; i<myFunction.length; i++){
  //    console.log(myFunction[i]);
  //  }

  //for in loop {*only for array}

  // for(let element in myFunction){
  //   console.log(element);
  // }

  //for of loop {*only for array}

  // for(let element of myFunction){
  //   console.log(element);
  // }

  //for Each loop {*only for array}

  // through default function

  // myFunction.forEach(function(element,index,array){
  //   console.log(`${element} : ${index}`);
  // })

  // through fat arrow function
  // which does not support this argument

  // myFunction.forEach((element,index) => {
  //   console.log(`${element}'s index is ${index}`);
  // })



  //searching methods.... 

  //  console.log(myArray.lastIndexOf("three", 1));

  // we can use it for validation...{*includes} cuz only uses boolean

  // console.log(myArray.includes("four", 4));

  // let find = myArray.find((element) => {
  //   return element > "four";
  // });

  // console.log(find);

  // var unction = myArray.find((element)=>{
  //   return element<"four"
  // }) ;

  // console.log(unction);

  // let myArray = [1,2,3,4,5,6,7];


  // // console.log(myArray.find((element) => {
  // //   return element < 3}));

  // let xyz = () => {
  //   myArray.filter((element) => {
  //     element < 5
  //   })
  // };

  // console.log(xyz);

  // filter

  // let price = [1,2,3,4,5,6,7,8,9,10];

  // let myPrice = price.filter((element) => {
  //   return element >= 6;
  // })

  // console.log(myPrice);

  // Push (enter) data into array...
  // there's also a method called Unshift, which lets you add array in starting...

  // let profile = ['user1','user2','user3'];

  // console.log(profile);

  // console.log(profile.length);

  // let logged = profile.push('user4');

  // console.log(profile);

  // console.log(profile.length);

  // Pop (remove) data from array...
  // there's also a method called shift, which lets you remove array from starting...

  //  let myArray = ['Jirou', 'Tsunade', 'Hinata', 'Shoyou'];

  //  console.log(myArray);

  //  console.log(myArray.length);

  //  myArray.pop();

  //  console.log(myArray);

  //  console.log(myArray.length);

  // Splice is usually used to delete the data from array, 
  // but through it we can also change data and add data...with the use of index number of an array...

  //  let arRay = ['nintendo', 'playstation', 'xbox', 'octacuplus'];

  // console.log(arRay);

  // arRay.splice(0,1,'octacuplus');
  // arRay.splice(3,1,'nintendo');

  // console.log(arRay);

  // let glitter = "Please Enter A valid amount...";

  // document.getElementById('lrn').innerHTML = glitter;

  // following programme helps u to insert an array in an pre defined array (which is empty), and then helps u to change it....
  // {
  // let myArray =[];

  // console.log(myArray);
  // console.log(myArray.length);

  // myArray.push('Hi','Hello','Hey','Yo','Yolo','Sup','Wassup');

  // console.log(myArray);
  // console.log(myArray.length);

  // let xyz = 'Hey'
  // let Abc = 'Again'

  //   if(myArray.includes(xyz))
  //   {
  //     let dexno = myArray.indexOf(xyz);
  //     console.log(dexno);
  //     myArray.splice(dexno,1,Abc);
  //     myArray.join("|")
  //     console.log(myArray);
  //     console.log(myArray.length);
  //   }
  //   else 
  //   {
  //     console.log('please enter valid value');
  //   }
  // }

  // the following programme is about the map function... and what it does is it maps out the whole array's element
  // through which we ca change each element in an array collectively...



  // let output = myArray.map(Math.sqrt);

  // console.log(output);

  // function glitterOne(elem){
  //   return elem*2
  // };

  // let outPuT = myArray.map(glitterOne);

  // console.log(outPuT);

  // function glitterTwo(elem){
  //   return elem*elem
  // };

  // let oUtPuT = myArray.map(glitterTwo);

  // console.log(oUtPuT);

  // let myArray = [1,2,3,4,5,6,7,8,9,10];

  //  function glitter(elem){
  //    return elem+1
  //  };

  //  let outPut = myArray.map(glitter);

  //  console.log(outPut);

  // // xyz

  // const arr = [1,2,3,4,5,6,7,8,9,10];

  // console.log(arr.map((x)=> x+1));

  // following programmes filterates the whole array and only shows the elements which are even...

  // let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  // console.log(myArray.filter((x)=> x % 2));

  // following programme filtrates all the even element by taking out all the odd elements...

  // let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  // console.log(myArray.filter((x)=> x % 2 === 0));

  // following programme shows the range whic is smaller thn or equal to 7 and shows greater thn or equal to 16...

  // let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  // console.log(myArray.filter((x)=> x >= 16 ));

  // console.log(myArray.filter((x)=> x <= 7));

  // ===================================================================================================

  // let fullname = (x) => `${x.firstname} ${x.lastname}`;

  // let output = data.map(fullname);
  // // let ouTput = data.map((x)=> x.age + 1);
  // console.log(output);

  // let myArray = [{firstname:zyz}]


  //  let outPut = data.filter((x) => x.age <= 20).map(fullname);

  //  console.log(outPut);

  // {11-15 : 4, 13-17: 2, 16-20: 2, 20+ :1}

  /////////////////////////////////////////////////////////////////////////////////////



  //|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|

  // learning Strings....

  // mehods - construct string, slice, search, indexOf, lastIndeOf, substring, replace, split
  // charAt(*gives unicode....of character), charCodeAt(*gives unicode....of character), {access method [] provides proper acss with the help of index number....}

  //|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|

  // let indianTimeZone = new Date();
  // console.log(indianTimeZone);   

  // let indianTimeZone = new Date();
  // console.log(indianTimeZone);
  // let arr = 'this is "smthng" hi...';            

  // console.log(arr.replace('is','this'));

  // console.log(new Date().toLocaleDateString);
  // console.log(new Date().toLocaleTimeString);
  // console.log(new Date().toLocaleString);

  //|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|//|\\|//|\\//|\\|

  // let myName = document.querySelector('#xyz');
  // let myAge = document.querySelector('#ayz');

  // let showAge = () =>{
  //   myAge.innerHTML='Loading...';
  //   setTimeout(()=>{myAge.innerHTML='Darshan'},1000);
  // };

  //////////////////////////////////////////CALCULATOR/////////////////////////////////////////////////////////////////////////////////////////////

  // const add = (a,b) =>{
  //   return a+b;
  // }

  // const sub = (a,b) =>{
  //   return (a-b);
  // }

  // const dvsn = (a,b) =>{
  //   return a/b;
  // }

  // const mul = (a,b) =>{
  //   return a*b;
  // }

  // const calculator = (a,b,ops) =>{
  //   return ops(a,b);
  // }

  // console.log(calculator(valueOfA,valueOfB,operator));

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // function currying...
  // const currYing = (a) => (b) => (c) => (d) => console.log(a+b+c+d); 
  // currYing(10)(10)(10)(10);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // callback hell

  // setTimeout(() => {
  //   console.log('this is one');
  //   setTimeout(() => {
  //     console.log('this is one');
  //     setTimeout(() => {
  //       console.log('this is one');
  //       setTimeout(() => {
  //         console.log('this is one');
  //         setTimeout(() => {
  //           console.log('this is one');
  //           setTimeout(() => {
  //             console.log('this is one');
  //           }, 1000);
  //         }, 1000);
  //       }, 1000);
  //     }, 1000);
  //   }, 1000)
  // }, 1000);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // const [fname, setFname] = useState();
  // const [lname, setLname] = useState();
  // const [validone, setValidone] = useState('Enter Your First Name...');
  // const [validtwo, setValidtwo] = useState('Enter Your Last Name...');
  // const [output, setOutput] = useState();

  // const myData = [
  //   { Firstname: fname, Lastname: lname }
  // ];

  // function validEntry() {
  //   let entryAreValid = true;

  //   if (!fname) {
  //     setValidone('Please Enter First Name')
  //     return entryAreValid = false;
  //   }
  //   setValidone('');
  //   setValidtwo('');
  //   if (!lname) {
  //     setValidtwo('Please Enter Last Name')
  //     return entryAreValid = false;
  //   }
  //   setValidone('');
  //   setValidtwo('');
  //   return entryAreValid;
  // }

  // const showOnClick = (a) => {
  //   if (validEntry()) {
  //     setOutput(myData.map(x => `Name : ${x.Firstname} ${x.Lastname}`));
  //   };
  // }

  // const [cleo, setCleo] = useState('leo');

  // const myStyle = () => {
  //   setCleo('tleo');
  // }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // let star = "*";

  // for (let star = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }

  return (
    <>
      sdasffafa
    </>
  )
}
