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

  interface Point {
    x: number;
    y: number;
  }
   
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);

  type Role = 'guest'| 'admin'

  interface User {
    firstName: string, 
    lastName: string, 
    email: string, 
    password: string, 
    avatar: string, 
    role: Role
  }

  
  return (
    <div className="App">
      {/* <h1>Product: {item}</h1>
      <h2>Unit price: {unitPrice}</h2>
      <h2>Total Price: {totalPrice}</h2> */}
    </div>
  );
}

export default App;
