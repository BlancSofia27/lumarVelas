// src/app/app.jsx
import '../styles/globals.css'; // Importa tus estilos globales
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';
function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
        </CartProvider>
    );
}

export default MyApp;
