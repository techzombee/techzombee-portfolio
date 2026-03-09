import Head from 'next/head'
import PageWithScrollSpyLayout from '@/components/layout/PageWithScrollSpyLayout'
import ProfileHeader from '@/components/sections/ProfileHeader'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import EducationSection from '@/components/sections/EducationSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Heechan Cho</title>
        <meta name="description" content="Software Engineer specializing in iOS and full-stack development. Experience in production banking systems, e-commerce platforms, and AI automation." />
        <link rel="canonical" href="https://heechancho.com" />
        <meta property="og:title" content="Heechan Cho" />
        <meta property="og:description" content="Software Engineer specializing in iOS and full-stack development. Experience in production banking systems, e-commerce platforms, and AI automation." />
        <meta property="og:url" content="https://heechancho.com" />
        <meta property="og:type" content="website" />
      </Head>
      <PageWithScrollSpyLayout>
      <ProfileHeader />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </PageWithScrollSpyLayout>
    </>
  )
}