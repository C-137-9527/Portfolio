import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = ({onShowCart}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Shopping Cart</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
    </>
  );
};

export default Header;
