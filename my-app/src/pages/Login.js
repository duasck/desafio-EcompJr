import "../components/style.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (user.username === "" || user.password === "") {
                alert("Preencha todos os campos");
                return;
            }
            const response = await axios.post("http://localhost:8000/login", user.username, user.password);
            // Adicione a lógica necessária para tratar a resposta do servidor após o login
            console.log('Resposta do servidor após o login:', response.data);
            // Redirecione para a rota desejada após o login bem-sucedido
            history("/");
        } catch (error) {
            console.error('Erro durante o login:', error);
            // Adicione a lógica para lidar com erros de login, como exibição de mensagens de erro
            alert("Erro durante o login. Verifique suas credenciais.");
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Login</label>
            <input
                type="text"
                placeholder="Digite o Usuário"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Digite a Senha"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button type="submit">Entrar</button>
        </form>
    );
};