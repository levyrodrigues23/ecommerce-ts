const Cart = () => {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      
   <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho de compras</h1>

   <section className="flex items-center justify-between border-b-2 border-gray-300">

   <img    src="https://cdn.awsli.com.br/600x1000/494/494820/produto/439209597de595cc73.jpg" alt="logo do produto" 
   className="w-28"/>

   <strong>Preço: R$ 1000</strong>

<div className="flex items-center justify-center gap-3">
  <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
    -
  </button>
  <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
    2
  </button>
  <button className="bg-slate-600  px-2 rounded text-white font-medium flex items-center justify-center">
    +
  </button>
</div>

<strong className="float-right">
SubTotal: R$ 2000
</strong>

   </section>

   <p className="font-bold mt-4">
    Total: R$: 1000
   </p>
      
      </div>
  );
};

export default Cart;
