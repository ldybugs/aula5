'use client'
import { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import styles from './register.css'

function Register() {
    const notify =() => toast.success("O usuário foi cadastrado!");
    return (
        <body>
        <ul>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/register"}>Cadastro</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>
       <br/>
       <br/>
       <div class="forrm">
       <div class="form">
      <div class="title">Registrar</div>
    
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Nome</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Senha</label>
      </div>
      <button class="submit" onClick={notify}>Registrar</button>
      <ToastContainer />
    </div>
    </div>
        </body>
        );
    };
    export default Register