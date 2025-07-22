// src/pages/Home.jsx
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div id="home">
      <section className="hero">
        <h2>Hi, I'm Atharv</h2>
        <p>Aspiring Web Developer</p>
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
