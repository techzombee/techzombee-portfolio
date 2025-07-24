import SnsIcons from '@/components/nav/SnsIcons'
import PageWithScrollSpyLayout from '@/components/layout/PageWithScrollSpyLayout'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'

export default function Home() {
  return (
    <PageWithScrollSpyLayout>
      <div className="flex justify-center mb-6">
        <SnsIcons />
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </PageWithScrollSpyLayout>    
  )
}