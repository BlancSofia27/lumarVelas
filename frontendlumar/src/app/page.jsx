import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import Info from '@/components/Info';

const products = [
    {
        id: 1,
        title: 'Vela Aromática de Lavanda',
        description: 'Relájate con el suave aroma de lavanda.',
        price: 12.99,
        image: 'https://example.com/vela1.jpg',
    },
    {
        id: 2,
        title: 'Vela de Cera Natural',
        description: 'Hecha a mano con cera 100% natural.',
        price: 15.99,
        image: 'https://example.com/vela2.jpg',
    },
    // Agrega más productos aquí
];

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Info/>
            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
