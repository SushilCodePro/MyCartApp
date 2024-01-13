// import CartItem from "./CartItem";
// import style from "./style.module.css";
// import { useState } from "react";
import { getFirestore,doc,updateDoc, deleteDoc } from 'firebase/firestore';
function CartItem({ item,firebaseApp}) {
    // const [count, setCount] = useState(0);
  
    // function IncreaseCount() {
    //   setCount(count + 1);
    // }
    // function FirebaseSetUp{

    // }
    function DecreaseCount() {
      const db = getFirestore(firebaseApp);
      const productRef = doc(db, 'product',item.id);
    
      const currentQuantity = item.qty || 0;
      if(item.qty<=1){
        return;
      }
      updateDoc(productRef, {
        qty: currentQuantity - 1,
      });
    }

    function deleteId() {
      const db = getFirestore(firebaseApp);
      const productRef = doc(db, 'product',item.id);
      deleteDoc(productRef);
    }

    function IncreaseCount() {
      // console.log("from increase");
      // Update the quantity in Firebase
      const db = getFirestore(firebaseApp);
      const productRef = doc(db, 'product',item.id);
    
      // Get the current quantity
      const currentQuantity = item.qty || 0;
    
      // Update the quantity in Firestore
      updateDoc(productRef, {
        qty: currentQuantity + 1,
      });
    
      // Update the local state (counts) as well
      // setCounts((prevCounts) => ({
      //   ...prevCounts,
      //   [productId]: (prevCounts[productId] || 0) + 1,
      // }));
    }

    console.log("from cartItem");
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={item.image} />
        </div>
        <div className="right-block">
          <div>Name:{item.name}</div>
          <div>Rs:{item.price}</div>
          <div>Qty:{item.qty}</div>
          <div className="cart-item-actions">
            <img
              onClick={IncreaseCount}
              alt="increase"
              className="action-icons"
              src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
            />
            <img
              onClick={DecreaseCount}
              alt="decrease"
              className="action-icons"
              src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
            />
            <img
              onClick={deleteId}
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
            />
          </div>
        </div>
      </div>
    );
  }
  export default CartItem;
  
  const styles = {
    image: {
      width: "100px",
      height: "100px",
    },
  };
  