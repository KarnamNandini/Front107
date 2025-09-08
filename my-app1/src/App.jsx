
const Home = () => {
  return (
    <div>
      <h2>Home component</h2>
    </div>

  )
}

const About = () => {
  return (
    <div>
      <h3>About component</h3>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h4>Contact component</h4>
    </div>
  )
}

const App = () => {
  const now = new Date()
  console.log("Welcome to component!")
  const a=10
  const b=20
  return(
    <div>
      <h1>
        congratulation, You completed first react app
      </h1>
      <p> Hello Time = {now.toString()} </p>
      <p> {a} + {b} = {a+b} </p>
      <Home />
      <About />
      <Contact />
    </div>
  )
}
export default App;