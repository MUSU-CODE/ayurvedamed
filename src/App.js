
import Home,{Layout,SignIn,SignUp,Product,About,Career,Contact,MyOrder} from './components';

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="myorder" element={<MyOrder/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="career" element={<Career/>}/>
          <Route path='/product/:id' element={<Product/>} />
        </Route>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
