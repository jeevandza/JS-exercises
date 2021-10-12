

//TO CHECK GIVEN NUMBER IS EQUAL TO 100 

/*
const isEqualTo100 = (a, b ) => { return a === 100 || b === 100 || (a+b) ===100 }


console.log(isEqualTo100(100,0));
console.log(isEqualTo100(10,85));
console.log(isEqualTo100(50,50));
*/
 



//TO FIND THE LAST INDEX OF A GIVEN STRING 

/*
const getFileExtention = (str) => {  return str.slice(str.lastIndexOf("."));

}

console.log(getFileExtention("index.html"));
*/


//String.fromCharCode 
//CharCodeAt

/*
const moveCharForward = ( str ) =>{
    return(
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) +1))
    .join('')
    )
}


console.log(moveCharForward('abcd'))
*/


// TO GET DATE  
/*
const date = new Date ()

console.log(date)
*/

/*
const formatDate = (date = new Date ()) =>{
    const days = date.getDate();
    const month = date.getMonth() ;
    const year = date.getFullYear();

    return `${days}/${month}/${year}`;
}

console.log(formatDate());
*/


//ADDING STRING INFRONT OF GIVEN STRING 

/*
const addNew = (str) =>{
    return `New! ${str}`
}

console.log(addNew('ggwp'))
*/


/*
const makeNewString = (str)=>{
   return str.length < 3 ? str : str.slice(0, 3) + str.slice(0, -3)
}

console.log(makeNewString("helloworld"))
console.log(makeNewString("abcabc"))
console.log(makeNewString("abcdefg"))
*/


//TO USE OF TYPEOF OPERATOR 
/*
let abc = null;
console.log(typeof(abc))
*/


//EXTRACT FIRST HALF OF STRING OF EVEN LENGTH

/*
const firstHalf = (str) => str.slice(0, str.length/2) 

console.log(firstHalf("howareyou"))
console.log(firstHalf("abcdefghijl"))
*/


//CONCATENATE TWO STRING EXPECT THEIR FIRST LETTER 

/*
const concateStr = (str1, str2) =>{
    return str1.slice(1) + str2.slice(1)
}

console.log(concateStr("hi", "hello"))

console.log(concateStr("call", "back" ))
*/

//GIVEN TWO VALUES FIND THE NEAREST NUMBER FOR 90 
/*
const findNum = (a, b) =>(100 -a) < (100-b) ? a : b;

console.log(findNum(50,10));
console.log(findNum(50,85));
*/


//CHECK GIVEN STRING CONTAINS 2 TO 4 OCCURANCE OF SPECIED CHARACTER 

/*
const countChars = (str, char)=>{
    return str.split('').filter(ch => ch === char).length;
}

const contains2To4 = (str, char) =>{
  return  countChars(str, char) >= 2 && countChars(str, char) <=4;
}


console.log(contains2To4("helloooo", "o"))
console.log(contains2To4("1244566", "6"))
console.log(contains2To4("AVSVS", "o" && "h"))
*/


//FIND THE NUMBER OF EVEN DIGITS IN AN ARRAY OF INTIGERS  
/*
let array = [1, 2, 3, 4, 5, 6, 7]

const findEvenNo = (array) =>  array.filter(num => num % 2 ===0)

// const findEvenNo = (array) =>  array.filter(num => num % 2 ===0).length 

console.log(findEvenNo(array));
*/


//TO FIND THE NUMBER OF EVEN VALUES UP TO GIVEN NUMBER

/*
const countEvenNo = (arr) =>{
  return  arr.filter( num=> num % 2 === 0).length
}


let returnArray = [];

const arrayOfEvenNo = (num)=>{

    for(let i = 0; i <=num; i++){
        returnArray.push(i)
    }
    return  returnArray;
}

// console.log(arrayOfEvenNo(10))

console.log(countEvenNo(arrayOfEvenNo(10)))
*/


//CHECK WHETHER A GIVEN ARRAY OF INTEGERS IS SORTED IN ASCENDING ORDER.

/*
const isAscding = (arr) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] < arr[i]) {
            return false
        }
    }
    return true;
}

console.log(isAscding([1,2,20,6,7,9]))
console.log(isAscding([5,500,574,58,100]))
console.log(isAscding([1,5,10,15,25,45]))
*/


