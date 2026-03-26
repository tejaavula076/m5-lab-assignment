import './App.css';
import ShoppingCart from './ShoppingCart';

function App() {
let productsData = [
{
  id:1,
  image: "./products/cologne.jpg",
  desc: "Unisex Cologne",
  price:35,
  value:0
},
{
  id:2,
  image: "./products/iwatch.jpg",
  desc: "Apple iWatch",
  price:199,
  value:0
},
{
  id:3,
  image: "./products/mug.jpg",
  desc: "Unique Mug",
  price:15,
  value:0
},
{
  id:4,
  image: "./products/wallet.jpg",
  desc: "Mens Wallet",
  price:48,
  value:0
}
];
  return (
   <>
   <ShoppingCart productData={productsData}/>
   </>
  );
}

export default App;
