import "../assets/css/galeria.css";
import Foto from "./Foto.jsx"
import { useContext } from "react";
import MyContext from "../contexts/MyContext";
import { Col } from "react-bootstrap";

export default function Home({fav=false}) {

  const {fotos} = useContext(MyContext);

  return (
    <div className="galeria foto grid-columns-5 p-3">
        {fotos.filter((f)=>{
          if(fav){
            return f.liked?f:null
          }else{
            return f
          }
        }).map((f)=> {
        return <Col  key={f.id}><Foto fav={fav} foto={f}></Foto></Col>
        })
        }
    </div>
  );
}