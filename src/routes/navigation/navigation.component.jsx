import { useContext } from 'react'

import { Outlet , Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.style.scss'

const Navigation = () => {
    const { currentUser , setCurrentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext);


    const signOut = () => {
      signOutUser()
      setCurrentUser(null)
    }
    return (
        <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? <span className='nav-link' onClick={signOut}>SIGN OUT</span>
            : (
              <Link className='nav-link' to='/sign-in'>
                SIGN IN
              </Link> 
            )
          }
          <CartIcon />
        </div>
         {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
        
    )
}

export default Navigation