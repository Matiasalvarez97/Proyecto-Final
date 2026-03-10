import { useNavigate } from "react-router-dom";

const Acerca = () => {
    const navigate = useNavigate();

    return (
        <main className="acerca-page">
            <header className="acerca-header">
                <h1>Documentación del Proyecto: Chat UTN</h1>
            </header>

            <div className="acerca-content">
                <section className="acerca-section">
                    <h2>Explicación del Proyecto</h2>
                    <p>
                        Es una aplicación de mensajería al estilo WhatsApp, con su login, su logout, con un aside con los contactos y una caja de mensajería en donde podemos ver las conversaciones.
                    </p>
                </section>

                <section className="acerca-section">
                    <h2>Partes Principales</h2>
                    <ul>
                        <li><strong>Autenticación:</strong> Se creó una página de registro para usuarios nuevos y un login para usuarios existentes.</li>
                        <li><strong>Buscador de Contactos:</strong> Hay un filtro para buscar los contactos.</li>
                        <li><strong>Área de Chat:</strong> Hay un chat en donde podemos ver los mensajes enviados y enviar nuevos.</li>
                        <li><strong>Contexto:</strong> Todas las áreas están comunicadas entre sí.</li>
                    </ul>
                </section>

                <section className="acerca-section">
                    <h2>Tecnologías Utilizadas</h2>
                    <table className="acerca-tabla">
                        <thead>
                            <tr>
                                <th>Tecnología</th>
                                <th>Función</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>React</td><td>useState, useEffect, useRef</td></tr>
                            <tr><td>Context</td><td>Se usó para la comunicación entre sí y el manejo de la persistencia</td></tr>
                            <tr><td>Router</td><td>Se usó para la protección del home y el manejo de las rutas en esta app SPA</td></tr>
                            <tr><td>LocalStorage</td><td>Persistencia de usuarios y chats en el navegador</td></tr>
                        </tbody>
                    </table>
                </section>

                <section className="acerca-section">
                    <h2>Decisiones de Desarrollo</h2>
                    <p>
                        Se utilizó <strong>RouteProtected</strong> para restringir el acceso a la página principal. 
                        En el chat, se utilizó <strong>useRef</strong> para evitar que tengamos que scrollear hasta el último mensaje manualmente. Además, se normalizaron los datos de usuarios para asegurar compatibilidad entre la Mock y los nuevos registros.
                    </p>
                </section>

                <section className="acerca-section">
                    <h2>Dificultades y Observaciones</h2>
                    <p>
                        Lo más complicado del proyecto fue la persistencia de datos y lograr que la gestión de nuevos usuarios no tenga conflicto con la Mock. En cuanto a mi observación personal, considero que es un buen proyecto final logrando implementar todo lo aprendido durante la cursada.
                    </p>
                </section>
            </div>

            <footer className="acerca-footer">
                <p>Proyecto Final - Matias Alvarez - UTN 2026</p>
                <button className="acerca-volver" onClick={() => navigate("/login")}>
                    Volver al Login
                </button>
            </footer>
        </main>
    );
};

export { Acerca };