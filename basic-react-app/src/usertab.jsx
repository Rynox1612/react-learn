import User from "./user"

function UserTab(){
    return(
        <>
        <User username="Jayesh" color={{color:"red"}}/>
        <User username="Rupesh" color={{color:"green"}}/>
        <User username="Suresh" color={{color:"blue"}}/>
        </>
    )
}

export default UserTab;