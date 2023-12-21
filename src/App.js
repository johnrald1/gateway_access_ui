// import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer'
import ContentInformation from './component/ContentInformation'
import Header from './component/header'


function App() {
  return (
    <div className="App">
      <Header/>
        <ContentInformation/>
        <Footer/>
    </div>
  );
}

export default App;
