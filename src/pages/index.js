import Accessories from "@/components/accessories/Accessories"
import Hero from "@/components/hero/Hero"
import Navbar from "@/components/navbar/Navbar"
import Section from "@/components/section/Section"
import SolarPanels from "@/components/solarPanels/SolarPanels"
import Head from "next/head"

const sections = [
  {className:'modelY', name:'Model Y', id:1},
  {className:'modelS', name:'Model S', id:2},
  {className:'modelX', name:'Model X', id:3},
]

const solars = [
  {className:'solar1', name:'Solar Rooof',text:'Produce Clean Energy From Your Roof', id:1},
  {className:'solar2', name:'Solar Panels',text:'Lowest Cost Solar Panels in America', id:2},

]
export default function Home() {
  return (
    <>
    <Head>
      <title>
        tesla clone
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Navbar/>
    <Hero/>
    {
      sections.map((item) => <Section key={item.id} {...item} />)
    }
    {
      solars.map(item => <SolarPanels key={item.id}  {...item} />)
    }
    <Accessories/>
    </>
  )
}
