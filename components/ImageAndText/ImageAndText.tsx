import Container from '../global/Container/Container'
import UseWidth from '../../tool/WindowWidthHandler'
import Mobile from './Mobile'
import NotMobile from './NotMobile'

import s from './ImageAndText.module.sass'

interface IDownloadLink {
  id: string,
  iconSrc: string,
  iconTitle: string,
  iconAlt: string,
  href: string
}

interface IImageAndText {
  data: {
    icon: {
      src:  string
      title:  string
      alt:  string 
    }
    introduceText:  string
    header:  string
    imageData: {
      srcMobile:  string
      srcTablet: string
      srcDesktop:  string
      title:  string
      alt:  string
    }
    description:  string
    text:  string
    btnText:  string
    downloadLinks: IDownloadLink[]
  }
}

function ImageAndText({data}: IImageAndText) {

  const currentScreenWidth = UseWidth()
  const {
    icon,
    introduceText,
    header,
    imageData,
    description,
    text,
    btnText,
    downloadLinks
  } = data
  const {src: iconSrc, alt: iconAlt, title: iconTitle} = icon
  const {srcMobile, srcTablet, srcDesktop, title: imageTitle, alt: imageAlt} = imageData

  return <section className={s.section}>

    <Container>

      {
        currentScreenWidth < 575 && <Mobile 
          imageSrc={srcMobile}
          imageTitle={imageTitle}
          imageAlt={imageAlt}
          iconSrc={iconSrc}
          iconAlt={iconAlt}
          iconTitle={iconTitle}
          introduceText={introduceText}
          header={header}
          description={description}
          text={text}
          btnText={btnText}
          downloadLinks={downloadLinks}
        />
      }

      {
        currentScreenWidth > 576 && <NotMobile 
          imageSrc={currentScreenWidth < 991 ? srcTablet : srcDesktop}
          imageTitle={imageTitle}
          imageAlt={imageAlt}
          iconSrc={iconSrc}
          iconAlt={iconAlt}
          iconTitle={iconTitle}
          introduceText={introduceText}
          header={header}
          description={description}
          text={text}
          btnText={btnText}
          downloadLinks={downloadLinks}
        />
      }
      
    </Container>

  </section>
}

export default ImageAndText