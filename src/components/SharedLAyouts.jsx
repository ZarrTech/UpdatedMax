import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from '../components'

const SharedLAyouts = () => {

  return (
      <>
          <Navbar />
          <Outlet/>
          <Footer/>
      </>
  )
}
export default SharedLAyouts