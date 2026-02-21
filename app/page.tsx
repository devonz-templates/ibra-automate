"use client"

import { useEffect, useState } from "react"
import FloatingSidebar from "@/components/floating-sidebar"
import HeroSectionNew from "@/components/hero-section-new"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section-visual"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import LatestBlogsSection from "@/components/latest-blogs-section"
import AIChatSection from "@/components/ai-chat-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollAnimations from "@/components/scroll-animations"
import GlobalBackground from "@/components/global-background"
import SectionIndicators from "@/components/section-indicators"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <GlobalBackground />
      <FloatingSidebar />
      <SectionIndicators />
      <HeroSectionNew />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <AIChatSection />
      <LatestBlogsSection />
      <ContactSection />
      <Footer />
      <ScrollAnimations />
    </main>
  )
}
