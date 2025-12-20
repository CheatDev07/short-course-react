


export default function TestingComponent() {
    const firstName = "Sokcheat";
    const lastName = "Koko"; 
    const age = 25;
    return (
        <div>
            <h1>My name is { firstName+lastName}</h1> 
            {/* inject value of firstName="Sokcheat", lastName="Koko" */}
            <hr />
            <h2>Currently, I am {age} years old.</h2>
            {/* inject value of age = 25 */}
        </div>
    )
}