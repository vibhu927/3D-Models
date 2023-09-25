

import CarViewer from './CarViewer'
import './App.css'

function App() {


  return (
    <>
      <nav className="bg-lav p-3">
        <a className="navbar-brand text-white" href="#">Car Showcase</a>

      </nav>


      <div className="container-fluid">
        <div className="row">
          <div className="col-6 car-dashboard">
            <CarViewer />
          </div>
          <div className="col-6 car-dashboard">
            <div className="info mt-5">
              <h2>Car Name</h2>
              <p>Price: $XX,XXX</p>
              <p>Specifications:</p>
              <ul>
                <li>Spec 1</li>
                <li>Spec 2</li>
                <li>Spec 3</li>

              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="container about-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget augue quis elit cursus aliquet.</p>

      </div>


      <footer className="container-fluid">
        <div className="text-center p-3">
          <p>Follow Us:</p>

          <p>Visit Us:</p>

        </div>
      </footer>
    </>
  )
}

export default App
