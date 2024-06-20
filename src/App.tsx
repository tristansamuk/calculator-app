import { useReducer } from "react";
import strings from "./strings/strings";
import useLocalStorage from "use-local-storage";
import Display from "./components/Display/Display";
import Keypad from "./components/Keypad/Keypad";
import Toggle from "./components/Toggle/Toggle";
import "./App.scss";

// Interfaces useReducer

interface State {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}

interface Action {
  type: string;
  payload: string;
}

const ACTIONS = {
  PRESS_DIGIT: "press-digit",
  PRESS_DELETE: "press_delete",
  PRESS_EQUALS: "evaluate",
  PRESS_OPERATOR: "press-operator",
  PRESS_RESET: "reset",
};

// Initial State

const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.PRESS_DIGIT:
      return {
        ...state,
        currentOperand: "",
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useLocalStorage("theme", "theme-1");

  // Dispatches for Reducer

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
