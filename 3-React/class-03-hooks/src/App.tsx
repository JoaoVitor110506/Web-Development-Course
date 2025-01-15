import { useState } from "react";

export function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [users, setUsers] = useState(["user1", "user2"]);
  function add() {
    setCount(count + 1);
  }
  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  return (
    <>
      <h1> Class 03 Hooks </h1>
      <p>count: {count} </p>
      <button onClick={add}>add</button>
      <p>Name: {name}</p>
      <input type="text" onInput={handleName} />
      {users.map((user)=> {
        return <p key={user}>{user}</p>;
      })}

    </>
  );
}
