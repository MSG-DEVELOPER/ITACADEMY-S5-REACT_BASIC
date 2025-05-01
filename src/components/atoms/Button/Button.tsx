import css from'./Button.module.css'

interface buttonProps{

    children:string;
    clas?: keyof typeof css;
}

function Button(props:buttonProps) {
    
  const FinalClass = props.clas ? css[props.clas] : "";
  return (

    <>
      <button className={FinalClass}>{props.children}</button>
    </>
  )
}

export default Button;