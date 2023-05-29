import './App.css';
import QuizGame from './componenets/quize/QuizGame';
import Navbar from "./componenets/navbar/Navbar"
import Footer from "./componenets/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuizGame />
      <Footer />
    </div>
  );
}

export default App;
