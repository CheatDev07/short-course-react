// create children components with props (firstName, lastName, image)
export default function ChildrenComponent({firstName, lastName, image, handleOnclick}){
   return (
    <div>
        <h1>FirstName: {firstName}</h1>
        <h2>LastName: {lastName}</h2>
        <hr />
        <img style={{display:'block', margin:'auto'}} src={image} alt="" width={50} height={50} />

        <button onClick={handleOnclick} className="bg-blue-200 rounded-xl p-4">Click Here For More</button>
    </div>
   )
}