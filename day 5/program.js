let n=prompt("enter a number")
arr=[];
for(i=0;i<n;i++)
{
   arr[i]=i+1
}
console.log(arr);

odd = arr.filter(element=> element%2==1);
console.log(odd);

cubes = odd.map(element => element ** 3);
console.log(cubes);





