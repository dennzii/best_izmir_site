import logo_normal from "../assets/logo_normal.png";
import {navLinks} from "../constants"

export const Nav = () => {
  return (
   <header className="padding-x py-5 px-5 z-10 absolute w-full  ">
    <nav className="flex justify-between items-center">
      <a href="/">
      <img className=""
      src={logo_normal}
      alt="Logo"
      width={130}
      height={130}>
      </img>
      </a>
      
      <ul className="flex-1 flex justify-end items-end gap-16 max-lg:hidden mr-20">
        {navLinks.map(item => (
          <li key={item.label}>
            <a href={item.href} className="font-montserrat  leading-normal text-lg text-slate-gray">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
   </header>
  )
}
