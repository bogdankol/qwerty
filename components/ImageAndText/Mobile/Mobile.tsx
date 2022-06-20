import Headline from "../../Headline"
import DivWithImage from "../DivWithImage"
import Description from "../Description"
import Button from '../../Button'
import DownloadAppLinks from "../../DownloadAppLinks"

import s from './Mobile.module.sass'

interface IMobile {
  imageSrc: string
  imageTitle: string
  imageAlt: string
  iconSrc: string
  iconAlt: string
  iconTitle: string
  introduceText: string
  header: string
  description: string
  text: string
  btnText: string
  downloadLinksMobile: {
    id: string,
    iconSrc: string,
    iconTitle: string,
    iconAlt: string,
    href: string
  }[]
}

function Mobile({
    imageSrc,
    imageTitle,
    imageAlt,
    iconSrc,
    iconAlt,
    iconTitle,
    introduceText,
    header,
    description,
    text,
    btnText,
    downloadLinksMobile
  }: IMobile) {

  return <div className={s.div}>

    <Headline 
      iconSrc={iconSrc}
      iconAlt={iconAlt}
      iconTitle={iconTitle}
      introduceText={introduceText}
      header={header}
      iconStyle="grey"
      headerStyle="colored"
    />

    <DivWithImage 
      imageSrc={imageSrc}
      imageTitle={imageTitle}
      imageAlt={imageAlt}
    />

    <Description 
      description={description}
      text={text}
      textStyle="grey-dark"
    />

    <Button btnText={btnText} />

    <DownloadAppLinks 
      downloadLinksMobile={downloadLinksMobile}
    />

  </div>
}

export default Mobile