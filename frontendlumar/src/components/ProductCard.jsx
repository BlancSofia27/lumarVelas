
const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
            <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
            <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">{product.title}</h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-gray-800">${product.price}</span>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
