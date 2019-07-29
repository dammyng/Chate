import {
    timeoutCall
} from "./index"

async function provision(body) {
    url = "http://localhost:4000/users"
    let result = await timeoutCall(25000, fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }))
    return result;
}

async function getUser(email) {
    url = "http://localhost:4000/users/" + email
    let result = await timeoutCall(25000, fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }))
    return result;
}

export {
    provision , getUser
}