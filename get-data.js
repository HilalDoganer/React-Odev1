import axios from "axios"

export async function getData(id) {

    const user = await (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
    const posts = await (await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).data
    user.posts = posts

    console.log(user)
    return user

}