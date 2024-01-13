// import style from "./style.module.css";
// 1-Object.values(counts):
// Object.values() is a method that returns an array of a given object's own enumerable property values.
// 2-In this case, it returns an array of the values of the counts object, which are the counts for each item in the cart.
// 3-reduce((acc, count) => acc + count, 0):
// reduce is an array method that iterates over each element of the array, accumulating a single value.
// 4-In this case, it starts with an initial value of 0 and adds up each count in the array.
// acc is the accumulator that keeps track of the running total, and count is the current value being processed in the array.
function NavBar({product }) {
    // const totalItems = Object.values(counts).reduce(
    //   (acc, count) => acc + count,
    //   0,
    // );
    const totalItems=product.map((item)=>(
      // counts[item.id]? counts[item.id]:item.qty
      item.qty
    )).reduce((acc,count)=>acc+count,0)
    // console.log("cuntsNav:",counts);  
    console.log("Navbar:",totalItems);

    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
            alt="cart-icon"
          />
          <span style={styles.cartCount}>{totalItems}</span>
          {/* <span style={styles.cartCount}> {props.count} </span> */}
        </div>
      </div>
    );
  }
  
  export default NavBar;
  
  const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20,
    },
    nav: {
      height: 70,
      background: "#4267b2",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    cartIconContainer: {
      position: "relative",
    },
    cartCount: {
      background: "yellow",
      borderRadius: "50%",
      padding: "4px 8px",
      position: "absolute",
      right: 0,
      top: -9,
    },
  };
  
  // Add this to your CSS file or use a CSS module
  // .cart-icon {
  //   // Add any additional styling for the container here
  // }
  