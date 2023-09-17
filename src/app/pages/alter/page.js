'use client'
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import styles from './alter.css'

function Alter() {
    const notify =() => toast.success("O usuário foi alterado!");

    return (
        <body className={styles.alter}>
        <ul>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/register"}>Cadastro</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>
        </body>
        );
    };
    export default Alter