import PersonCard from './components/PersonCard'
import './App.css';

function App() {
  return (
    <div className="App">
        <PersonCard firstName = 'Charles' lastName = 'Xavier' age = {59} hairColor = 'bald'/>
        <PersonCard firstName = 'Max' lastName = 'Eisenhardt' age = {59} hairColor = 'grey'/>
        <PersonCard firstName = 'William' lastName = 'Kaplan' age = {21} hairColor = 'dark brown'/>
        <PersonCard firstName = 'Theodore' lastName = 'Altman' age = {21} hairColor = 'blonde'/>
    </div>
  );
}

export default App;
