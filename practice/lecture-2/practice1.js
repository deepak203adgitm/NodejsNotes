function sumAll(arr) {
 let sum=0;
 let a = Math.max(arr[0],arr[1]);
 let b = Math.min(arr[0],arr[1])
  for(let i =b;i<=a;i++)
  {
    sum+=i;
    
  }
//console.log(sum);
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
//sumAll([4, 1]);