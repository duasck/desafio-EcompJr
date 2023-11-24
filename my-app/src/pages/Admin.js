import { Pedido } from "../components/Pedido";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const Admin = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/form');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao obter os dados:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div >{loading}? <Pedido cliente={data.id.name} email={data.id.email} detalhes={data.id.details} />;
        </div>
    );
};
