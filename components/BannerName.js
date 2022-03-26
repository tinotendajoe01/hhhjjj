import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "$";
  const date = new Date();
  const hour = date.getHours();
  return (
    <div className="bannerContent">
      {hour >= 12 ? (
        hour >= 16 ? (
          <h3>Good Evening {name}!</h3>
        ) : (
          <h3>Good Afternoon {name}!</h3>
        )
      ) : (
        <h3>Good Morning {name}!</h3>
      )}
      <p>
        How are you feeling today?{" "}
        {/* <span className="text-kenlink_green">{`${currency}${discount}`}</span>{" "} */}
        I am here if you need me.{" "}
      </p>
      <a href={more}>Lets Talk</a>
    </div>
  );
}

export default BannerName;
