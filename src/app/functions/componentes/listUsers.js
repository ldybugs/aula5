import { getUsers } from "@/app/functions/handlerAcessAPI";
import { users } from ".src/app/pages/dashboard/page.js"

export default async function ListUsers({users}) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div>
            
        {users?.map((user,index) =>
         <p key={index}>
            {user.name}
         </p>

        )}
     </div>
    )
}

           