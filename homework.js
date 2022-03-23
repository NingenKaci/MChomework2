//exercice 1//
person1=
{
 firstname:"abdelhak",
 age:19,
}
 
person2=
{
 firstname:"abdelhak",
 age:20,
}


function compare(obj1, obj2) {
    for (x in obj1) {
      if (obj1[x] != obj2[x]) {
        return false;
      }
    }
    return true;
  }

console.log (compare(person1, person2));



//Exercice 2//
arr1=[1,2,3,200];
arr2=[1,200,3,5,1,3];
arr3=[];

function min ( arr1 , arr2)
{
    if ( arr2.lenngth < arr1.length)
    {
       return arr2
    }
    else return arr1
}

function differance ( arr1 , arr2)
{
   for ( var i=0 ; i< min(arr1 , arr2).length ; i++)
   {
    for ( j=0 ; j<min(arr1 , arr2).length ; j++)
    {
        if ( arr1[i] == arr2[j] ) { arr3.push ( arr1[i]); }
    }
   }
       return arr3 ; 
}

console.log ( differance(arr1 , arr2)); 

