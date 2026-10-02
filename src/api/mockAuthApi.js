// TOBEDELETEDLATER

export function mockLoginUser(email, password){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            if (email === "test@soundstream.com" && password === "password123"){
                resolve({
                    userId: "111111111111111-111-111",
                    accessToken: "mock-access-token",
                    refreshToken: "mock-refresh-token",
                    message: "Login successful",
                });
            } else {
                reject({status: 401, body: {message: "Invalid email or password"}});
            }

        }, 2000);

    });

}