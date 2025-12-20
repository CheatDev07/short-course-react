import './App.css'
import ProductCardList from './components/ProductComponent'

function App() {

  // define data list
  const dataList = [
    {
      "title": "Sleek Modern Laptop for Professionals",
      "price": 97,
      "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
      "images": [
        "https://i.imgur.com/ItHcq7o.jpeg",
        "https://i.imgur.com/55GM3XZ.jpeg",
        "https://i.imgur.com/tcNJxoW.jpeg"
      ]
    },
    {

      "title": "Stylish Red & Silver Over-Ear Headphones",
      "price": 39,
      "description": "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
      "images": [
        "https://i.imgur.com/YaSqa06.jpeg",
        "https://i.imgur.com/isQAliJ.jpeg",
        "https://i.imgur.com/5B8UQfh.jpeg"
      ]
    },
    {
      "title": "Sleek Mirror Finish Phone Case",
      "price": 27,
      "description": "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",

      "images": [
        "https://i.imgur.com/yb9UQKL.jpeg",
        "https://i.imgur.com/m2owtQG.jpeg",
        "https://i.imgur.com/bNiORct.jpeg"
      ]
    },
    {

      "title": "Sleek Smartwatch with Vibrant Display",
      "price": 16,
      "description": "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",

      "images": [
        "https://i.imgur.com/LGk9Jn2.jpeg",
        "https://i.imgur.com/1ttYWaI.jpeg",
        "https://i.imgur.com/sPRWnJH.jpeg"
      ]
    }]
  return (
    <div className='grid grid-cols-4 gap-4 p-4 m-8'>
      {
        dataList.map((data)=>{
           return (
              // calling ProductCardList 
               <ProductCardList
                image={data.images[0]}
                title={data.title}
                description={data.description}
                price={data.price}
              />
           )
        })
      }
    </div>
  )
}
export default App
