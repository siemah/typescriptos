import React, { FC, useState, useMemo, useCallback } from 'react'

interface UserType {
  username: string;
  age?: number;
}
interface SetState {
  (a:number): void;
}
const UseState:FC<{ initial?: number }> = ({ initial=0 }) => {
  const [clicks, setClicks] = useState<number>(initial);
  const [user, setUser] = useState<UserType>({ age: 18, username: "" });
  const onClick = () => {
    console.log("recall to onclick function");
    setClicks(clicks+1);
  }

  return (
    <div>
      <p>Clicks: {clicks}</p>
      <button onClick={onClick}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
      <br/>
      username is: {user.username} are {user.age} year old.<br/>  
      <input type="text" onChange={e => setUser({age: 15, username: e.target.value.toString()})}/>
    </div>
  )
}
export default UseState;