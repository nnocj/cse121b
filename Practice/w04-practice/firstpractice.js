

//Do...while
// let a= 0; 
// do
// {  
//     a+=1

//     console.log(`It's ${a}.`);
// }

// while (a < 5)



// find employee who earn more than 2000.
const employees = [
    {
        id: 101,
        name: 'Alex',
        sal: 10000
    },
    {
        id: 102,
        name: 'Clark',
        sal: 23000
    },
    {
        id: 103,
        name: 'John',
        sal: 22000
    },
    {
        id: 104,
        name: 'Tony',
        sal: 20000
    }
];
// 1 way to write this. This just bring out the value.
const empSalary = employees.map((emp)=> emp.sal);
const filteredSalary = empSalary.find((sal)=> sal >= 20000);
console.log(filteredSalary);

// while this actually bring sthe whole value out.
// Another more simplier way to write it. So this wil bring all the items beloging to this group out.
const filtrdSal = employees.find(emp=> emp.sal >= 20000);
console.log(filtrdSal);

// using the filter 
const ftrdsal = employees.filter(emp => emp.sal >= 20000);
console.log(ftrdsal);


