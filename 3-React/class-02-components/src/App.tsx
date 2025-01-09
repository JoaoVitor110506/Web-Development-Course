import imageReact from "./assets/react.svg";
import { Button } from "./components/Button";
//named export
export function App() {
  return (
    <>
      <h1>Class-02-components</h1>
      <p>TSX - TypeScript + HTML</p>

      <img src={imageReact} alt="image" />
      <img src="../public/vite.svg" alt="" />

      <div>
        <Button title="Login" color="red"/>
        <Button title="Adquirir"/>
        <Button title="Sair" color="green"/>
      </div>
    </>
  );
}

export default App;
