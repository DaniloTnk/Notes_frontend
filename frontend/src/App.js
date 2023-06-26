import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage'
import{
  BrowserRouter, Route, Routes, withRouter
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<NoteListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
