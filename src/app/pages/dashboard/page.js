import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUsers  from "@/app/functions/componentes/listUsers";
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import styles from './pages.css'

export default async function Dashboard() {
    const lista = await getUsers()
   
    return (
        <div className={styles.login}>
            <div>
              <Suspense fallback={<p>Carregando...</p>}>
                <ListUsers users={lista}/>
              </Suspense>
            </div>
        </div>
    );
};