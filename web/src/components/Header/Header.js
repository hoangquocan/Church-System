import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'

import logo from 'src/Assets/images/Logo.png'
import './Header.scss'

const Header = () => {
  const { loading, isAuthenticated, logIn, logOut, currentUser, userMetadata } =
    useAuth()

  if (loading) {
    return null
  }
  // console.log(currentUser)
  // console.log(userMetadata)
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        <Link to={routes.home()}>
        <img src={logo} alt="VGM" />
        </Link>
      </div>

      <div className="header-search">
        <input placeholder="Tìm Nhanh" spellCheck={false} />
        <button className='search-clear'>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <button className="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <div className="header-login">
        <button
          onClick={async () => {
            if (isAuthenticated) {
              await logOut()
              navigate('/')
            } else {
              await logIn()
            }
          }}
        >
          {isAuthenticated ? 'Log out' : 'Log in'}
        </button>
      </div>
    </div>
  )
}

export default Header
