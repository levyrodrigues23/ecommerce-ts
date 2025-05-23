import { BsCartPlus } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Home = () => {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        toast.error("Erro ao buscar produtos");
      }
    }

    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps) {
    toast.success("Produto adicionado ao carrinho", {
      style: {
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#fff",
      },
    });
    addItemCart(product);
  }

  return (
    <main className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
        Produtos em alta
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <section key={product.id} className="w-full">
            
            <Link to={`/product/${product.id}`} className="flex flex-col items-center">
            <img
              className="w-full rounded-lg max-h-70 mb-2"
              src={product.image}
              alt={product.title}
            />
            <p className="font-medium mt-1 mb-2">{product.title}</p>
            </Link>
            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <button
                onClick={() => handleAddCartItem(product)}
                className="cursor-pointer bg-zinc-900 p-1 rounded"
              >
                <BsCartPlus size={24} color="#fff" />
              </button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Home;
