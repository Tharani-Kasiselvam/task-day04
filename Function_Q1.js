//Do below programs in Anonumous function & IIFE
//1a--Print Odd numbers in array - IIFE
(function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0)
      console.log(arr[i])
  }
})([2,3,6,8,7,9,11])

//1b. convert all the strings to title caps in a string array - Anonymous func
var strArr = ["hello",'welcome']
var result = function(arr){
 for(var i=0;i<arr.length;i++){
  arr[i] = arr[i].toUpperCase()
 }
 return arr
}
console.log(result(strArr))

//1c.sum of all numbers in an array - IIFE
(function(arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
     sum = sum+arr[i] 
    }
    console.log(sum)
  })([1,2,3,4,5])

//1d.Return all Prime numbers in an array -- Anonymous
var numArr = [2,3,5,4,6,8,11]
var prime = []
var result = function(arr){
  for(var i=0;i<arr.length;i++){
    var counter =0
    if(arr[i]!=0){
     for (var j=1;j<=arr[i];j++){
        if(arr[i]%j==0)
       counter++
      }
    }
    if(counter==2)
    prime.push(arr[i])
  }
  return prime
}
console.log(result(numArr))

//1e.Return all palindromes in an array -- Anonymous
var strArr = ["mam","hello","mom","delta","madam"]
// var strArr = ["mam","hello"]
var palin = []

var res = function(arr){
 for(var i=0;i<arr.length;i++){
   var str = arr[i].split('').reverse().join('')
   if(str == arr[i])
    palin.push(str)
 }
 return palin
}
console.log(res(strArr))

//1f. return median of two sorted arrays of the same size -- Anonymous
var a = [ 1, 12, 15, 26, 38]
var b = [2, 13, 17, 30,31]

var res = function(arr1,arr2){
  var arr3 = arr1.concat(arr2)
  console.log(arr3)
  arr3.sort((a, b) => a - b)
  console.log(arr3)
  
  var n = arr3.length
  var m = parseInt(n/2)
  if(n%2==0)
    var median = (arr3[m-1] + arr3[m])/2
  else
    var median = arr3[m] 
  return median
}
console.log(res(a,b))

//1g.Remove duplicates from an array - IIFE
(function(arr){
    var uniq = []
    for(var i=0;i<arr.length;i++){
      if(arr.indexOf(arr[i])==i)
      {
        uniq.push(arr[i])
      }
    }
    console.log(uniq)
  })([3,3,4,4,5,6,7,7,8])

  //1h.Rotate an array by k times
var k = 2
var numArr = [2,4,6,8]
var result = function(arr,num){
  for(var i=0;i<num;i++){
    arr.push(arr.shift())
  }
  return arr
}
console.log(result(numArr,k))
