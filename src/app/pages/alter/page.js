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
        <div className={styles.alterbox}>
            <button>weug</button>
        </div>
        </body>
        );
    };
    export default Alter