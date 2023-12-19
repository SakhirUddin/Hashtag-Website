import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage/MainPage';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login2 from './LoginFirstPage2/Login';
import Signup2 from './SignUpSecondPage/Signup2';
const router = createBrowserRouter([
  {path:'/', element:<MainPage/>},
  {path:'/Login', element:<Login2/>},
  {path:'/Signup', element:<Signup2/>},

])



function App() {
  return (
    <RouterProvider router={router}/>
  )
    
}

export default App;
