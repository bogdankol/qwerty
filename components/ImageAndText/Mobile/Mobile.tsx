import IconTextWithHeader from "../../IconTextWithHeader"
import DivWithImage from "../DivWithImage"
import Description from "../Description"
import Button from '../../Button'
import DownloadAppLinks from "../../DownloadAppLinks"

import s from './Mobile.module.sass'

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
    downloadLinks
  }: any) {

  return <div className={s.div}>

    <IconTextWithHeader 
      iconSrc={iconSrc}
      iconAlt={iconAlt}
      iconTitle={iconTitle}
      introduceText={introduceText}
      header={header}
      iconStyle="blue"
      headerStyle="blue"
    />

    <DivWithImage 
      imageSrc={imageSrc}
      imageTitle={imageTitle}
      imageAlt={imageAlt}
    />

    <Description 
      description={description}
      text={text}
    />

    <Button btnText={btnText} />

    <DownloadAppLinks 
      downloadLinks={downloadLinks}
    />

  </div>
}

export default Mobile