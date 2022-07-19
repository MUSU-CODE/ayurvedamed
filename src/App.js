
import Home,{Layout,SignIn,About,Career,Contact,Product} from './components';

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="career" element={<Career/>}/>
        </Route>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
