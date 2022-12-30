import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format'
import Section1 from '../components/section1'
import Browsectg from '../components/browsectg'
import Homecards from '../components/homecards'

export default function Home() {
  return (
    <Format>
     <Section1></Section1>
     <Browsectg></Browsectg>  
     <Homecards></Homecards>  
    </Format>
  )
}
