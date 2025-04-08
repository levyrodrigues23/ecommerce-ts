import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home/Home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
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
  const [total, setTotal] = useState("");

  //adiciona no carrinho
  function addItemCart(newItem: ProductProps) {
    //verifica se o item já existe no carrinho
    const indexItem = cart.findIndex((item) => item.id === newItem.id);
    if (indexItem !== -1) {
      // se entrou aqui, soma mais um na quantidade e calculamos o tamanho total do carrinho
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      //atualiza o total do item
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;
      setCart(cartList);
      totalResultCart(cartList);
      //atualiza o total do carrinho
      return;
    }

    //adicionar um novo item no carrinho
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      //diminuir a quantidade do item
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total = cartList[indexItem].amount - cartList[indexItem].price;

setCart(cartList);
totalResultCart(cartList);
return

    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: CartProps[]) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);
    const format = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setTotal(format);
  }

  return (
    <CartContext.Provider
      value={{ cart, cartAmount: cart.length, addItemCart, removeItemCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