//TO FIND LARGEST EVEN NUMBER FROM AN ARRAY.
/*
const largestEvenNo = (arr) =>  Math.max(...arr.filter(num => num % 2 ===0))

console.log(largestEvenNo([10,55,600,14]))
console.log(largestEvenNo([55,101,98,743, 355]))
*/


//REPLACE THE FIRST DIGIT IN A STRING WITH $ CHAR  

/*
const replaceFristDigit = (str) => str.replace(/\d/, '$')


console.log(replaceFristDigit('abccd7r'));
console.log(replaceFristDigit('1tfsdf'));
console.log(replaceFristDigit('12554'));
*/


//GIVEN YEAR CHECK IF IT IS A LEAP YEAR 
/*
const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2016));
console.log(isLeapYear(2018));
console.log(isLeapYear(2020));
*/


//COMPARE TWO OBJECT THAT CONTAINS SAME ATLEAST ONE PROPERTY AND VALUE. 

/*
const ObjA = { a:1, b:0, c:0}
const ObjB = { a:1, b:1, c:5}



  const isObjKeysEql = (a,b)=> 
        Object.keys(a).every(key => b[key]);

  console.log(isObjKeysEql(ObjA,ObjB))
 */


  /* Convert a comam-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.

  Example
  abc, def, ghi
  jkl, mno, pqr
  stu, vwx, yza
*/


/*
const parseCSV = (csvString) =>
    csvString.split('\n').map(row => row.split(','));


const str = `abc,def, ghi  
jkl, mno, pqr
 stu, vwx, yza`

console.log(parseCSV(str))


//TO GENERATE A RANDOM HEXADECIMAL COLOR CODE 

/*
const getRandomHexNo = () => Math.floor(Math.random() *16).toString(16);

console.log(getRandomHexNo())
console.log(getRandomHexNo())
console.log(getRandomHexNo())



const getRandomHexColor = () => '#' + Array.from({length: 6}).map(getRandomHexNo).join('')


console.log(getRandomHexColor());
*/

// FUNCTION RETURNS TRUED IF THE PROVIDED PREDICARE FUNCTION RETURNS TRUE FOR ALL ELEMENTS IN A COLLECTION, FALSE OTHERWISE

/*
const isEveryEle = (arr,fn)=>{
    for(let i = 0; i< arr.length; i++){
        if(!fn(arr[i]) ){
            return false;
        }
    }
    return true;
}


console.log(isEveryEle([1,2,3,4,5], (x) => x > 0 ));
console.log(isEveryEle([1,2,3,4,5], (x) => x > 2 ));

console.log(([1,2,3,4,5].every((x) => x > 0.1)))
*/

//RETURN A PASSED STRING WITH LETTER IN ALPHABETICAL ORDER  

/*
let giveStr = "webmaster"

const newString = (giveStr) => 
giveStr.split('').sort((a,b)=> a > b ? 1 : -1).join('')



console.log(newString(giveStr));
*/


/*JS FUNCTION THAT ACCEPTS A STRING AS A PARAMETER AND COUNTS THE NUMBER.
OF VOWELS ITHIN THE STRING */

/*
let vowels =  ['a', 'e', 'i', 'o', 'u']

const countVowels = (str, vowels) =>
         str
        .split('')
        .filter(s => vowels.indexOf (s) > -1)
        .length



console.log(countVowels('abcd', vowels))


const countLetters = (str, letters=['a', 'e', 'i', 'o', 'u']) =>
    str
    .split('')
    .filter(s=> letters.indexOf(s) > -1 )
    .length;


console.log(countLetters('godspeed'))
*/



/*JS FUNCTION TO CONVERT AN AMOUNT TO COINS INPUT coins 25,10,5,2,1  
*/

/*
let coins = [25, 10, 5, 2, 1]

let amount = [];

const amountCoins = (amount, coins) =>{
    if(amount === 0){
        return [];
    }else{
        if(amount >= coins[0]){
            left = (amount - coins[0])
            return [coins[0]].concat(amountCoins(left, coins));
        }else{
            coins.shift();
            return amountCoins(amount, coins)
        } 
    }
}

 console.log(amountCoins(46, coins)) 
 */

