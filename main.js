//array.join(separator)
const products=["Pen","Pencil","Eraser","Box"];
console.log(products);
console.log(products.join()); //default , sperator
console.log(products.join("|"));// | sperator

//array.reverse
const n=[1,2,3,4,5];
console.log("Before reverse" ,n);
n.reverse();
console.log('After reverse', n)

const x={0:10,1:20,2:30, lenght:3};
console.log(x);

//Array.prototype.reverse.call(x);
//console.log(x);

//push
//Add lost elet at end
let y=[1,2,3,4,5]
console.log(y);
y.push(50,60,70,80,90,100);
console.log(y);

let fruits=["apple","orange"];
console.log(fruits);
fruits.push("banana","grapes");
console.log(fruits);

//merge 2 items
let birds=["crow","barrot","owl"];
let animals=["dog","lion","elephant"];
let food=["non-veg","veg"]
birds.push(...animals,food); //... mean spirit operator
console.log(birds);

//unshift
//Add First elet at start
let friends=["krish","mathi","ananthi","mala","madhu","manju"];
console.log(friends);
let len=friends.unshift("karthi","malini");
console.log(len);
console.log(friends);

//pop() 
//remove lost elet at end
let user=["ram","kumar","kabil","sam"];
console.log(user);
console.log(user.pop());
console.log(user);
console.log(user.pop());
console.log(user);
user.pop();
console.log(user);

//shift()
//remove lost elet at start
let users=["krish","veni","mathi","sum"];
console.log("Before shift", users);
let element=users.shift();
console.log("After shift", users);
console.log("Removed element :",element);
users.shift();
console.log("After shift", users);
users.shift();
console.log("After shift", users);
users.shift();
console.log("After shift", users);

//map()
//map(value,index,array)---->parameter--values pass

let numbers=[1,2,3,4,5];
let sqrt=numbers.map((value)=>{
    return Math.sqrt(value).toFixed(2);
});
console.table(sqrt); 

//slice()
//slice(start,end)

let val=[1,2,3,4,5,6,7,8,9,10];
console.log(val);
console.log(val.slice());
console.log(val.slice(5));
console.log(val.slice(4,7));

//splice()
//removed-elet:splice(start,(remove elet)lenght,new elt)
let n1=[1,2,3,4,5,6,7,8,9,10];
console.log(n1);
let removed_elets=n1.splice(8);
console.log(removed_elets);
console.log(n1);

let n2=[1,2,3,4,5,6,7,8,9,10];
console.log(n2);
let remove_elets=n2.splice(3,6);
console.log(remove_elets);
console.log(n2);

let n3=[1,2,3,4,5,6,7,8,9,10];
console.log(n3);
let remove_elet=n3.splice(3,6,10,20,30,40,50,60);
console.log(remove_elet);
console.log(n3);

//concat
 const x1=[10,20,30,40];
 const x2=[50,60,70];
 const x3=[80,90,100];

 //let x4=x1.concat(x2);
 //console.log(x4);

 let x4=x1.concat(x2,x3,110,120,["a","b","c","d"]);
 console.table(x4);

 //sort()
 const family=["dad","mom","sis","bro"];
 console.log(family);
 console.log(family.sort());

 let f=[10,105,78,5,40,28,50];
 console.log(f);
 console.log(f.sort());
 f.sort((a,b)=>{
    return a-b;
 });
 console.log(f);
 f.sort((a,b)=>{
    return b-a;
 });
 console.log(f);

 //fill
 //fill(value,start,end)

 let w=[1,2,3,4,5,6];
 console.log("Before fill " +w);
 w.fill(3);
 console.log("After fill " +w);
 w.fill(80,3,5);
 console.log("After fill " +w);

 //foreach()
 //foreach(value,index,array)

 let v=[1,2,3,4,5,6,7,8,9];
 v.forEach((value)=>{
    console.log(value);
 });

 v.forEach((value,index)=>{
    console.log("index: " +index , "value: " +value);
 });

 //Indexof
 let fname="krishna's";
 let lname="veni";
 bio=fname.indexOf("s");
 console.log("indexof s : " +bio);

 //lastIndexof
 bio=fname.lastIndexOf("s");
 console.log("lastIndexof s : " +bio);

 //filter()
 const no=[1,2,3,4,5];
 let evennum=no.filter(function(value)
 {
    return value%2==0;
 });
 let oddnum=no.filter(function(value)
 {
    return value%2==1;
 });
 console.log("evennum :" +evennum)
 console.log("oddnum :" +oddnum)

//find()
const items=[
    {no: 1, item:"chips", cost:45},
    {no: 2, item:"cookie", cost:80},
    {no: 3, item:"juice", cost:20},
];
let affordable=items.find(function(value){
    return value.cost<50;
});
console.log(affordable);

//findIndex
let affordable_findIndex=items.findIndex(function(value){
    return value.cost>50;
});
console.log("findIndex : " +affordable_findIndex);

//tostring()
function display(){
    var alpha="abcd"
    console.log(alpha);
}
console.log(display.toString());

//reduce()
const fees=[240, 675,45,98,764];
let totalfees=fees.reduce(function(previousval,currentval){
    return previousval+currentval;
});
console.log("totalfees : " +totalfees);