let login = (username, password) => {
    if(username !== 'admin' || password !== "password123") {
        console.log("login failed");
    }
}

login("test", "test");