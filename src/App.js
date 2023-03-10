
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import ResNavbar from './components/ResNavbar';
import Home from './components/pages/Home';
import ResCreate from './components/pages/ResCreate';
import ResList from './components/pages/ResList';
import ResSearch from './components/pages/ResSearch';
import ResUpdate from './components/pages/ResUpdate';
import MyUser from './components/pages/MyUser';
import Page404 from './components/pages/Page404';
import UserPage from './components/pages/UserPage';



function App() {


  return (
    <>
        <BrowserRouter> 
          <ResNavbar/>              
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<ResCreate/>}/>
            <Route path='/list' element={<ResList/>}/>
            <Route path='/search' element={<ResSearch/>}/>
            <Route path='/update' element={<ResUpdate/>}/>
            <Route path='/myuser' element={<MyUser/>}/>
            <Route path='/user/:name' element={<UserPage/>}/>
            <Route path='/*' element={<Page404/>}/>
          </Routes>

        </BrowserRouter>
    </>
  );
} 


export default App