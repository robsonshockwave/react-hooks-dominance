import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  // poderia fazer desse jeito também
  // const { contextState } = theContext;
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
  // return (<h1>{contextState.title}</h1>)
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>{body}</p>;
  //  return <p onClick={() => setContextState(s => ({...s, counter: s.counter + 1}))}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
