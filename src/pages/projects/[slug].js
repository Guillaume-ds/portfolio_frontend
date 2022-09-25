import Layout from '../../components/layout'
import ProjectsPresentation from '../../components/selectedComponents/projects/projectPresentation'
import { useRouter } from 'next/router'

export default function ProjectsPage() {
  const router = useRouter()
  const slug = router.query.slug
  return (
    <Layout >            
      <ProjectsPresentation slug={slug}/>
    </Layout>
  )
}