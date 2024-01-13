import React from "react";
import CartItem from "./CartItem";
// import {useState} from "react";
function Cart({product,handleDelete,firebaseApp}) {
  console.log("from cart");
  return (
    <div className="">
      {product.map((item) => (
      <div>
        <CartItem 
          item={item} 
          // key={item.id}
          onDelete={()=>handleDelete(item.id)}
          firebaseApp={firebaseApp}
          // count={counts[item.id]||item.qty}//a way to get the count for a specific item from the counts object in React.
          // setCount={ (count)=>(
          //   setCounts((prevCounts)=>(
          //      {
          //       ...prevCounts, //copy the properties of prevCounts object
          //       [item.id]:count //adding new count properties to new object. 
          //      }
          //    )
          //   )
          // )}
        />
      </div>
        
      ))}
    </div>
  );
}

export default Cart;

// Logical OR (||) Short-Circuiting:

// The || operator evaluates the left operand first (counts[item.id] in this case).
// If the left operand is truthy, the entire expression evaluates to the left operand, and the right operand is not evaluated or considered.
// If the left operand is falsy, the entire expression evaluates to the right operand.