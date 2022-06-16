
function App() {
  let amount:number = 10
  let item:string = 'apple'
  let unitPrice:number = 2
  let totalPrice:number = amount* unitPrice

  function myFuntion(parameterA:number, parameterB:number)  {
    console.log(parameterA + parameterB)
  }
  myFuntion(5, 15)

  
  const test = (function yourFunction() {
    setTimeout(() => console.log('suraj'), 3000)
  })()
 

  return (
    <div className="App">
      <h1>Product: {item}</h1>
      <h2>Unit price: {unitPrice}</h2>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
}

export default App;
