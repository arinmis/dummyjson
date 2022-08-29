import Product from "../../components/product";
import { useNavigate } from "react-router";

const Home = ({ products }) => {
  const navigate = useNavigate();
  const greaterProductID = Number(Object.keys(products)[0]);

  const greaterProduct = (productInfo) => {
    return (
      <div
        onClick={() => navigate(`product/${greaterProductID}`)}
        className="col-span-full h-96 mb-5 w-full"
      >
        <div className="card card-onhover p-2 h-full grid md:grid-cols-2 grid-cols-1 gap-2">
          <img
            src={productInfo.thumbnail}
            className="object-cover h-full w-full rounded-sm overflow-hidden"
            alt={`${productInfo.title} foto`}
          />
          <div className="text-left align-middle">
            <div className="font-bold">{productInfo.title}</div>
            <div>
              <sup>$</sup>
              <span className="text-lg">{productInfo.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center main-padding">
      <div className="grid justify-items-center	xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 ">
        {/* the first product */}
        {greaterProduct(products[greaterProductID])}
        {Object.values(products).map((product, index) => {
          return product.id === greaterProductID ? null : (
            <Product
              thumbnail={product.thumbnail}
              price={product.price}
              title={product.title}
              id={product.id}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
