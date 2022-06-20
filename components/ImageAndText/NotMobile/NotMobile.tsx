import IconTextWithHeader from "../../IconTextWithHeader"
import DivWithImage from "../DivWithImage"
import Description from "../Description"
import Button from '../../Button'
import DownloadAppLinks from "../../DownloadAppLinks"

import s from './NotMobile.module.sass'

function NotMobile({
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
  return (
    <section className={s.section}>

      <ul className={s.list}>

        <li className={s.item}>
          <DivWithImage 
            imageSrc={imageSrc}
            imageTitle={imageTitle}
            imageAlt={imageAlt}
          />
        </li>
        
        <li className={s.item}>
          <IconTextWithHeader 
            iconSrc={iconSrc}
            iconAlt={iconAlt}
            iconTitle={iconTitle}
            introduceText={introduceText}
            header={header}
          />

          <Description 
            description={description}
            text={text}
          />

          <Button btnText={btnText} />
        </li>

      </ul>

      <div>
        <DownloadAppLinks 
          downloadLinks={downloadLinks}
        />
      </div>
    

    </section>
  )
}

export default NotMobile