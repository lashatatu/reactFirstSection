import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const handleTextChange=(e)=>{
    if(text===''){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text!==''&&text.trim().length<=10){
      setMessage('text must be at least 10 characters')
      setBtnDisabled(true)
    }else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>rate your service</h2>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder={'write review'} value={text}/>
          <Button type={'submit'} isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className={'message'}>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm