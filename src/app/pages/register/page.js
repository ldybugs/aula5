'use client'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import handlerAcessUser from "../../functions/handlerAcess"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import styles from './register.css'

export default function Register() {
  const [registro, setRegistro] = useState({
    name: '', email: '', password: ''
  });

  const { push, refresh } = useRouter();

  const handlerRegister = async (e) => {
    e.preventDefault();
    try {
      await handlerAcessUser(user);
      push('/pages/dashboard');
    } catch {
      refresh();
  }

  const success = true;
   if (success) {
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      toast.error('Ocorreu um erro ao cadastrar o usuário.');
    }
  };
    return (
        <body>
        <ul>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/register"}>Cadastro</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>
       <br/>
       <br/>
       <form onSubmit={handlerRegister}>
       <div class="forrm">
       <div class="form">
      <div class="title">Cadastrar</div>
    
      <div class="input-container ic1">
        <input id="nome" class="input" type="text" placeholder=" "  onChange={(e) => { setRegistro({ ...registro, password: e.target.value }) }}/>
        <div class="cut"></div>
        <label for="nome" class="placeholder">Nome</label>
      </div>
      <div class="input-container ic2">
        <input id="lemail" class="input" type="email" placeholder=" "  onChange={(e) => { setRegistro({ ...registro, password: e.target.value }) }}/>
        <div class="cut"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="password" placeholder=" "  onChange={(e) => { setRegistro({ ...registro, password: e.target.value }) }}/>
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Senha</label>
      </div>
      <button class="submit">Cadastrar</button>
      <ToastContainer />
    </div>
    </div>
       </form>
        </body>
        )
    };