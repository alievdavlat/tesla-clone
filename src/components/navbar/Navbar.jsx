import React from 'react'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import { sidebar } from '../sideBar/SideBar'
function Navbar() {
  
  const [sideBar , setSideBar] = React.useState(false)
  
  return (
    <nav className='navbar'>
        <Link href={'/'}>
          <img src="/images/logo.svg" className='teslaLogo' alt=" tesla logo" loading='lazy' />
        </Link>

        <ul className='navbarnav'>
          <li className='navbarnav-items'>
            <a href="#" className='itemsLink'>
              Model S
            </a>
          </li>

          <li className='navbarnav-items'>
            <a href="#" className='itemsLink'>
              Model 3
            </a>
          </li>

          <li className='navbarnav-items'>
            <a href="#"className='itemsLink'>
              Model X
            </a>
          </li>

          <li className='navbarnav-items'>
            <a href="#" className='itemsLink'>
              Model Y
            </a>
          </li>

          <li className='navbarnav-items'>
            <a href="#" className='itemsLink'>
             Solor Roof
            </a>
          </li>

          <li className='navbarnav-items'>
            <a href="#" className='itemsLink'>
              Solor Panels
            </a>
          </li>

        </ul>

        <div  className='navbarnav-menu'>
        <li className='navbarnav-items'>
            <a href="#" className='itemsLink'>
              Shop
            </a>
          </li>

          <li className='navbarnav-items'>
            <a href="#" className='itemsLink'>
             Account
            </a>
          </li>

          <li className='navbarnav-items' onClick={() => setSideBar(!sideBar)}>
            <a href="#" className='itemsLink'>
              Menu
            </a>
          </li>
        </div>


        <div className={sideBar ? 'side-menu active' : 'side-menu'} >
            <CloseIcon className='close-icon' onClick={() => setSideBar(!sideBar)} sx={{cursor:'pointer'}} />

          <ul className='sideBarNAv'>
            {sidebar.map((item, idx) => <li className='hamburgerLinks' key={idx}> <Link href={item.path}>{item.title}</Link> </li>)}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
