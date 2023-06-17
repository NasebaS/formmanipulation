

import { Routes, Route,Link} from 'react-router-dom';
import View from './View';
import Form from './Form';

function App() {
  

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/form">Form</Link>
            <Link to="/view">View</Link>
          </li>
        </ul>
      </nav>
    <Routes>
      <Route path='/form' element={<Form />}/>
      <Route path="/view" element={<View />} />
    </Routes>
    </div>
  );
}

export default App;

