import type { NextPage } from 'next'

import ImageAndText from '../components/ImageAndText'
import data from '../public/data/pages/main-page/ImageAndText/data.json'

const Home: NextPage = () => {

  return <>
    <ImageAndText data={data} />
  </>
 // don't forget to edit components to use through props
}

export default Home
