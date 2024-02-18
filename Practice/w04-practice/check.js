

const DAYS = 6;
const LIMIT = 30;

let studentReport = [11, 42, 33, 64, 29, 37, 44];

for ( let i=0; i < studentReport.length; i++)//indexing, an looping though the length of the array.
{
    if (studentReport[i] < LIMIT)
    {
      
        console.log(studentReport[i]);
    }
}

studentReport.forEach(function(item)// foreach loop
{
   if (item < LIMIT)
   {
     console.log(item);
   }
})

let i = 0;
while (i < studentReport.length)
{
    if (studentReport[i] < LIMIT)
    {
       console.log(studentReport[i]);
    }
    i++;
}

for (let i in studentReport)
{
    if (studentReport[i] < LIMIT)
    {
        console.log(studentReport[i]);
    }
}