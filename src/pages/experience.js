import Layout from '../components/layout'
import Experience from '../components/selectedComponents/experience'


export default function ExperiencePage() {
  return (
    <Layout >
      <div className='py-16 md:py-48'>
        <div className='mx-4 md:mx-12 lg:mx-24 arrowExperience'></div>
      <Experience />
      </div>
    </Layout>
  )
}