function User({username, color}){
    return(
        <div>
            <h3 style={color}>Hello,{username}</h3>
        </div>
    )
}

export default User;