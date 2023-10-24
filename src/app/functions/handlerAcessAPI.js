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
    console.log(userAuth);
    return userAuth;
}

const getUsers = async () =>{
    try{
        const responseOfApi = await fetch(url + "/users",{
            next: { revalidate: 10}
        });
        const listUsers = responseOfApi.json();

        return listUsers;
    } catch{
        return null;
    }

    }
     
export { getUsers, getUserAuthenticated };