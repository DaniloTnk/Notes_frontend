import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage'
import{
  BrowserRouter, Route, Routes
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<NoteListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
