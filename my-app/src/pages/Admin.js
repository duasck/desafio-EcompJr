import { Pedido } from "../components/Pedido";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const Admin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/form', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setData(response.data);
                console.log(data.keys);
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data && (() => {
                for (let i = 0; i < Object.keys(data).length; i++) {
                    let key = Object.keys(data)[i];
                    <Pedido cliente={data[key].name} />
                }
            })()}
        </div>
    );



};
