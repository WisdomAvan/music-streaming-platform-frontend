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

export function mockRegisterUser(name, email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@soundstream.com") {
        reject({ status: 409, body: { message: "An account with this email already exists" } });
        return;
      }

      resolve({
        userId: "22222222-2222-2222-2222-222222222222",
        message: "Registration successful. Please check your email to verify your account.",
      });
    }, 500);
  });
}