import Card from "../UI/Card";
import Product from "./Product/Product";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "triangle",
    name: "triangle",
    description: "sharp triangles",
    price: 1.99,
  },
  {
    id: "circle",
    name: "circle",
    description: "soft circles",
    price: 2.99,
  },
  {
    id: "square",
    name: "square",
    description: "boring squares",
    price: 3.99,
  },
];

const Products = () => {
  const productLists = DUMMY_PRODUCTS.map(
    ({ id, name, description, price }) => (
      <Product
        key={id}
        id={id}
        name={name}
        description={description}
        price={price}
      />
    )
  );

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productLists}</ul>
      </Card>
    </section>
  );
};

export default Products;
