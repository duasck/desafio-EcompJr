import "../components/style.css";
import { useState } from 'react';
import axios from 'axios';
import { redirect } from "react-router-dom";

export const Form = () => {
    const [client, setClient] = useState({
        name: "",
        email: "",
        details: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (client.name === "" || client.email === "" || client.details === "") {
            alert("Preencha todos os campos");
            return;
        }
        axios.post('http://localhost:8000/forms', client)
            .then((response) => {
                console.log(response);
                redirect("/");
            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setClient({ ...client, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={(e) => setClient({ ...client, email: e.target.value })}
            />
            <textarea className="input_details"
                type="text"
                placeholder="Detalhe do pedido"
                onChange={(e) => setClient({ ...client, details: e.target.value })}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};
