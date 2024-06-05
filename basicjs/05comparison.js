//comparison output always in boolean
//but
console.log("2">1)
console.log("02">1)
//give output true
//different typeof comparison always not give the predictable result
console.log(null>0)//output=>false
console.log(null==0)//output=>false
console.log(null>=0)//output=>true
/*The reason is that an equality check == and comparisons > < >= <= work differently
comparisons convert null to a number, treating it as 0
That's why null>=0 and null>1 is false*/

//strict check=>value and data type both check
//===