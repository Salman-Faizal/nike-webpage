import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants/';


const Nav = () => {
  return (
    <header className='absolute padding-x py-8 z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <img
          src={headerLogo}
          alt="logo"
          width={130}
          height={30}
        />
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <img src={hamburger}
        alt="menu-icon"
        height={25}
        width={25}
        className='hidden max-lg:block' />
      </nav>
    </header>
  )
}

export default Nav;