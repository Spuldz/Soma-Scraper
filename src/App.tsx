import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import {Result} from './interfaces/resultInterface'
import {getResults} from './scraper/index'
import { Response } from './scraper/Response';
import './css/media.css';


function App() {

  const [data, setData] = useState<any>({});
  const [results, setResults] = useState<Response[]>([]);

  const handleSubmit = () => {
    setResults(getResults(JSON.parse(data)))
  }


  return (
    <div>
      <main>
         
          <div className='middle'>
              <label htmlFor='textarea'>Enter JSON here</label>
              <br/>
              <textarea id='textarea' onChange={(e) => setData(e.target.value)}></textarea>
              <br/>
          </div>
          <button className='submitBtn' onClick={handleSubmit}>Get answers</button>

          <br/>
          <div className='results-container'>
            {(results.map((ans:Response) => (
              <li className='li'>{ans.id + ": " + ans.answer}</li>
            )))}
          </div>
      </main>
    </div>
  )
}

export default App
