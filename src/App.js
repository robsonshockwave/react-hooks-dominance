import { createContext, useContext, useRef } from 'react';
import P from 'prop-types';
import { useReducer } from 'react';
import './App.css';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// estado global
// data.js
export const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: action.payload };
    }
  }
  return { ...state };
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      {/* Pode ter um contexto dentro de outro contexto */}
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
