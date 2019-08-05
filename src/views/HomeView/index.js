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
    <NavbarSection />
    <IntroSection />
    <AgentSection />
    <PricingSection />
    <LaunchSection />
    <MonitorSection />
    <PaySection />
    <SignupSection />
    <FooterSection />
  </Layout>
);

export default HomeView;
