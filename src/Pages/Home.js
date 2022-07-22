import React from "react";
import InformationContainer from "../components/information-container";
import "./App.css";

const Home = () => {
  const expenses = [
    {
      id: 1,
      Link: "http://localhost:3000/about",
      title: "Farmazon Hakkında",
      logo: "fa fa-book fa-3x",
      makale: "7",
      yazarlar: "Melik, Şerife Güner ve Selin Gürel",
      avatars: [
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
      ],
    },
    {
      id: 2,
      title: "Farmazonda Sipariş",
      logo: "fa fa-box fa-3x",
      makale: "12",
      yazarlar: "Şerife Güner ve Murat Ersoy",
      avatars: [
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
      ],
    },
    {
      id: 3,
      title: "Farmazonda Satış",
      logo: "fa fa-money fa-3x",
      makale: "1",
      avatars: [
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
        "https://joeschmoe.io/api/v1/random",
      ],
      yazarlar: "Erman Çelik , Sarper Dilek ve Selin Gürel",
    },
  ];
  return (
    <div>
      <div className="Header">
        <div className="headercontainer">
          <div className="farmazonyaziii">
            <span>
              <a href="#" className="farmazonyazi ">
                <i className="fa fa-arrow-up-right-from-square" /> Farmazon
                uygulamasına gidin
              </a>
            </span>
          </div>
          <a href="#" className="linkFarmazon"></a>
          <p className="firsttext">
            Farmazon hakkında tüm merak ettikleriniz burada !
          </p>
          <div className="input">
            <input
              type="text"
              className="inputText"
              placeholder="Yanıt ara..."
            />
            <a href="#" type="submit" className="submit fa fa-search fa-2x"></a>
          </div>
        </div>
      </div>
      <div className="componentsWidth">
        <div>
          {expenses.map((expenseData) => (
            <InformationContainer data={expenseData} />
          ))}
        </div>
      </div>
      <div className="bottomcontainer">
        <div className="bottom">
          <a href="#" className="bottomfarmazonlink"></a>
          <div className="facetwitter">
            <a href="#" className="twitter fa fa-twitter"></a>
            <a href="#" className="facebook fa fa-facebook"></a>
            <a href="#" className="linkedin fa fa-linkedin fa-1x"></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
