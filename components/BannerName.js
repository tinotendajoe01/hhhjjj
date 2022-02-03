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
        <h3>Good Evening {name}!</h3>
      )}
      <p>
        Get free discount for every{" "}
        <span className="text-kenlink_green">{`${currency}${discount}`}</span>{" "}
        purchase
      </p>
      <a href={more}>Learn More</a>
    </div>
  );
}

export default BannerName;
