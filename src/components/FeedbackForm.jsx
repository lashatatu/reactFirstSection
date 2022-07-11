import Card from './shared/Card'
import { useState } from 'react'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const handleTextChange=(e)=>{
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>rate your service</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder={'write review'} value={text}/>
          <button type={'submit'}>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm