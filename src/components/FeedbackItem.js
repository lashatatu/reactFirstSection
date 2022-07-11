import { useState } from 'react'

const FeedbackItem = () => {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('this is an example of a feedback')
  const handleClick = () => {
    setRating((prevState) => {
      return prevState+1
    })
  }
  return (
    <div className={'card'}>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default FeedbackItem