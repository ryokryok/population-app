import { usePrefectures } from '../lib/hooks'

export function PrefecturesList() {
  const { pref, loading } = usePrefectures()
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <fieldset>
          <legend>都道府県</legend>
          <div className="pref-list-container">
            {pref?.result?.map((pref) => (
              <div key={pref.prefCode} className="pref-list-item">
                <input type={'checkbox'} id={pref.prefName} />
                <label htmlFor={pref.prefName}>{pref.prefName}</label>
              </div>
            ))}
          </div>
        </fieldset>
      )}
    </>
  )
}
