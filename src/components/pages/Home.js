import React from 'react'
import Header from './landingPage/Header'
import TopSection from './landingPage/TopSection'
import SelectionSection from './landingPage/SelectionSection/SelectionSection'
import Projects from './landingPage/Projects'
import Footer from './landingPage/Footer'

const Home = () => {
    return (
        <>
            {/* <AccordionComp />
      <EmbededGrid /> */}
            <Header />
            <TopSection />
            {/* <AboutSection /> */}
            <SelectionSection />
            <Projects />
            {/* <ContactUs /> */}
            <Footer />

            {/* <TopSection /> */}
        </>
    )
}

export default Home