import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import { ListUsers } from "@/app/functions/componentes/listUsers"

export default async function Dashboard() {
    const lista = await getUsers()
   
    return (
        <div>
            <div>
              <Suspense fullback={<p>Carregando...</p>}>
                <ListUsers users={users}/>
              </Suspense>
            </div>
        </div>
    );
};