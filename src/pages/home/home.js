import Product from "../../components/product";
import { useNavigate } from "react-router";

const Home = ({ products }) => {
  const navigate = useNavigate();
  const greaterProductID = 1;

  const greaterProduct = (productInfo) => {
    return (
      <div
        onClick={() => navigate(`product/${greaterProductID}`)}
        className="col-span-full h-96 mb-5"
      >
        <div className="card p-2 h-full grid md:grid-cols-2 grid-cols-1 gap-2">
          <img
            src={productInfo.thumbnail}
            className="object-cover h-full w-full rounded-sm"
            alt={`${productInfo.title} foto`}
          />
          <div className="text-left align-middle">
            <div className="font-bold"> {productInfo.title}</div>
            <div>
              Price:
              <span className="text-lg">{productInfo.price}</span>
              <sup>$</sup>
            </div>
            <p>Description: {productInfo.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center main-padding">
      <div className="grid justify-items-center	xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 divide-y">
        {/* the first product */}
        {greaterProduct(products[greaterProductID])}
        {Object.values(products).map((product, index) => {
          return index + 1 === greaterProductID ? null : (
            <Product
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
