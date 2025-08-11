import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { createShort } from '../firebase'

export default () => {
  const [url, setURL] = useState('')
  const [short, setShort] = useState('')

  return (
    <>
      <div className='container'>
        <input type='text' placeholder='Enter URL' className='url-field' onChange={(e) => setURL(e.target.value)}/>
        <input type='text' placeholder='Enter short url' className='short-field' onChange={(e) => setShort(e.target.value)}/>

        <div className='buttons'>
          <Button className='go-btn' onClick={() => createShort(url, short)}>GO</Button>
        </div>
      </div>
    </>
  )
}
