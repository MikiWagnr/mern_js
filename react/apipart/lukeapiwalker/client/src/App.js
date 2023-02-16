import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route} from 'react-router-dom'
import Form from './components/form'
import People from './components/people'
import Planets from "./components/planets";

import './App.css';

function App() {
  return (
    <div className="App">
        <Form />
        <Routes>
          <Route path="/people/:id" element={<People/>} />
          <Route path="/planets/:id" element={<Planets/>} />
        </Routes>
    </div>
  );
}

export default App;
