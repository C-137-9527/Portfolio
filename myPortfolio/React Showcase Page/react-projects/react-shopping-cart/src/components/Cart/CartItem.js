import classes from "./CartItem.module.css";

const CartItem = ({ name, price, amount, onRemove, onAdd }) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <div className={classes[name]}></div>
        <div className={classes.summary}>
          <span className={classes.price}>{price.toFixed(2)}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
