import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Chart from './components/Chart/Chart';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TodoDetail from './components/TodoDetail/TodoDetail';
import { createContext } from 'react';

export const TodoContext = createContext('todo');

function App() {
  const aboutUs = "This a Todos website";
  return (
    <TodoContext.Provider value={aboutUs}>
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contract" element={<Contract />}></Route>
            <Route path="/chart" element={<Chart />}></Route>
            <Route path="/todos/:todoNo" element={<TodoDetail />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </TodoContext.Provider>
    
  );
}

export default App;
