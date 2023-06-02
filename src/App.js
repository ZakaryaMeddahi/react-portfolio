import './App.css';
import Header from './Components/header';
import Body from './Components/body';
import Project from './Components/project';
import Footer from './Components/footer';
import About from './Components/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
