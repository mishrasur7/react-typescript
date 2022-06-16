
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
class Employee {
  private name:string
  job:string
  constructor(name:string, job:string) {
    this.name = name
    this.job = job
  }

  sayHello() {
    console.log(`Hello ${this.name}`)
  }

  get detail () {
    return `${this.name} is a ${this.job}`
  }
}

const employee1 = new Employee('suraj', 'developer')
employee1.sayHello()
console.log(employee1.detail)


 

  return (
    <div className="App">
      {/* <h1>Product: {item}</h1>
      <h2>Unit price: {unitPrice}</h2>
      <h2>Total Price: {totalPrice}</h2> */}
    </div>
  );
}

export default App;
