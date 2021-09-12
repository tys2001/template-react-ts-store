import React, { useState } from 'react';
import { useGlobalState } from '../scripts/Provider';
import { User } from '../scripts/reducer';

const Example2: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [state, dispatch] = useGlobalState();

  const deleteFriend = (friend: User) => {
    dispatch(s => s.friendList = state.friendList.filter(f => f !== friend))
  }

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
          (friend, index) => <div key={index} onClick={() => deleteFriend(friend)}>{friend.name} {friend.age}</div>
        )
      }</div>
      <button onClick={() => dispatch(s => s.friendList.push({ name: "f", age: 5 }))}>add</button>
    </div>
  );
}

export default Example2;