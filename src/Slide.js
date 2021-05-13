import './App.css';

const App = () => {
  const showMessage = () =>{
    alert('Hello');
  }
    return (
      <div className="App" id = "root" onClick={showMessage}>
        HelloReact
      </div>
    );
}

export default App;
