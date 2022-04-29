import { ChangeEvent, memo } from 'react'
import { useCheckedList, usePrefectures } from '../lib/hooks'

export function PrefecturesList() {
  const { pref, loading } = usePrefectures()
  const { handleCheck } = useCheckedList()
  return (
    <fieldset>
      <legend>都道府県</legend>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="pref-list-container">
          {pref?.result?.map((pref) => (
            <PrefectureItem
              key={pref.prefCode}
              pref={pref}
              handler={handleCheck}
            />
          ))}
        </div>
      )}
    </fieldset>
  )
}

type PrefectureItemProps = {
  pref: {
    prefName: string
    prefCode: number
  }
  handler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PrefectureItem = memo(function PrefectureComponent({
  pref,
  handler,
}: PrefectureItemProps) {
  const { prefName, prefCode } = pref
  return (
    <div className="pref-list-item">
      <input
        type={'checkbox'}
        id={prefName}
        value={prefCode}
        onChange={handler}
      />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
})
