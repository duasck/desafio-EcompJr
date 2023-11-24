export const Pedido = (cliente, email, detalhes) => {
    return (
        <div className="pedidos">
            <h3>Cliente {cliente}</h3>
            <h3>Email {email}</h3>
            <h3>Detalhes {detalhes}</h3>
        </div>
    );
}