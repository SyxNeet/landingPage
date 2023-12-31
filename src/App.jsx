import { ArrowDownOutlined } from '@ant-design/icons'
import './App.scss'
import Footer from './components/Footer/Footer'
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'

function App() {

  return (
    <div className='app'>
      <HeaderNavbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

export default App