/*
 let totalCoins = [];

const myCoins = (money, coins =[25, 10, 5, 2, 1]) =>{
    for(let i = 0; i < coins.length; i+=1){
        const thisCoinNum = Math.floor(money / coins[i])
        for( let j = 0; j< thisCoinNum; j+=1){
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins;
}

console.log(myCoins(45))
console.log(myCoins(100))
*/



/*JS FUNCTION TO EXTRACT UNIQUE CHARACTERS FROM A STRING Js */

/*
const getUniqueChar = (str) =>
    str.split('')
    .filter( 
        (item, index, arr) => arr.slice(index + 1).indexOf(item) === -1) 

            console.time("started")
            console.log(getUniqueChar('%%##$%%'))
            console.timeEnd("started")
        */
        


/*
const getUniqueChar = (str) => [...new Set(str.split(''))];
   
console.log(getUniqueChar("aaaabbbbcccc"))
*/



//FIND THE FIRST NOT REPEATED CHARACTER 

/*
const notRepatednumner = (str) =>{
        // console.time('started')
       return str.split('').filter((item, index , arr)=>
              arr.filter(arrItem=> arrItem === item).length === 1);
            // console.timeEnd('started')
    
}


console.log(notRepatednumner('aaaavvcssf'))
*/





/*
GIVEN N TAKE THE SUM OF THE DIGITS OF N
IF THAT VALUE HAS MORE THAN ONE DIGIT, CONTINUE REDUCING IN THIS WAY UNTIL A SINGLE DIGIT NUMBER IS PRODUCED 
THE INPUT WILL BE A NON-NEGETIVE INTIGER
*/

/*
const digital_root = (n) =>{
    let digits = n.toString().split("").map(Number);
    let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += digits[i];
        }
            const sumString = sum.toString();
            if (sumString.length > 1) {
             let sumDigits = sumString.split("").map(Number);
             let firstSumDigit = sumDigits.slice(0);
             let lastSumDigit = sumDigits.slice(-1);
             return firstSumDigit[0] + lastSumDigit[0];
             
        } else {
            return sum;
    }
}

console.log(digital_root(98))
*/


/*
const digital_root =(n) =>{
        let result = 0;
        // console.time('started')
        n.toString().split('').map (n => {
        result += Number(n)
        // console.timeEnd('started')
        })
     return result > 9 ? digital_root(result) : result;
  
    }

console.log(digital_root(155444))
*/




//ARRY METHODS
/*
const people = [
    { firstName:"Sam", lastName:"Buger", DOB:'07/07/1975', department:"Development", salary:"45000"},
    { firstName:"Rajesh", lastName:"Kumar", DOB:'25/06/1986', department:"HR", salary:"30000"},
    { firstName:"Jhon", lastName:"lora", DOB:'2/05/1990', department:"General Manager", salary:"10000"},
    { firstName:"Nayak", lastName:null, DOB:'31/01/2000', department:"Sales", salary:"45000"},
    { firstName:"Steev", lastName:"rogger", DOB:'19/11/2005', department:"sales", salary:"90000"},
    { firstName:"Nithesh", lastName:"Kumar", DOB:'11/08/2010', department:"Marketting", salary:"150000"},
    { firstName:"Sumiya", lastName:"Mauri", DOB:'05/05/1988', department:"DOP", salary:"450000"},
    { firstName:"Gan", lastName:"Wagger", DOB:'07/07/2010', department:"Development", salary:"90000"},
]

console.log(people)
*/


//TO FIND AVERAGE SALARY OF EMPLYOEE
/*
const averageSalary = (people)=>{
       return people.reduce((accumulator, person) => accumulator + parseInt(person.salary), 0)/people.length;
}

console.log(averageSalary(people));
*/


// THE PEOPLE THAT ARE CURRENTLY OLDER THAN 30
/*
const date = new Date()


const ageAbove30 = (people) =>{
    return people.filter(person => date.getFullYear() -(new Date(person.DOB).getFullYear()))
}

console.log(ageAbove30(people))
*/

