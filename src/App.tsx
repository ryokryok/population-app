import { PrefecturesList } from './components/Prefectures'
import { SiteTitle } from './components/Title'
import { Chart } from './components/Chart'
import { useCheckedList, usePrefectures } from './lib/hooks'

function App() {
  const TOKYO_PERF_CODE = 13
  const { prefectures, loading } = usePrefectures()
  const { checked, handleCheck } = useCheckedList(TOKYO_PERF_CODE)
  return (
    <>
      <header>
        <SiteTitle title="総人口推移" />
      </header>
      <main className="main-container">
        <fieldset className="pref-list">
          <legend className="pref-list-label">都道府県</legend>
          {loading ? (
            <div>loading...</div>
          ) : (
            <PrefecturesList
              prefectures={prefectures}
              itemHadnler={handleCheck}
              itemChecked={checked}
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
