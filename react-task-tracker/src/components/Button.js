import PropTypes from 'prop-types'
export const Button = ({text}) => {
  const onClick = ()=>{
    console.log('Clicked')
  }
  return (
    <button onClick={onClick} className='btn'>{text}</button>
  )
}

Button.PropTypes = {
    
}
