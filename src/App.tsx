
function App() {
  let amount:number = 10
  let item:string = 'apple'
  let unitPrice:number = 2
  let totalPrice:number = amount* unitPrice
  return (
    <div className="App">
      <h1>Product: {item}</h1>
      <h2>Unit price: {unitPrice}</h2>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
}

export default App;
