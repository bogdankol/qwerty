import s from './Button.module.sass'

function Button({ btnText }: any) {
  return (
    <div>
      <button className={s.button}>{btnText}</button>
    </div>
  )
}

export default Button