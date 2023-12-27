import React from "react";
import detailscss from "./details.module.css";
const data = {
  name: "boAt rockerz 551 ANC",
  price: 3000,
  color: "Black",
  type: "On-ear earphone",
  title: `boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
    Bluetooth Headset (Stellar Black, On the Ear)`,
  images: [
    "https://www.boat-lifestyle.com/cdn/shop/products/main-700_600x.png?v=1643632678",
  ],
  description: [
    "About this item Sony’s lightest Wireless Noise-cancelling headband ever ",
    "Up to 50-hour battery life with quick charging (3 min charge for up to 1 hour of playback)",
    "Multi-Point Connection helps to pair with two Bluetooth devices at the same time",
    "Take noise cancelling to the next level with Sony’ Integrated Processor V1,so you can fully immers yourself in the music",
    "Super comfortable and lightweight design( 192 Grams )",
    "High sound quality and well-balanced sound tuning",
  ],
  available: "In stock",
  brand: "Boat",
};
const Details = () => {
  return (
    <div>
      <button className={detailscss.backbutton}>Back to products</button>
      <div className={detailscss.container}>
        <p className={detailscss.title}>{data.title}</p>
        <div className={detailscss.herocontainer}>
          <img src={data.images[0]} alt="" />
          <div className={detailscss.detailcontainer}>
            <p className={detailscss.name}> {data.name}</p>
            <p className={detailscss.price}>Price - ₹ {data.price}</p>
            <p className={detailscss.color}>
              {data.color} | {data.type}{" "}
            </p>
            <div className={detailscss.description}>
              <p>About this item</p>
              <ul className={detailscss.list}>
                {data.description.map((elem, index) => (
                  <li key={index}>{elem}</li>
                ))}
              </ul>
            </div>
            <p className={detailscss.available}>
              <span>Available</span> - {data.available}
            </p>
            <p className={detailscss.brand}>
              <span>Brand</span> - {data.brand}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
