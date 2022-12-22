


import './App.css';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from "./screens/LoginScreen/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
  <Header/>
   <main>
    <Routes>
   <Route path='/' element={<LandingPage />} exact/>,
   <Route path="/login" element= {<LoginScreen />} />,
    <Route path="register" element={<RegisterScreen />} />,
     <Route path="/profile" element={<ProfileScreen />} />   
   </Routes>
   </main>
  
  </BrowserRouter>
)

export default App;
