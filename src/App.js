import './App.css';
import './componentCSS/header.css'
import './componentCSS/main.css'
import './componentCSS/footer.css'
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
