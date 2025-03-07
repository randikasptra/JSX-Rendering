import MenuResto from './MenuResto.jsx'
import Header from './Header.jsx'
import TernaryOP from './TernaryOP.jsx'
import Object from './Object.jsx'
import Props from './Props.jsx'
import Buttons from './Buttons.jsx'
import UseState from './UseStatee.jsx'
import UseEffectt from './UseEffectt.jsx'

export default function App() {
  return (
    <>
      <Header />
      <MenuResto />
      <TernaryOP />
      <Object />
      {/* <Buttons /> */}
      <UseState />
      <Props hari="Senin" mood="😂" bulan="January" />
      <hr /> 
      <Props hari="Selasa" mood="😊" bulan="February" />
      <UseEffectt />

    </>
  )
}