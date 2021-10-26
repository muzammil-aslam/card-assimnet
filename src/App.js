import Card from "./screen/card";
import Manu from "./screen/dropedown";
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";

function App() {
  const arry = [
    {
      id: 1,
      picture: img1,
      catagree: "a",
      name: "ali",
      price: 300,
      from: "karachi",
    },
    {
      id: 2,
      picture: img2,
      catagree: "b",
      name: "yassen",
      price: 200,
      from: "islamabad",
    },
    {
      id: 3,
      picture: img3,
      catagree: "c",
      name: "usama",
      price: 500,
      from: "multan",
    },
    {
      id: 4,
      picture: img4,
      catagree: "a",
      name: "khan",
      from: "canada",
      price: 750,
    },
    {
      id: 5,
      picture: img5,
      catagree: "b",
      name: "aslam",
      from: "zalmi",
      price: 1100,
    },
    {
      id: 6,
      picture: img6,
      catagree: "c",
      name: "muzamil",
      price: 450,
      from: "islamabad",
    },
    {
      id: 7,
      picture: img7,
      catagree: "a",
      name: "uhad",
      price: 550,
      from: "lahore",
    },
    {
      id: 8,
      picture: img8,
      catagree: "b",
      name: "yassen",
      price: 900,
      from: "islamabad",
    },
    {
      id: 9,
      picture: img9,
      catagree: "c",
      name: "basit",
      price: 1000,
      from: "islamabad",
    },
    {
      id: 10,
      picture: img4,
      name: "raheel",
      catagree: "a",
      price: 350,
      from: "islamabad",
    },
  ];

  const catagree = [
    {
    
    },
  ]
  return (
    <div>
      <Card data={arry} />
    </div>
  );
}

export default App;
