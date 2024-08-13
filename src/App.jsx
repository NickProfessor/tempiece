import Header from "./components/Header";
import images from "./assets/images";
// import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <div>
        <div className="background">
          <img src={images.fogoGeloBg} alt="imagem do akainu vs aokji" />
        </div>
        <div className="overlay" />
        <div className="content">
          <Header></Header>
          {/* <Formulario></Formulario> */}
        </div>
      </div>
    </>
  );
}

export default App;
