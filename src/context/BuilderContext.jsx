import { createContext, useReducer, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const BuilderContext = createContext();

const initialState = { blocks: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_BLOCK":
      return { ...state, blocks: [...state.blocks, action.payload] };

    case "UPDATE_BLOCK":
      return {
        ...state,
        blocks: state.blocks.map((b) =>
          b.id === action.payload.id ? action.payload : b
        ),
      };

    case "REORDER_BLOCKS":
      return { ...state, blocks: action.payload };

    case "LOAD":
      return action.payload;

    default:
      return state;
  }
}

export function BuilderProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("builder");
      if (saved) dispatch({ type: "LOAD", payload: JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("builder", JSON.stringify(state));
  }, [state]);

  const addBlock = (type) => {
    dispatch({
      type: "ADD_BLOCK",
      payload: { id: uuid(), type, content: "", config: {} },
    });
  };

  return (
    <BuilderContext.Provider value={{ state, dispatch, addBlock }}>
      {children}
    </BuilderContext.Provider>
  );
}