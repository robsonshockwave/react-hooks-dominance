import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = () => {
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
