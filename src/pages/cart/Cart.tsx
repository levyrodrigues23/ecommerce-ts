import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";

const Cart = () => {
const {cart} = useContext(CartContext)

  return (
    <div className="w-full max-w-7xl mx-auto ">
      
   <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho de compras</h1>

{cart.length === 0 && (
  <div className="flex flex-col items-center justify-center ">
    <p className="font-medium ">ops...seu carrinho está vazio!!</p>
    <Link to='/'
    className="bg-slate-600 my-3 p-1 text-white font-medium rounded"
    >Acessar Produtos</Link>
  </div>
)}

{cart.map((item)=> (
     <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">

     <img    src={item.cover} alt={item.title} 
     className="w-28"/>
  
     <strong>{item.price}</strong>
  
  <div className="flex items-center justify-center gap-3">
    <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
      -
    </button>
    <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
      {item.amount}
    </button>
    <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
      +
    </button>
  </div>
  
  <strong className="float-right">
  SubTotal: {item.total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
   })}
  </strong>
  
     </section>
))}

 {cart.length !== 0 &&(
    <p className="font-bold mt-4">
    Total: R$: 1000
   </p>
 )}
      
      </div>
  );
};

export default Cart;
