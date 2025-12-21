import { useEffect, useState } from 'react'
import './App.css'
import ProductCardList from './components/ProductComponent';

function App() {

  //const [state, setState] = useState(0); // initializevalue = 0
  const [products, setProducts] = useState([]);

  // getter, setter 

  // handleOnFetching Data from API 
  useEffect(() => {
    async function FetchingData() {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await res.json();
      console.log("the whole data: ", data)
      // const titleFromAPI = data.map(data => data.title);
      setProducts(data);
      return data;
    }
    FetchingData();
  },[])

  return (
    <div className='grid grid-cols-4 gap-8 p-4 '>
      {
         products.map((pro)=>(
            <ProductCardList
              key={pro?.id} //using for remark as difference unique components
              title={pro.title}
              description={pro.description}
              price={pro.price}
              image={pro?.images[0]}
            />
         ))
      }
     
    </div>
  )
}
export default App
