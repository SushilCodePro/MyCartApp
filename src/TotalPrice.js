import style from "./style.module.css";

function TotaPrice({product}) {
  
  const itemsPrice = product.map((item) =>(  
    // counts[item.id] ? item.price * counts[item.id] : item.price *item.qty)
   item.price *item.qty)
  ).reduce((acc, price) => acc + price, 0);
  
  console.log("itemsPrice: ",itemsPrice);
  return (
    <div className={style.totalPrice}>
      <h1>Total Price:{itemsPrice}</h1>
    </div>
  );
}
export default TotaPrice;
