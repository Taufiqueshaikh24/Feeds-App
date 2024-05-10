import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , createRoutesFromElements , RouterProvider , Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import FeedsPage from './pages/FeedsPage.jsx';
import App from './App.jsx'
import './index.css'
import Myposts from './pages/Myposts.jsx';
import Main from './pages/Main.jsx';
import { StateProvider } from './Context/ContextApi.jsx';
import AdminPage from './pages/AdminPage.jsx';
import UpdatePage from './pages/UpdatePage.jsx';


const router = createBrowserRouter(
      createRoutesFromElements(
           <Route path='/' element={<App />}>
              
             <Route index={true} path='/' element={<Main />} />
             <Route path='/login' element={<Login />} />
             <Route path='/register' element={<Register />} />
             <Route path='/createFeeds' element={<FeedsPage  />} />
             <Route path='/createFeeds/:id' element={<UpdatePage  />} />
             <Route path='/myposts' element={<Myposts  />} />

             {/* Admin Route */}
             <Route path='/admin' element={<AdminPage/>} >

             </Route>


           </Route>
      )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <StateProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</StateProvider>
  </>
)
