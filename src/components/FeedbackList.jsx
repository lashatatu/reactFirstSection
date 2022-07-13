import FeedbackItem from './FeedbackItem'
import { logDOM } from '@testing-library/react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = ({handleDelete}) => {
  const {feedback}=useContext(FeedbackContext)
  if ( !feedback || feedback.length === 0 ) {
    return <p>no feedback yet</p>
  }
  return (
    <div className={'feedback-list'}>
      {feedback.map((item) =>
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>,
      )}
    </div>
  )
}

export default FeedbackList