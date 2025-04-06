import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home/Home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  //adiciona no carrinho
  function addItemCart(newItem: ProductProps) {
    //verifica se o item já existe no carrinho
    const indexItem = cart.findIndex(item => item.id === newItem.id);
    if(indexItem !== -1){
        // se entrou aqui, soma mais um na quantidade e calculamos o tamanho total do carrinho
        let cartList = cart;
        cartList[indexItem].amount = cartList[indexItem].amount + 1
        //atualiza o total do item
        cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
        setCart(cartList)
        return
    }

    //adicionar um novo item no carrinho
let data = {
    ...newItem, 
    amount: 1,
    total: newItem.price
}


setCart(products => [...products, data])
  



    }

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length, addItemCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
