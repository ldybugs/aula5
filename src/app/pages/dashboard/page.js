import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUsers  from "@/app/functions/componentes/listUsers";

export default async function Dashboard() {
    const lista = await getUsers()
   
    return (
        <div>
            <div>
              <Suspense fallback={<p>Carregando...</p>}>
                <ListUsers users={lista}/>
              </Suspense>
            </div>
        </div>
    );
};