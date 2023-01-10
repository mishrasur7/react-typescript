function App() {
  // let amount:number = 10
  // let item:string = 'apple'
  // let unitPrice:number = 2
  // let totalPrice:number = amount* unitPrice

  // function myFuntion(parameterA:number, parameterB:number)  {
  //   console.log(parameterA + parameterB)
  // }
  // myFuntion(5, 15)

  // const test = (function yourFunction() {
  //   setTimeout(() => console.log('suraj'), 3000)
  // })()

  // let str: Object = 'string type'
  // str.toUpperCase() //error

  // function getPro<Type, Key extends keyof Type> (obj: Type, key: Key) {
  //   return obj[key]
  // }
  // let x = {a:1, b: 2, c: 3, d: 4}
  // const a = getPro(x, 'm')
  // console.log(a)

  // type Arrayish = {[n: number]: unknown}
  //   type A = keyof Arrayish
  // console.log(type A)
  /* class Employee {
    private name: string;
    job: string;
    constructor(name: string, job: string) {
      this.name = name;
      this.job = job;
    }

    sayHello() {
      console.log(`Hello ${this.name}`);
    }

    get detail() {
      return `${this.name} is a ${this.job}`;
    }
  }

  const employee1 = new Employee("suraj", "developer");
  employee1.sayHello();
  console.log(employee1.detail);

  class Candidate {
    constructor(
      private name: string = name,
      private age: number = age,
      private phoneNumber: number = phoneNumber,
      private email: string = email,
      private skills: string[] = skills
    ) {}

    doContact() {
      const message:string= 'Please mention your message here'
      
    }
  }
 */

/*   function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
    }
    return obj;
  }

  const testArray = wrapInArray('suraj')
  console.log(testArray)
  const testString = wrapInArray(['mishra', 'pandey'])
  console.log(testString) */

  // interface Point {
  //   x: number;
  //   y: number;
  // }
   
  // function logPoint(p: Point) {
  //   console.log(`${p.x}, ${p.y}`);
  // }
   
  // // logs "12, 26"
  // const point = { x: 12, y: 26 };
  // logPoint(point);

  // type Role = 'guest'| 'admin'

  // interface User {
  //   firstName: string, 
  //   lastName: string, 
  //   email: string, 
  //   password: string, 
  //   avatar: string, 
  //   role: Role
  // }

//  interface dimensions {
//   length: number
//   width: number
//  }

//  const area = (d: dimensions) => {
//   console.log(`total area ${d.length * d.width}`)
//  }
 
//  const dimensions = {
//   length: 10, 
//   width: 20
//  }

//  area(dimensions)

//  interface circle {
//   radius: number
//  }

//  const circleArea = (c: circle) => {
//   console.log(Math.PI * Math.pow(c.radius, 2))
//  }

//  const circleRadius = {
//   radius: 2
//  }

//  circleArea(circleRadius)

//  type Model = 'A'|'B'|'C'

//  interface Vehicle {
//   model: Model,
//   registrationNo: string, 
//   manufacture: string,
//   registrationYear: number
//  }

//  interface BMW extends Vehicle {
//   avatar: string
//  }

// let myArr = ['12-24-2014', '09-23-2022', '12-30-2021', '07-15-2018']

// const fixDate = (array: any) => {
//   for(let i = 0; i < array.length; i++) {
//     const date = new Date(array[i])
//     const newFormat = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
//     array[i] = newFormat
//   }
//   return array
// }


// console.log('suraj')

// console.log(fixDate(myArr))

const isPrime = (num:any) => {
  if(num === 1) {
    return false
  } else if(num === 2) {
    return true
  } else {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false
      } else {
        return true
      }
    }
  }
}

console.log(isPrime(6))

const checkPalindrome = (string:String) => {
  for(let i = 0; i < string.length/2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return 'No palindrome'
    }
  }
  return 'Palindrome'
}

console.log(checkPalindrome('madamk'))

const checkPalindromeUsingbuiltInFunctions = (string: String) => {
  
  const stringArray = string.split('')
  
  const reverseArray = stringArray.reverse()
  
  const stringAfterReverse = reverseArray.join('')
  

  if(string === stringAfterReverse) {
    return 'Palindrome'
  } 
  return 'Not palindrome'
}

const string = String(prompt('Enter a string'))
console.log(checkPalindromeUsingbuiltInFunctions(string))
  
  return (
    <div className="App">
      {/* <h1>Product: {item}</h1>
      <h2>Unit price: {unitPrice}</h2>
      <h2>Total Price: {totalPrice}</h2> */}
    </div>
  );
}

export default App;
