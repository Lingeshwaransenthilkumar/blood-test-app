import Details from "./components/details/details";
import Display from "./components/img-display/display";
import Navbar from "./components/navbar/navbar";
import "./App.css";


function App(){
  return(
    <>
    <section className="main">
      <Navbar/>
      <div className="content">
        <Details/>
        <Display/>
      </div>
    </section>
    </>
  )
}


export default App;