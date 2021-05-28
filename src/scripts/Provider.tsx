import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducer, State } from "./reducer";

const stateContext = React.createContext(initialState);
const dispatchContext = createContext((() => true) as React.Dispatch<(state: State) => void>);

export const Provider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        {children}
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
}

export const useGlobalState = (): [State, React.Dispatch<(state: State) => void>] => {
  return [useContext(stateContext), useContext(dispatchContext)]
}