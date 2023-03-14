import "./Banner.css";

const Banner = () => {
/*   const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();

    console.log(products.products); 
  };
 */
    return (
      <div className="banner">
        <div className="banner-container">
          <h1>All Products</h1>
          <p>Productos en oferta</p>
        </div>
      </div>
    );
  };

export default Banner;
