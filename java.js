// //1) Is javascript possible to convert implicit conversion?
// function add(a,b)
// {
// return a+b
// }
// console.log(add(10,20))//30
// // console.log(add(10))//Nan actually but i said 10

//  let num=10
// function changenum()
// {
// const num=20
// return num
// }
// console.log(num)//10
// console.log(changenum())//20
// console.log(num)//20 but i said 10 only

const n= 10
function changenum(n)
{
    const n=20
    return n
}
console.log(n)