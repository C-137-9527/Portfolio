import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import ProductForm from "./ProductForm";
import classes from "./Product.module.css";

const Product = ({ price, id, name, description }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.product}>
      <div className={classes.item}>
        <div className={classes[name]}></div>
        <div className={classes.details}>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </div>
      </div>
      <div>
        <ProductForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Product;
