import images from "../../assets/images";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./header.scss";
export default function Header() {
  return (
    <header>
      <div className="logoName">
        <h2>TemPiece</h2>
        <img src={images.bandeiraPirata} alt="bandeira pirata" />
      </div>
      <div className="icons">
        <IconContext.Provider value={{ className: "icon" }}>
          <a href="https://github.com/NickProfessor" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nickollas-silva-642109257/">
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
    </header>
  );
}
