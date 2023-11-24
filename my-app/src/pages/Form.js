import "../components/style.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || details === "") {
            alert("Preencha todos os campos");
            return;
        }
        axios.post("http://localhost:8000/form", {
            name: name,
            email: email,
            details: details
        }).then((response) => {
            history("/");
        })
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input className="input_details" 
                type="text"
                placeholder="Detalhe do pedido"
                onChange={(e) => setDetails(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};
