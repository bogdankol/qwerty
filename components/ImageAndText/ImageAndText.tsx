import { useState, useEffect } from 'react'

import UseWidth from '../../tool/WindowWidthHandler'
import Mobile from './Mobile'
import NotMobile from './NotMobile'

import s from './ImageAndText.module.sass'
import Container from '../global/Container/Container'

function ImageAndText({data}: any) {
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