import PageWithScrollSpyLayout from '@/components/layout/PageWithScrollSpyLayout'
import ProfileHeader from '@/components/sections/ProfileHeader'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import EducationSection from '@/components/sections/EducationSection'

export default function Home() {
  return (
    <PageWithScrollSpyLayout>
      <ProfileHeader />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </PageWithScrollSpyLayout>
  )
}