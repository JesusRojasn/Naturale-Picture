import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import MyContext from "../contexts/MyContext";
import { FaHeart } from "react-icons/fa";

const Foto = ({ foto, fav }) => {
  const { fotos, setFotos } = useContext(MyContext);

  const setFavorito = (id) => {
    const fotoConClick = fotos.findIndex((f) => f.id === id);
    fotos[fotoConClick].liked = !fotos[fotoConClick].liked;
    setFotos([...fotos]);
  };

  return (
    <Card className="Card">
      <Card.Img variant="top" src={foto.src.tiny} />
      {!fav && (
        <FaHeart
          onClick={() => setFavorito(foto.id)}
          style={{
            position: "absolute",
            fontSize: "1.5em",
            color: foto.liked ? "red" : "white",
          }}
        />
      )}
    </Card>
  );
};

export default Foto;
