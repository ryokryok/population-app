import { PrefecturesList } from './components/Prefectures'
import { SiteTitle } from './components/Title'

function App() {
  return (
    <>
      <header>
        <SiteTitle title="総人口推移" />
      </header>
      <main>
        <PrefecturesList />
      </main>
      <footer></footer>
    </>
  )
}

export default App
