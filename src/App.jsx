import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
 
  return (
    <>
     <NavBar/> 
     <ItemListContainer bienvenida="Bienvenid@s!!!" presentacion="El rincon de los sabores"/>
    </>
  )
}

export default App
