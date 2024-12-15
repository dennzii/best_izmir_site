import React from 'react'
import ReactCardFlip from 'react-card-flip';
import {useState} from 'react'

export const FlipCard = ({foto}) =>  {

  const [isFlipped,setIsFlipped] = useState(false)

  function flipCard(){
      setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                <div className='card ' onClick={flipCard}>
                    <div className='h-96'>ön
                      <img src={foto}></img>
                    </div>
                </div>
                <div className='card' onClick={flipCard}>
                <div className='h-96 bg-red-700'>arka</div>
                </div>
            </ReactCardFlip>
  )
}

export default FlipCard