//Do below programs in Arrow function
//2a--Print Odd numbers in array
var arr = [2,3,6,8,7,9,11]
var result = (num) => {if(num%2!=0)
   console.log(num)
}
for(var i=0;i<arr.length;i++){
    result(arr[i])
}

//2b--convert all the strings to title caps in a string array

var strArr = ["hello",'welcome']
var result = (str) => console.log(str.toUpperCase())
for(var i=0;i<strArr.length;i++){
  result(strArr[i])
}

//2c--sum of all numbers in an array
var arr = [1,2,3,4,5]
var sum=0
var result=(str)=>sum=sum+str
  for(var i=0;i<arr.length;i++){
   result(arr[i])
  }
console.log(sum)

//2d--Return all Prime numbers in an array
var numArr = [2,3,5,4,6,8,11]
var prime = []
var result = (num)=>{
   for (var j=1;j<=num;j++){
        if(num%j==0)
           counter++
    }
}
  for(var i=0;i<numArr.length;i++){
    var counter =0
    if(numArr[i]!=0){
      result(numArr[i])
  }
  if(counter==2)
    prime.push(numArr[i])
  }
  console.log(prime)

//2e--Return all palindromes in an array
var arr = ["mam","hello","mom","delta","madam"]
// var strArr = ["mam","hello"]
var palin = []
var res = (val)=>{
  var str = val.split('').reverse().join('')
   if(str == val)
    palin.push(str)
}
for(var i=0;i<arr.length;i++){
   res(arr[i])
}
console.log(palin)
