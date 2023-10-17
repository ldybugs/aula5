'use server'

const url = "https://aula-17-10-one.vercel.app"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(url + "/user/authenticated",
    {
        method:"POST",
        headers:{ "Content-type":"Application/json"},
        body: JSON.stringify(user)
    }
    );
    const userAuth = await responseOfApi.json();
    return userAuth;
}

const getUsers = () =>{

    }
     
export { getUsers, getUserAuthenticated };