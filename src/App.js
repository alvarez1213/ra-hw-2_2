import { Store } from './components/Store';

import { products } from './db/db';

function App() {
  return (
    <div className='content'>
      <Store products={ products }/>
    </div>
  );
}

export default App;
