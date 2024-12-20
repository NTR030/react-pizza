import { Link } from 'react-router'

function Header() {
  return (
    <header className="h-16 flex items-center  px-4">
      Header
      <Link to="/">Home</Link>
    </header>
  )
}

export default Header
