/*function mySite(a,b){
      a*b;
      return;
}
let y=mySite(4,3);*/
/*const myname = 'prem';
const birthyear= 2022;
const age =27;
const dob =birthyear-age;
console.log( `my name is ${myname}`);
console.log(`${dob}`);*/

/*let currentYear= 2022;
const x= function (birthyear){
    return   currentYear-birthyear;
}
 const age =x(1995); // function expression
 console.log(age);*/

 /* let currentyear= 2022;
 function calAge(birthyear){
    return currentyear-birthyear;
 }
 const age=calAge(1995);  // function declaration
 console.log( "my age is "+age);
 let currentyear= 2022;
 const calAge = birthyear =>   currentyear-birthyear;
  const age=calAge(1995);  //  Arrow function 
 console.log( "my age is "+age);

 function cutFruit(fruit){
    return fruit *4;
 }

 const  juiceProcessor = function(apple , orange){
      const applePieces = cutFruit(apple);
      const  orangePieces = cutFruit(orange);

 }*/
/* const temperature=[3,-2,-6,-1,'error',9,18,21,9,15,5];
 let max=0;
 let min =0;
 let temp =0;
  for(let i=0;i<temperature.length;i++){
    for(let j=i+1;j<temperature.length;j++){
        if(temperature[i]>temperature[j]){
            temp=temperature[i];
            temperature[i]=temperature[j];
            temperature[j]=temp;
        }
    }
  }
 for(let i=0;i<temperature.length;i++){
        console.log(temperature[i]);
    }
const remove= temperature.splice(4,1);
console.log(remove);
console.log(temperature);
const amplitude=  (temperature.length-1) - (temperature[0]);
    console.log(amplitude);*/
    let a =10;
    let b=20;
    let c=0;
    for (let i =1;i<5;i++){
          c=a;
          a=b;
          b=c;

          console.log(a,b);
    }