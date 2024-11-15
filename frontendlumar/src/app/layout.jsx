import '../styles/globals.css'; // Importa tus estilos globales

export const metadata = {
    title: 'Tu Aplicación',
    description: 'Descripción de tu aplicación',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="es">
            <body>
                {children} {/* Renderiza los componentes hijos */}
            </body>
        </html>
    );
};

export default RootLayout;
