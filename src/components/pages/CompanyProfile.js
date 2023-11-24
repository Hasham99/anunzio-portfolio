import React from 'react'
import Header from '../pages/landingPage/Header'
import Footer from '../pages/landingPage/Footer'
import TopSection from '../pages/landingPage/TopSection'
import CompanyProfileSection from './landingPage/CompanyProfileSection'

const CompanyProfile = () => {
    return (
        <>
            <Header />
            <TopSection />
            <CompanyProfileSection />
            <Footer />
        </>
    )
}

export default CompanyProfile