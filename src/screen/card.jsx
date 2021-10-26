import react, { useState } from "react";

function Card(props) {
  const { data } = props;
  const optionArray = [
    {
      value: 1,
      priceStart: 200,
      priceEnd: 300,
    },
    {
      value: 2,
      priceStart: 350,
      priceEnd: 400,
    },
    {
      value: 3,
      priceStart: 450,
      priceEnd: 500,
    },
    {
      value: 4,
      priceStart: 550,
      priceEnd: 600,
    },

    {
      value: 5,
      priceStart: 750,
      priceEnd: 800,
    },
    {
      value: 6,
      priceStart: 850,
      priceEnd: 900,
    },
    {
      value: 7,
      priceStart: 1000,
      priceEnd: 1100,
    },
  ];

  const [main, setMain] = useState([...data]);

  function getvalue(event) {
    const index = event.target.selectedIndex;
    console.log(index);
    const { data } = props;
    const optionData = optionArray[index];

    const newArray = [];

    data.map((item) => {
      console.log("stat");
      if (
        item.price >= optionData.priceStart &&
        item.price <= optionData.priceEnd
      ) {
        newArray.push(item);
      }
    });

    setMain(newArray);
  }

  return (
    <div>
      <div>
        <select onChange={getvalue} name="" id="">
          {optionArray.map((item, index) => {
            return (
              <option key={index} value={item.value}>
                from Rs {item.priceStart} to {item.priceEnd}
              </option>
            );
          })}
        </select>
      </div>
      <div className="parent">
        {main.map((item, index) => {
          return (
            <div key={index} className="card">
              <h1>{item.id}</h1>
              <div className="main-img">
                <img className="img1" src={item.picture} />
              </div>
              <p>{item.img1}</p>
              <p>{item.name}</p>
              <p>price {item.price}</p>
              <p>{item.from}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