//GET A LIST OF PEOPLE'S FULL NAME  (FIRST NAME AND LAST NAME )
/*
const getFullName = (people) =>{
    return people.map(person => `${person.firstName}  ${person.lastName}`)
}

console.log(getFullName(people))
*/
/*
const getFullName = (people) =>{
    return people.map(({firstName, lastName}) => `${firstName} ${lastName}`)
}

console.log(getFullName(people))
*/

//TO CREATE NEW ENTRY IN AN ARRAY COMBINING TWO ITEMS FROM THE ARRAY
/*
const getFullName = (people) =>{
    return people.map(person => ({...person, fullName:  `${person.firstName} ${person.lastName}`}))
}

console.log(getFullName(people))
*/

//GET A LIST OF PEOPLE  IN THE ARRAY ORDERED FROM YOUNGEST TO OLDERS


/*
const getOrberByAge = (people) =>{
    return people.sort((person1, person2)=>new Date(person2.DOB).getFullYear() - new Date(person1.DOB).getFullYear())
}

console.log(getOrberByAge(people))
*/

//HOW MANY PEOPLE IN THE EACH DEPARTMENT

/*
const peopleByDepartment = (people) =>{
    return people.reduce((accumulator, person)=> ({...accumulator, [person.department]: accumulator[person.department] +1 } || 1 ), {} )
}

console.log(peopleByDepartment(people))
*/

//ARRAY METHODS 02
/*
const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

console.log(orders)
*/


//1) Get a list of the orders for the customer with the ID 234 that have not been delivered.

/*
const getCustomer = (orders) =>{
    return orders.filter(order => order.customerId === '234' && !order.delivered)
}

console.log(getCustomer(orders))
*/

// 2) Create a new property on each order with the total price of items ordered.

/*
const totalPrice = (orders) =>{
   return orders.map(order => ({ ...order, totalPrice: order.items.reduce((acc, item) => acc + item.price, 0)}))
}

console.log(totalPrice(orders))
*/

//3) Have all the orders been delivered?

/*
const getOrderDetails = (orders) =>{
    return orders.filter(order => order.delivered === false)
}

console.log(getOrderDetails(orders))
*/

/*
const getOrderDetails = (orders) =>{
    return orders.every(order => order.delivered)
}

console.log(getOrderDetails(orders))
*/

// 4) Has the customer with ID '123' made any orders?
/*
const customerOrder = (orders) =>{
    return orders.filter(order => order.customerId === "123")
}

console.log(customerOrder(orders))
*/
/*
const customerOrder = (orders) =>{
    return orders.some(order => order.customerId === '123')
}

console.log(customerOrder(orders))
*/

// 5) Have any products with an id of 123 been sold?
/*
const anyProducts = (orders) =>{
    return orders.some(order => order.items.find(order => order.productId = '123'))
}

console.log(anyProducts(orders))
*/
/*
const anyProducts = () =>{
    return orders.reduce((acc, order)=> acc + order.items.reduce((acc, item) => acc + (item.productId === '123'), 0), 0)
}

console.log(anyProducts(orders))
*/
/*
const anyProducts = (orders) =>{
    return orders.some(order=> order.items.some(item => item.productId === '123'));
}

console.log(anyProducts(orders))
*/


//ARRAY METHOND 03
/*
const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];



console.log(users, comments)
*/

// 1) What is Madison Marshall's user id?
/*
const getMadisonsId = (users) =>{
    return users.find(user => user.firstName === "Madison" && user.lastName === "Marshall")
}

console.log(getMadisonsId(users))
*/


// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

/*
const getFirstComment = (users) =>{
    return users.find(user => user.id === comments[0].userId)
}

console.log(getFirstComment(users))
*/

// 3) Which user commented 'OK great thanks'?

/*
const userComment = (users, comments) =>{
    return users.find(user => user.id === comments.find(comment => comment.text === 'OK great thanks').userId);
}
console.log(userComment(users, comments))
*/

// 4) Add the user's first and last name to each comment in the comments array

