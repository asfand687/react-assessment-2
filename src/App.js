import { useEffect, useState } from 'react';
import Article from './Article';
import './index.css'

function App({articles}) {
  const [flag, setFlag] = useState(true)
  const sortedVotes = () => {
    let res = articles.sort((a, b) => b.upvotes - a.upvotes)
    return res
  }
  const sortedDate = () => {
    let res = articles.sort((a, b) => {
      let da = new Date(a.date),
          db = new Date(b.date)
      return db - da
    })
    return res
  }
  useEffect(() => {}, [flag])
  return (
    <div className="App">
      <div className="button-container">
        <button onClick = {() => setFlag(true)} >Upvotes</button>
        <button onClick={() => setFlag(false)}>Date</button>
      </div>
      <Article articles={flag ? sortedVotes() : sortedDate()} />
    </div>
  );
}

export default App;
