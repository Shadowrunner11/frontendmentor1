import './App.css';
import JobBoard from './containers/JobBoard';
import job from '/mock/data.json';

function App() {
  return (
    <div className="App">
      <JobBoard jobs={job}/>
    </div>
  );
}

export default App;
