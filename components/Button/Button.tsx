import s from './Button.module.sass'

interface IButton {
  btnText: string
}

function Button({ btnText }: IButton) {
  return <div>

    <button className={s.button}>{btnText}</button>
    
  </div>
}

export default Button