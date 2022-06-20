import s from './Headline.module.sass'

interface IHeadline {
  iconSrc: string
  iconAlt: string
  iconTitle: string
  introduceText: string
  header: string
  iconStyle: "grey" | "blue"
  headerStyle: "blue" | "colored" | "white"
}

function Headline({
    iconSrc,
    iconAlt,
    iconTitle,
    introduceText,
    header,
    iconStyle = "grey",
    headerStyle = "colored"
  }: IHeadline) {

  function decideClassInnerDiv() {
    if (iconStyle === 'grey') return s.innerDiv
    if (iconStyle === 'blue') return s.blue

    return s.innerDiv
  }

  function decideClassHeader() {
    if (headerStyle === 'colored') return `${s.coloredHeader} gradient`
    if (headerStyle === 'blue') return `${s.blueHeader}`
    if (headerStyle === 'white') return `${s.whiteHeader}`

    return `${s.coloredHeader} gradient`
  }

  return <div className={s.wrapper}>

    {iconSrc && introduceText && <div className={decideClassInnerDiv()}>
      
      <img 
        src={iconSrc}
        title={iconTitle}
        alt={iconAlt}
        className={s.img}
      />

      <h4 className={s.introduceText}>
        {introduceText}
      </h4>

    </div>}

    {header && <h2 className={decideClassHeader()}>
      {header}
    </h2>}

  </div>
}

export default Headline