'use client'
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import styles from './register.css'

function Register() {
    const notify =() => toast.success("O usuário foi cadastrado!");
    return (
        <div>
            <button>weug</button>
        </div>
        );
    };
    export default Register