import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='link-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'></div>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ?
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        )
                }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;