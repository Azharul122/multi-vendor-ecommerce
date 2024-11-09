import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './shared/Header/Header'
import Footer from './shared/Footer/Footer'

// interface props{
//   children:React.ReactNode
// }

function App() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
