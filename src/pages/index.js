import Layout from '../components/layout'
import Presentation from '../components/selectedComponents/presentation'
import { SkillContextProvider} from "../context/skillContext"

export default function Home() {
  return (
    <Layout >
      <SkillContextProvider>
        <Presentation />
      </SkillContextProvider> 
    </Layout>
  )
}
