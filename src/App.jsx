import './App.css'
import Index from './components/Index'
import Player from './components/Main/Player'

function App() {


  return (
    <>
      <div className="App">
        {/* <Options className='App-Options' /> */}
        <Index className='App-Index' />
      </div>
      <Player />
    </>
  )
}

export default App
