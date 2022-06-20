import type { NextPage } from 'next'

import ImageAndText from '../components/ImageAndText'
import data from '../public/data/pages/main-page/ImageAndText/data.json'

const Home: NextPage = () => {

  return <>
    <ImageAndText data={data} />
  </>
}

export default Home