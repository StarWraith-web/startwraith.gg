import React from 'react'
import "./Tiers.scss"
import { ComingSoon, Footer, SocialSection, TopBar } from '../../components'

export function Tiers() {
  return (
    <div className="container">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="main-content">
        <ComingSoon day="30" month="6" />
      </div>
      <div className="bottom-section">
        <div className="social-section">
          <SocialSection />
        </div>
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  )
}