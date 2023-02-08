import {Route, Routes} from 'react-router-dom'
import Layout from './Components/Layout';


import './app.scss'




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route path='/' index element={<Home/>}/> */}

        </Route>
      </Routes>
    </>
    
  );
}

export default App;
