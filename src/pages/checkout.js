import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(process.env.stripe_public_key);
const checkout = () => {
  const items = useSelector(selectItems);

  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    //callthe backend to creat a check out session
  };
  return (
    <div className=" bg-[#e0e0e0]">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length === 0 ? "Your Basket is empty" : "Shopping basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
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
        </div>
        <div className="flex p-10 flex-col shadow-md bg-white">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal({items.length} items):{""}
                <span className="font-bold">
                  <Currency quantity={total} />
                </span>
              </h2>
              <button
                role="Link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "sign in to checkout" : "proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
