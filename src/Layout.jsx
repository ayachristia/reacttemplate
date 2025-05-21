import Navigation from './components/Navigation'
import { Outlet } from 'react-router'

function Layout() {

  return (
    <>
      <header>
        <h1>My App</h1>
        <Navigation />
      </header>

      <main>
        < Outlet/>
      </main>

      <footer>
        <small>© 2023 Your Company</small>
        <p>All rights reserved.</p>
      </footer>
    </>
  )
}

export default Layout
