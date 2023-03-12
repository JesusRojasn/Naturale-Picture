import Galeria from "../components/Galeria";

export default function Home() {
  return (
    <div id="Home">
      <h1>Naturaleza</h1>
      <Galeria fav={false}/>
    </div>
  );
}