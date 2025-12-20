// i have created avartarComponent
export default function AvatarComponent() {

    // declare style sheets as object 
    const textAvatar = { 
        color: 'red',
        backgroundColor: 'yellowGreen', 
        border: '1px solid black' 
    };
    return (
        <div>
            {/* insert inline style: style = {{property: 'values'}}*/}
            <p style={textAvatar}>My Avatar</p>

            {/* create image of avatar */}
            <img src="https://i.pinimg.com/1200x/ad/59/3f/ad593f094a8bf5e265d4b81f951d95e0.jpg" alt="" width={250} height={250} />
        </div>
    )
}
