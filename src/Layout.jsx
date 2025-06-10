import { Outlet } from 'react-router'
import Header from './components/Header'

function Layout() {

  return (
    <>
      <header>
        <Header/>
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
