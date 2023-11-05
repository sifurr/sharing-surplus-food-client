import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <MainLayout>

        <Outlet></Outlet>
      </MainLayout>     
      <div><Toaster/></div>
    </>
  )
}

export default App
