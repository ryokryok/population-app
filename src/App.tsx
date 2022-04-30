import { PrefecturesList } from './components/Prefectures'
import { SiteTitle } from './components/Title'
import { Chart } from './components/Chart'
import { useCheckedList, usePrefectures } from './lib/hooks'

function App() {
  const { prefectures, loading } = usePrefectures()
  const { checked, handleCheck } = useCheckedList()
  return (
    <>
      <header>
        <SiteTitle title="総人口推移" />
      </header>
      <main className="main-container">
        <fieldset>
          <legend>都道府県</legend>
          {loading ? (
            <div>loading...</div>
          ) : (
            <PrefecturesList
              prefectures={prefectures}
              itemHadnler={handleCheck}
            />
          )}
        </fieldset>
        <Chart code={checked} />
      </main>
      <footer></footer>
    </>
  )
}

export default App
