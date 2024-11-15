// src/app/index.jsx
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const products = [
    {
        id: 1,
        title: 'Vela Aromática de Lavanda',
        description: 'Relájate con el suave aroma de lavanda.',
        price: 12.99,
        image: 'https://example.com/vela1.jpg', // Cambia por la URL real
    },
    {
        id: 2,
        title: 'Vela de Cera Natural',
        description: 'Hecha a mano con cera 100% natural.',
        price: 15.99,
        image: 'https://example.com/vela2.jpg', // Cambia por la URL real
    },
    // Agrega más productos aquí
];

const Home = () => {
    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Hero />
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Home;
