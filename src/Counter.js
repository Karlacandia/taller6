// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Actions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

// Mapeamos el estado y las acciones a las props del componente
const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

// Conectamos el componente al store de Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
