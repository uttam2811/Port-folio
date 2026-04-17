import { useState } from 'react'
import { LangProvider } from './context/LangContext'
import Cursor   from './components/Cursor'
import Loader   from './components/Loader'
import HUD      from './components/HUD'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Projects from './components/Projects'
import Profile  from './components/Profile'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <LangProvider>
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {loaded && (
        <>
          <HUD />
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Profile />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </LangProvider>
  )
}