/*
const findUserBasedonUSerID = (id) => users.find((user) => user.id === id);
    const addFirstLastNameToComments = comments.map((comment) => {
    let user = findUserBasedonUSerID(comment.userId);
    return { ...comment, firstName: user.firstName, lastName: user.lastName };
});

console.log("Modified Commnts array with first and last name --> ", addFirstLastNameToComments);
*/

/*
const addName = (id) => users.find(user=> user.id === id);
    const joinNameToComments = comments.map((comment) =>{
        let user = addName(comment.userId);
        return {...comment, firstName: user.firstName, lastName: user.lastName }
    })


console.log('Modified comment array', joinNameToComments)
*/


// 5) Get a list of the users who haven't commented

/*
const userWithNoComment = (userId) => comments.find((comment) => comment.userId === userId);


const usersWhoNotCommented = users.filter((user) => !userWithNoComment(user.id));


console.log("Users wo not commented -->", usersWhoNotCommented);
*/


//ARRAY METHOD 04
/*
const users = [{
    id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
    email: "tcasaletto0@soundcloud.com",
    ip_address: "53.215.156.73"
  }, 
  {
    id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
    email: "nmoffett1@paginegialle.it",
    ip_address: "34.81.219.4"
  },
   {
    id: "1019b52c-db9d-45a2-975f-404455925a6a",
    email: "rcrampin2@yale.edu",
    ip_address: "65.181.114.151"
  },
   {
    id: "e8637c3b-645d-4742-a463-d2006742606f",
    email: "ddreinan3@smugmug.com",
    ip_address: "136.171.217.116"
  }, 
  {
    id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
    email: "gdorkin4@taobao.com",
    ip_address: "220.228.4.97"
  },
   {
    id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
    email: "vhucquart5@typepad.com",
    ip_address: "101.212.0.49"
  },
   {
    id: "74120248-03b5-4888-84c0-d1a459c6273b",
    email: "vsircombe6@marriott.com",
    ip_address: "28.180.205.167"
  },
   {
    id: "412a0669-7171-48b4-95eb-e898993ec1dc",
    email: "kdesouza7@t.co",
    ip_address: "61.44.195.62"
  },
   {
    id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
    email: "sbehnke8@booking.com",
    ip_address: "1.176.238.27"
  },
   {
    id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
    email: "clindsell9@nymag.com",
    ip_address: "44.37.119.76"
  }
];
*/



// 1) Check whether every email address in the list of users is valid (get a true or false value)

/*
const checkEmail = (users) =>{
    return users.every( ({ email }) => /[^@]+@[^\.]+\..+/.test(email))
}

console.log(checkEmail(users))
*/

// 2) Find out how many users have an IP address in a Class A network

/*
const usersIp = (users) =>{
    return users.filter(({ip_address})=> ip_address.split('.') [0] <128).length;
}

console.log(usersIp(users))
*/

// 3) Find the position in the array of the first  user object that has a Class B IP address

/*
const getClassBIp = (users) =>{
    return users.filter(({ip_address}) =>{
        const firstOctect = ip_address.split('.') [0];
        return firstOctect >= 128 && firstOctect <192;
    } )
}

console.log(getClassBIp(users))
*/

// 4) Find the user object that has the 'soundcloud' email address
 
/*
const getUser = (users) =>{
    return users.find(({email})=> email.includes('soundcloud'))
}

console.log(getUser(users))
*/

//5) Replace all the items in the array with a string value of 'deleted'
/*
const fillDelete = (users) =>{
    return users.fill("deleted")
}

console.log(fillDelete(users))
*/


