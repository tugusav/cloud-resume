import React from 'react'
import Header from '@/app/components/header'
import Intro from '@/app/components/intro'
import SectionDivider from './components/section_divider'
import About from './components/about'
import Projects from './components/projects'
import Visitor from './components/visitor'
import Skills from './components/skills'
import Experiences from './components/experiences'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro/>
    <Visitor/>
    <SectionDivider/>
    <About/>
    <Projects/>
    <Skills/>
    <Experiences/>
    <Contact/>
    </main>
  )
}
