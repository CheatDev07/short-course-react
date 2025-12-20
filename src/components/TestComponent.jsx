
// Component devides into 2 : 
// 1. Class Components ❌
// 2. Function Components ✅

// export default 
export default function TestComponent(){
    return (
    //    jsx 
         <>
          <p>This is the test component with export default</p>

         </>
    )
}


// export by using name 
export function NameComponent() {
    return (
        <p>This is export using name</p>
    )
}

// export by both (name+defualt)
export function BothNameAndDefault(){
    return (
       <>
          <p>This is export both default and name component</p>
          <TestComponent/> {/* self-closing tag */}
       
          
       </>
        
    )
}


