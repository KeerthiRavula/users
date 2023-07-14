import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from  './components/RootLayout'
import Users from './components/Users/Users'
import RemovedUsers from './components/RemovedUsers/RemovedUsers'
import AddUser from './components/adduser/AddUser'



function App() {

//create browser router
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<AddUser />,
        },
        {
          path:"/users",
          element:<Users />,
        },
        {
          path:"/removedUsers",
          element:<RemovedUsers />,
        }
      ]
    }
  ]
)




  return (
   <div>
    <RouterProvider router={router}/>
   </div>
  );
}

export default App;
