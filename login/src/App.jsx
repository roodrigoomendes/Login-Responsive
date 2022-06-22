
import AccessCamp from './components/AccessCamp'
import ButtonAcess from './components/ButtonAcess'
import OptionsPassword from './components/OptionsPassword'
import Register from './components/Register'
import TitleHeader from './components/TitleHeader'
import './index.css'
import ImgLogin from './img/login.svg'

function App() {

  return (

    <div className=' flex justify-center items-center'>
      <div className=' hidden sm:block w-1/2'>
        <img className='w-4/5 mx-auto' src={ImgLogin} alt="" />
      </div>
      <div className=' mx-auto mt-10 w-96'>
        <TitleHeader />
        <AccessCamp TitleComponent={"Login"} TypeInput={"text"} PlaceInput={"Entre com seu usuario"} />
        <AccessCamp TitleComponent={"Senha"} TypeInput={"password"} PlaceInput={"Entre com sua senha"} />
        <OptionsPassword />
        <ButtonAcess />
        <Register />
      </div>
    </div>
  )
}

export default App
