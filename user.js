import { createBankAccount } from "./bank.js"

let userDataList = []


function signup(username,password,data){
    const usernameExists = data.some(user => user.username === username)
    if(typeof username !== 'string' || username.length < 4 || username.length > 8){
       throw new Error("Invalid choice for username")
    }
    if(usernameExists){
        throw new Error("Username Already Exists")
    }
    if(typeof password !== 'string' || password < 4 || password > 20){
       throw new Error("Invalid choice for password")
    }
    const id = data.length + 1
    data.push({
        id,
        username,
        password,
        account: createBankAccount(0)
    })
}

function signIn(username, password){
    username
}

try {
    signup('roji', "imstoopid", userDataList)
}catch(e){
    console.log(e)
}
console.log(userDataList);
