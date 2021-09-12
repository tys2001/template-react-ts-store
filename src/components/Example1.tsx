import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../scripts/Provider';

const Example1: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [state, dispatch] = useGlobalState();

  useEffect(() => { console.log("name changed") }, [state.name]);

  return (
    <div className="App">
      <div>local : {name}</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>global : {state.name}</div>
      <input type="text" value={state.name} onChange={e => dispatch(s => s.name = e.target.value)} />
      <div>global : {state.user.name}</div>
      <input type="text" value={state.user.name} onChange={e => dispatch(s => s.user.name = e.target.value)} />
      <div>{
        state.friendList.map(
          (friend, index) => <div key={index}>{friend.name} {friend.age}</div>
        )
      }</div>
      <button onClick={() => dispatch(s => s.friendList.push({ name: "f", age: 5 }))}>add</button>
    </div>
  );
}

export default Example1;