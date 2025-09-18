const User = async (token) => {

    const data = await fetch("http://localhost:3000/api/auth/get-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            auth:{
                "auth-token": token
            }
        })
    }
    );
    return(data.json());

}

export default User;