//ARRAY METHOD 05
/*
const accounts = [{
    _id: "5e56d5f5c00d45b8f1125ef4",
    index: 0,
    guid: "955310d3-45df-47e7-bc9c-92504d5e92d2",
    isActive: true,
    balance: "$3,926",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    name: "George Bond",
    gender: "male",
    company: "GEEKOL",
    email: "georgebond@geekol.com",
    phone: "+1 (862) 591-2584",
    address: "677 Rost Place, Brandermill, Virgin Islands, 854",
    about: "Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.",
    registered: "2014-05-31T09:59:01 -01:00",
    latitude: -30.600915,
    longitude: -83.795214,
    tags: ["nostrud", "aliquip", "est", "laboris", "voluptate", "do", "dolor", ["deserunt", "ipsum"], ["consectetur", "quis", "commodo"]],
    friends: [ {id: 0, name: "Alisa Ford"}, {id: 1, name: "Hess Howell"}, {id: 2, name: "Gwendolyn Hendrix"} ],
    greeting: "Hello, eorge Bond! You have 2 unread messages.",
    favoriteFruit: "banGana",
},
{
    _id: "5e56d5f51837c78c32ed16ef",
    index: 1,
    guid: "416d3864-dc91-45e3-817c-07562b04b512",
    isActive: false,
    balance: "$1,273",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Fay Carlson",
    gender: "female",
    company: "SIGNIDYNE",
    email: "faycarlson@signidyne.com",
    phone: "+1 (922) 529-2437",
    address: "786 Belvidere Street, Carbonville, South Dakota, 3020",
    about: "Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.",
    registered: "2017-04-18T02:00:02 -01:00",
    latitude: 74.274128,
    longitude: -119.604152,
    tags: ["et", "ut", "mollit", "occaecat", "ipsum", "mollit", "pariatur"],
    friends: [{id: 0, name: "Miranda Little"}, {id: 1, name: "Ellen Burks"}, {id: 2, name: "Shanna Logan"}],
    greeting: "Hello, Fay Carlson! You have 10 unread messages.",
    favoriteFruit: "strawberry",
},
{
    _id: "5e56d5f54b9a9491ba37fec9",
    index: 2,
    guid: "46839c30-0b7e-4009-98f1-9b8d770a0c88",
    isActive: false,
    balance: "$3,455",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "French Bennett",
    gender: "male",
    company: "PASTURIA",
    email: "frenchbennett@pasturia.com",
    phone: "+1 (883) 501-3963",
    address: "856 Hemlock Street, Alfarata, Nevada, 5261",
    about: "Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.",
    registered: "2015-04-16T11:53:33 -01:00",
    latitude: 85.491905,
    longitude: 90.342252,
    tags: ["laboris", "reprehenderit", "est", "in", "duis", "voluptate", "non"],
    friends: [{id: 0, name: "Mayer Sullivan"}, {id: 1, name: "Wiggins Hudson"}, {id: 2, name: "Jacqueline Gibbs"}],
    greeting: "Hello, French Bennett! You have 10 unread messages.",
    favoriteFruit: "apple",
},
{
    _id: "5e56d5f55dd72bb06144c70c",
    index: 3,
    guid: "52b94117-bd93-4d8f-b8e3-f2fd1c3988fc",
    isActive: false,
    balance: "$1,733",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "Shannon Mitchell",
    gender: "male",
    company: "DECRATEX",
    email: "shannonmitchell@decratex.com",
    phone: "+1 (876) 447-3381",
    address: "870 Tillary Street, Aurora, Vermont, 8055",
    about: "Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.",
    registered: "2014-01-29T04:55:04 -00:00",
    latitude: 77.845921,
    longitude: -137.754911,
    tags: ["consequat", "non", "dolore", "cupidatat", "irure", "ipsum", "quis"],
    friends: [{id: 0, name: "Isabelle Luna"}, {id: 1, name: "Marissa Beach"}, {id: 2, name: "Sarah Simmons"}],
    greeting: "Hello, Shannon Mitchell! You have 4 unread messages.",
    favoriteFruit: "banana",
},
{
    _id: "5e56d5f5bb33b3df103cbfb9",
    index: 4,
    guid: "2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f",
    isActive: true,
    balance: "$1,839",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: "Johns Hooper",
    gender: "male",
    company: "ZENTHALL",
    email: "johnshooper@zenthall.com",
    phone: "+1 (868) 432-2105",
    address: "446 Emmons Avenue, Tyro, South Carolina, 3627",
    about: "Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.",
    registered: "2017-09-06T09:24:11 -01:00",
    latitude: -33.444624,
    longitude: 99.697197,
    tags: ["et", "minim", "sunt", "irure", "et", "esse", "consectetur"],
    friends: [{id: 0, name: "Cynthia Hays"}, {id: 1, name: "Estela Walton"}, {id: 2, name: "Christy Ball"}],
    greeting: "Hello, Johns Hooper! You have 1 unread messages.",
    favoriteFruit: "apple",
}];
    console.log(accounts)
    */

