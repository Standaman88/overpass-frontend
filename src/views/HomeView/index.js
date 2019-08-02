import React from 'react'
import Layout from '../../components/Layout'
import NavbarSection from '../../components/NavbarSection'
import IntroSection from '../../components/IntroSection'
import AgentSection from '../../components/AgentSection'
import PricingSection from '../../components/PricingSection'
import LaunchSection from '../../components/LaunchSection'
import MonitorSection from '../../components/MonitorSection'
import PaySection from '../../components/PaySection'
import SignupSection from '../../components/SignupSection'
import FooterSection from '../../components/FooterSection'

const HomeView = () => (
  <Layout>
    <section id="navbar" className="bg-primary"></section>
    <NavbarSection className="bg-primary" />
    <IntroSection className="bg-primary" />
    <AgentSection />
    <PricingSection className="bg-light" />
    <LaunchSection />
    <MonitorSection className="bg-primary-light" />
    <PaySection />
    <SignupSection className="bg-primary" />
    <FooterSection className="bg-dark" />
  </Layout>
);

export default HomeView;
