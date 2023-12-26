import productcss from "./product.module.css";
import headphonebg from "../../assets/headphonebg.png";
import search from "../../assets/search.svg";
import gridview from "../../assets/gridview.svg";
import rowview from "../../assets/rowview.svg";
import Select from "../../components/Select/Select";
import { useState } from "react";

const data = [
  {
    name: "boAt rockerz 551 ANC",
    price: 3000,
    color: "Black",
    type: "On-ear earphone",
    title: `boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
    Bluetooth Headset (Stellar Black, On the Ear)`,
    images: [
      "https://www.boat-lifestyle.com/cdn/shop/products/main-700_600x.png?v=1643632678",
    ],
  },
  {
    name: "boAt rockerz 551 ANC",
    price: 3000,
    color: "Black",
    type: "On-ear earphone",
    title: `boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
    Bluetooth Headset (Stellar Black, On the Ear)`,
    images: [
      "https://www.boat-lifestyle.com/cdn/shop/products/main-700_600x.png?v=1643632678",
    ],
  },
  {
    name: "boAt rockerz 551 ANC",
    price: 3000,
    color: "Black",
    type: "On-ear earphone",
    title: `boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
    Bluetooth Headset (Stellar Black, On the Ear)`,
    images: [
      "https://www.boat-lifestyle.com/cdn/shop/products/main-700_600x.png?v=1643632678",
    ],
  },
  {
    name: "boAt rockerz 551 ANC",
    price: 3000,
    color: "Black",
    type: "On-ear earphone",
    title: `boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
    Bluetooth Headset (Stellar Black, On the Ear)`,
    images: [
      "https://www.boat-lifestyle.com/cdn/shop/products/main-700_600x.png?v=1643632678",
    ],
  },
  {
    name: "boAt rockerz 551 ANC",
    price: 3000,
    color: "Black",
    type: "On-ear earphone",
    title: `boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
    Bluetooth Headset (Stellar Black, On the Ear)`,
    images: [
      "https://www.boat-lifestyle.com/cdn/shop/products/main-700_600x.png?v=1643632678",
    ],
  },
  {
    name: "boAt rockerz 551 ANC",
    price: 3000,
    color: "Black",
    type: "On-ear earphone",
    title: `boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm Drivers & ASAP Charge
    Bluetooth Headset (Stellar Black, On the Ear)`,
    images: [
      "https://www.boat-lifestyle.com/cdn/shop/products/main-700_600x.png?v=1643632678",
    ],
  },
];

const Product = () => {
  const [showRowView, setShowRowView] = useState(false);
  return (
    <div className={productcss.container}>
      <div className={productcss.banner}>
        <div className={productcss.buynow}>
          <p>Grab upto 50% off on Selected headphones</p>
          <button>Buy Now</button>
        </div>
        <img src={headphonebg} alt="" />
      </div>
      <div className={productcss.search}>
        <img src={search} alt="" />
        <input type="text" placeholder="Search Product" />
      </div>
      <div className={productcss.filterscontainer}>
        <div>
          <img src={gridview} />
          <img onClick={() => setShowRowView(!showRowView)} src={rowview} />
        </div>
        <div>
          <Select className="" name="" id="">
            <option value="">Featured</option>
            <option value="">In-ear headphone</option>
            <option value="">On-ear headphone</option>
            <option value="">Over-ear headphones</option>
          </Select>
          <Select name="" id="">
            <option value="">Featured</option>
            <option value="">JBL</option>
            <option value="">Sony</option>
            <option value="">Boat</option>
            <option value="">Zebronics</option>
            <option value="">Marshall</option>
            <option value="">Ptron</option>
          </Select>
        </div>
      </div>
      <div
        style={{
          display: showRowView ? "block" : "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "50px",
          marginTop: "90px",
        }}
      >
        {data.map((product, index) => (
          <div
            style={
              showRowView
                ? {
                    display: "flex",
                    marginTop: "90px",
                    gap: "50px",
                  }
                : {}
            }
            className={productcss.products}
            key={index}
          >
            <div className={productcss.productImageContainer}>
              <img src={product.images[0]} alt="" />
            </div>
            <div className={productcss.productdetails}>
              <p
                style={
                  showRowView ? { fontSize: "42px", fontWeight: "600" } : {}
                }
              >
                {product.name}
              </p>
              <p>{product.price}</p>
              <p>
                {product.color} | {product.type}
              </p>
              {showRowView && <p>{product.title}</p>}
              {showRowView && (
                <button className={productcss.detailsBtn}>Details</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;
