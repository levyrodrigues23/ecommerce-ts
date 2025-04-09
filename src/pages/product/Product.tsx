import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import { ProductProps } from "../home/Home";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    getProduct();
  }, [id]);

  function handleAddItem(product: ProductProps) {
    toast.success("Produto adicionado ao carrinho", {
      style: {
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#fff",
      },
    });
    addItemCart(product);
    navigate("/cart");
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full ">
            <div className="flex flex-col lg:flex-row">
              <img
                //object contain deixa a imagem proporcional
                className="flex-1 w-full max-h-72 object-contain"
                src={product.image}
                alt={product.title}
              />
              <div className="flex-1 ">
                <p className="font-bold text-2xl mt-4 mb-4">{product?.title}</p>
                <p className="my-4">{product?.description}</p>
                <strong className="text-zinc-700/90 text-xl">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  onClick={() => handleAddItem(product)}
                  className="bg-zinc-900 p-1 rounded ml-3"
                >
                  <BsCartPlus size={20} color="#fff" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Product;
