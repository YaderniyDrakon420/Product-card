import './App.css'
import Prod from './components/product/product'
import jsImg from './assets/js.jpg'
import jsImg2 from './assets/js2.png'
import jsImg3 from './assets/js3.jpg'

function App() {
  return(
    <div className="card-container">
      <Prod Image={jsImg} Title='Javascript для дітей - Морган Хік' Price='896₴' />
      <Prod Image={jsImg2} Title='JavaScript. Полное руководство — David Flanagan' Price='1040₴' />
      <Prod Image={jsImg3} Title='Современный учебник JavaScript — Илья Кантор' Price='331₴' />
    </div>
  )
}

export default App
