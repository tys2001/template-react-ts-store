type User = {
  name: string,
  age: number,
}

export type State = {
  name: string,
  age: number,
  user: User,
  friendList: User[],
}

export const initialState: State = {
  name: "me",
  age: 12,
  user: {
    name: "me",
    age: 12,
  },
  friendList: [],
};

export const reducer = (state: State, action: (state: State) => void) => {
  const copyState = JSON.parse(JSON.stringify(state));
  action(copyState);
  return copyState;
};
