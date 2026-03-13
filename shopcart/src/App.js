import './App.css';
import ShoppingCart from './ShoppingCart';

function App() {
  let productsData = [
  {
    image: "./products/cologne.jpg",
    desc: "Unisex Cologne",
    value: 0,
  },
  {
    image: "./products/iwatch.jpg",
    desc: "Apple iWatch",
    value: 0,
  },
  {
    image: "./products/mug.jpg",
    desc: "Unique Mug",
    value: 0,
  },
  {
    image: "./products/wallet.jpg",
    desc: "Mens Wallet",
    value: 0,
  },
];
  return (
   <>
   <ShoppingCart productData={productsData}/>
   </>
  );
}

export default App;
