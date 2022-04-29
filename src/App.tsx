import { PrefecturesList } from './components/Prefectures'
import { SiteTitle } from './components/Title'
import { Chart } from './components/Chart'
import { useCheckedList, usePrefectures } from './lib/hooks'

function App() {
  const { prefectures, loading } = usePrefectures()
  const { checkedList, handleCheck } = useCheckedList()
  return (
    <>
      <header>
        <SiteTitle title="総人口推移" />
      </header>
      <main>
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

        <Chart data={[]} />
      </main>
      <footer></footer>
    </>
  )
}

export default App
