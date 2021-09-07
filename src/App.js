import './App.css';
import Catimage from './catCard/catImage';

function App() {
  return (
    <div className="App">
      <h1>Welcome Cats</h1>
      <Catimage image1={image1}/>
    </div>
  );
}

const image1 = {
  image: "https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  image2: "https://images.unsplash.com/photo-1548707519-d9908cfebe7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1313&q=80%22",
  title: "Leon",
  description: "Hi! I'm a white cat",
  question: "what do you want to tell me?",
  title1: "Louis",
  description1: "Hi! I'm a white cat",
  question1: "what do you want to tell me?"
}


export default App;
