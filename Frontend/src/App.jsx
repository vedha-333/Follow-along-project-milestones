import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,HomePage,CreateProduct} from './Routes.jsx'
// import HomePage from './Routes.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/create-product' element={<CreateProduct/>} />

    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
