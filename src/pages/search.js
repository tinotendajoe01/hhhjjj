import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchProduct from "../components/SearchProduct";
const Search = ({ products }) => {
  const router = useRouter();
  const { title } = router.query;
  //   console.log(router.query);
  //console.log(products);
  return (
    <div className="">
      <Header placeholder={`${title}`} />
      <main className="flex">
        <section className="flex-grow pt-10 px-6">
          <p className="text-xs">300+ products</p>
          <h1 className="text-xl font-semibold mt-2 mb-6">
            {title} and similar prods
          </h1>
          <div className=" hidden lg:inline-flex  mb-5 space-x-3 text-black whitespace-nowrap">
            <p className="search__button">lorem</p>
            <p className="search__button">lorem</p>
            <p className="search__button">lorem</p>
            <p className="search__button">lorem</p>
          </div>
          <div className="flex flex-col">
            {products.map((item) => (
              <SearchProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Search;
export async function getServerSideProps(context) {
  const products = await fetch("http://127.0.0.1:5501/products.json").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
