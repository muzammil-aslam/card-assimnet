import react, { useState } from "react";

function Manu(props) {
  const optionarry = [
    {
      value: 1,
      priceStart: 200,
      pricEnd: 300,
    },
    {
      value: 2,
      priceStart: 350,
      pricEnd: 400,
    },
    {
      value: 3,
      priceStart: 450,
      pricEnd: 500,
    },
    {
      value: 4,
      priceStart: 550,
      pricEnd: 600,
    },
    {
      value: 5,
      priceStart: 750,
      pricEnd: 800,
    },
    {
      value: 6,
      priceStart: 850,
      pricEnd: 900,
    },
    {
      value: 7,
      priceStart: 1000,
      pricEnd: 1100,
    },
  ];
  const [value, setvalue] = useState("");
  function getvalue(event) {
    const index = event.target.selectedIndex;
    const { data } = props;
    data.filter((item) => {
      if (item.id == index) {
        console.log(true);
      }
    });
  }

  return (
    <div>
      <select onChange={getvalue} name="" id="">
        <option value="1">select</option>
        <option value="2">from Rs 200 to 300</option>
        <option value="3">from Rs 350 to 400</option>
        <option value="4">from Rs 450 to 500</option>
        <option value="5">from Rs 550 to 600</option>
        <option value="6">from Rs 750 to 800</option>
        <option value="7">from Rs 850 to 900</option>
        <option value="8">from Rs 1000 to 1100</option>
      </select>
    </div>
  );
}

export default Manu;
