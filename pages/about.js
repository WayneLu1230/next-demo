import About from '../components/About';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(import('../components/About'), {
    ssr: false
})

const about = ()=> <DynamicComponentWithNoSSR/>

export default about;