import './Button.css'

interface buttonProps{

    children:string;
    class?:string;
}

function Button(props:buttonProps) {
    
  return (

    <>
      <button className={`button--${props.class}`}>{props.children}</button>
    </>
  )
}

export default Button