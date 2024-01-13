import './App.css'
import NavBar from './NavBar'
import Cart from './Cart'
import TotalPrice from './TotalPrice'
import { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';


const App = ({ firebaseApp }) =>{

  // const[counts, setCounts]=useState({});
  const[product,setProduct]=useState([]);
  const [loading, setLoading] = useState(true);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");

  // console.log("counts:",counts);
  function handleDelete(id){
    const newProduct=product.filter(item => item.id !== id)
    setProduct(newProduct);
    // delete counts[id];
  }

  async function handleAddProduct() {
    try {
      const db = getFirestore(firebaseApp);
      const productRef = collection(db, 'product');

      // Add a new document with the entered data
      await addDoc(productRef, {
        name: newProductName,
        price: parseInt(newProductPrice),
        qty:1
      });
      alert("Product added successfully");
      // Clear the form fields after successful addition
      setNewProductName("");
      setNewProductPrice("");
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  }
  // console.log(counts);

  // const [collectionData, setCollectionData] = useState([]);

  useEffect(() => {
    // 1. Create a Firestore instance using the initialized Firebase app.
    // This instance is needed to interact with Firestore.
    const db = getFirestore(firebaseApp);
  
    // 2. Create a reference to the 'product' collection in Firestore.
    // allowing you to perform operations on 'product'
    const collectionRef = collection(db, 'product');
  
    // 3. Set up a real-time listener for changes in the 'product' collection.
    // function listens for changes and invokes the provided callback whenever 
    // the data in the collection changes
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      // 4. Transform the data from the snapshot into a usable format.
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
      // 5. Update the component state with the transformed data.
      // This triggers a re-render of the component with the latest data.
      setProduct(data);
      setLoading(false);
    });
  
    // 6. Return a cleanup function to unsubscribe from the real-time listener
    //  when the component is unmounted or when 'firebaseApp' changes.
    return () => {
      unsubscribe();
    };
    // [firebaseApp]-This means that the effect will be triggered or re-run whenever 
    // the value of firebaseApp changes.
  }, [firebaseApp]);
  

  console.log('Collection Data:', product);
  // console.log("cunts:"+counts);
  return (
    <div>
      {loading ? (
        // Render a loader while data is loading
        <div className="loader">Loading...</div>
      ) : (
        // Render your components when data is loaded
        <>
          <NavBar 
          // counts={counts} 
          product={product} 
          />
          <Cart 
          // counts={counts} 
          // setCounts={setCounts} 
          product={product} 
          handleDelete={handleDelete}
          firebaseApp={firebaseApp} 
          />
          <TotalPrice 
          // counts={counts} 
          product={product} 
          />
          <div>
            <input
              type="text"
              placeholder="Product Name"
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Product Price"
              value={newProductPrice}
              onChange={(e) => setNewProductPrice(e.target.value)}
            />
            <button onClick={handleAddProduct}>Add Product</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App; 