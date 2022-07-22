import "./components.css";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
function InformationContainer(props) {
  return (
    <div>
      <Link to={`collections/${props.data.id} `} className="expense-item">
        <div className="expense-item-description">
          <i className={` ${props.data.logo} logos`} />
          <div className="ExpectLogo">
            <h2 className="Titles">{props.data.title}</h2>
            <div className="MakaleYazarLogo">
              <div className="MakaleYazar">
                <h2 className="Makaleler">
                  Bu koleksiyonda {props.data.makale} makale mevcut
                </h2>
                <h2 className="Yazarlar">
                  <b>Yazarlar : </b>
                  {props.data.yazarlar}
                </h2>
              </div>
              {props.data.avatars.map((avatar) => (
                <Avatar.Group className="avatars">
                  <Avatar style={{ background: "bisque" }} src={avatar} />
                </Avatar.Group>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default InformationContainer;
