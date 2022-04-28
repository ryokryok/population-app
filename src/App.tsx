import { PrefecturesList } from './components/Prefectures'
import { SiteTitle } from './components/Title'
import { Chart } from './components/Chart'

function App() {
  return (
    <>
      <header>
        <SiteTitle title="総人口推移" />
      </header>
      <main>
        <PrefecturesList />
        <Chart data={[]} />
      </main>
      <footer></footer>
    </>
  )
}

export default App
