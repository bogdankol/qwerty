import s from './DownloadAppLinks.module.sass'

function DownloadAppLinks({ downloadLinks }: any) {
  return <ul className={s.list}>
    {downloadLinks.map(({
        id,
        iconSrc,
        iconTitle,
        iconAlt,
        href
    }: any) => {
      return <li 
        key={id}
        className={s.item}
      >
        <a href={href} target="_blank">
          <img 
            className={s.image}
            src={iconSrc}
            title={iconTitle}
            alt={iconAlt}
          />
        </a>
      </li>
    })}
  </ul>
}

export default DownloadAppLinks