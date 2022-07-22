import "./aboutComponents.css";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
function Aboutcontainer(props) {
  return (
    <div>
      <Link to={`/articles/${props.data.id} `} className="expense-item-about">
        <div className="expense-item-description-about">
          <h2 className={` ${props.data.logo} logos-about`}></h2>
          <div className="ExpectLogo-about">
            <h2 className="Titles-about">{props.data.title}</h2>
            <h2 className="tanim-about">{props.data.tanim}</h2>
            <div className="MakaleYazarLogo-about">
              <div className="MakaleYazar-about">
                <h2 className="Yazarlar-about">
                  <b>Yazarlar : </b>
                  {props.data.yazarlar}
                </h2>
                <h2 className="Tarih-about">{props.data.tarih}</h2>
              </div>
              {props.data.avatars.map((avatar) => (
                <Avatar.Group className="avatars-about">
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
export default Aboutcontainer;