//1) The first account has nested arrays of tags in it's tag property.  Get a list of all tags for this account as a one-dimensional array.
/*
const getTags = (accounts) =>{
    return accounts[0].tags.flat(2)
}
console.log(getTags(accounts))
*/

//2) Check whether the tags for the first account includes the "consectetur" tag 

/*
const getTagbyName = (accounts) =>{
    return accounts[0].tags.flat().includes("consectetur")
}

console.log(getTagbyName(accounts))
*/

//3)  Get a list of all the tags for all the accounts and join them together as a string separated by commas.

/*
const getTagsAll = (accounts) =>{
    return accounts.map(({ tags} )=> tags.join(',')).join(',')
}

console.log(getTagsAll(accounts))
*/

//4) Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)
/*
const getFriends = (accounts) =>{
    return accounts.map(({friends}) => friends.map(({name})=> name)).flat()
}

console.log(getFriends(accounts))
*/

//5) Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500
/*
const getFriends = (accounts) =>{
        return accounts.filter(({age, balance})=> age <= 30 && parseInt(balance.replace(/\D/g, '')) > 1500)
                        .map(({friends})=> friends)
                        .flat()
                        .map(({name})=> name)
    }       

console.log(getFriends(accounts))
*/


//REGULAR EXPRESSION 01
/*
const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

//1) Using a regex pattern, get the 3 letter words in the ex1 string.
/*
const getThreeLetters = (ex1) =>{
    return ex1.match(/(^|\s)[a-zA-Z]{3}($|\s)/g);
}

console.log(getThreeLetters(ex1))
*/

//2) Using a regex pattern, remove all of the numbers from the ex2 string.
/*
const removeNumbers = (ex2) =>{
    return ex2.replace(/[0-9]/g, '')
}
console.log(removeNumbers(ex2))
*/

//3) Using a regex pattern, find the monetary value contained within the ex3 string.
/*
const findMonetary = (ex3) =>{
    return ex3.match(/\$\d{1,3}\.\d\d/)[0]
}

console.log(findMonetary(ex3))
*/

//4) Using a regex pattern, find the telephone number contained within the ex4 string.
/*
const getTelephoneNo = (ex4) =>{
    return ex4.match(/(\d{3,4}\s?){3}/g)
}

console.log(getTelephoneNo(ex4))
*/
//5) Using a regex pattern, find the email address contained within the ex5 string.
/*
const getEmail = (ex5) =>{
    return ex5.match(/\S+@\S+\.\S+/)[0];
}

console.log(getEmail(ex5))
*/

//REGULAR EXPRESSION 02

/*const ex1 = 'Grade 1Grade 2Grade 3Grade 4Grade 5';
const ex2 = 'The pheasant has no agenda';
const ex3 = '75, 50 : 123 / 900 - 321 + 900 = 55';
const ex4 = 'My name is: James';
const ex5 = `Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... Get me a scanning crew in here on the double. I want every part of this ship checked! Boy, it's lucky you've these compartments. I use them for smuggling. I never thought I'd be smuggling myself in them. This is ridiculous. Even if I could take off, I'd never get past the tractor beam.`

//1) Using a regex, get an array of the grade values e.g. Grade 1, Grade 2 ...


const getGradeValues = (ex1) =>{
    return ex1.match(/Grade\s\d/g)
}

console.log(getGradeValues(ex1))

//3)Using a regex, get an array of numbers that are contained in the string (removing any symbols)

const getNumbers = (ex3) =>{
    return ex3.match(/\d+/g)
}

console.log(getNumbers(ex3))

//4) Using a regex, find out the name contained in the string (after the semicolon :)

const getName = (ex4) =>{
    return ex4.match(/:\s+(\w+)/)
}

console.log(getName(ex4))

//5) Using a regex, find the number of contractions used in the string.

const getContraction = (ex5) =>{
    return ex5.match(/'[dstm] |'[r|ve]/g).length
}

console.log(getContraction(ex5))
*/

