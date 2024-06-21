import { useReducer } from "react";
import strings from "./strings/strings";
import useLocalStorage from "use-local-storage";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import Toggle from "./components/Toggle/Toggle";
import "./App.scss";

// Interfaces

interface State {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}

interface Action {
  type: string;
  payload: {};
}

// Actions for calcReducer and dispatch functions

const ACTIONS = {
  PRESS_DECIMAL: "press_decimal",
  PRESS_DELETE: "press_delete",
  PRESS_DIGIT: "press_digit",
  PRESS_EQUALS: "evaluate",
  PRESS_OPERATOR: "press_operator",
  PRESS_RESET: "reset",
};

// Initial State to be passed to useReducer()

const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
};

const calcReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.PRESS_DECIMAL:
      return {
        ...state,
      };
    case ACTIONS.PRESS_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${action.payload}`,
      };
    case ACTIONS.PRESS_DELETE:
      return {
        ...state,
      };
    case ACTIONS.PRESS_EQUALS:
      return {
        ...state,
      };
    case ACTIONS.PRESS_OPERATOR:
      return {
        ...state,
      };
    case ACTIONS.PRESS_RESET:
      return {
        ...state,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(calcReducer, initialState);
  const [theme, setTheme] = useLocalStorage("theme", "theme-1");

  // Click handler for keys plus appropriate dispatches for actions

  const handleKeyPress = (value: number | string) => {
    // if the key's value is a number, dispatch the press-digit action
    if (typeof value === "number") {
      dispatch({ type: ACTIONS.PRESS_DIGIT, payload: value });
      /// if the key's value is string, it's either an operator, delete, or reset
    } else if (typeof value === "string") {
      // if key's value is delete, reset, or equals, dispatch the appropriate action
      if (value === ".") {
        dispatch({ type: ACTIONS.PRESS_DECIMAL, payload: value });
      } else if (value === "DEL") {
        dispatch({ type: ACTIONS.PRESS_DELETE, payload: value });
      } else if (value === "RESET") {
        dispatch({ type: ACTIONS.PRESS_RESET, payload: value });
      } else if (value === "=") {
        dispatch({ type: ACTIONS.PRESS_EQUALS, payload: value });
        // Otherwise, it must be an operator
      } else {
        dispatch({ type: ACTIONS.PRESS_OPERATOR, payload: value });
      }
    } else {
      // Handle errors
      throw new Error(`Key press returned unknown: ${value}`);
    }
  };

  return (
    <div data-theme={theme} className="home">
      <div className="calculator">
        <div className="calculator__container--top">
          <h1 className="calculator__logo">{strings.title}</h1>
          <Toggle setTheme={setTheme} />
        </div>
        <Display currentOperand={state.currentOperand} />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
