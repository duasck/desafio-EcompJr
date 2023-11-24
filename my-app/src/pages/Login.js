import "../components/style.css";
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            alert("Preencha todos os campos");
            return;
        }
        axios.post("http://localhost:8000/login", {
            username: username,
            password: password,
        }).then((response) => {
                history("/");
        })
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Login</label>
            <input
                type="text"
                placeholder="Digite o Usuário"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Digite a Senha"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    );
};

