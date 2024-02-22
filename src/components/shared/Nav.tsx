import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import logo from '../../../public/favicon.png'

const Nav = () => {
  return (
    <header className="fixed z-50 bg-neutral-900/30 backdrop-blur-md w-full top-0 ">
        <nav className="flex justify-between items-center max-w-6xl mx-auto py-3 border-b border-neutral-700/50 px-3 text-gray-300">
            <Link to='/' className="flex gap-2 uppercase items-center ">
          <img className="w-8 h-8" src={logo} alt="A logo of url scanner" />   Url Scanner
            </Link>

           <Link target="_blank" to='https://github.com/thekarthikr/url-scanner'>
          <Button color="success" variant="solid" >
            Github
          </Button>
           </Link>
        </nav>
    </header>
  )
}

export default Nav