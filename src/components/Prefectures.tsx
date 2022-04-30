import { ChangeEvent, memo } from 'react'
import { PrefecturesCode } from '../lib/client'

type PrefecturesListProps = {
  prefectures: PrefecturesCode[] | null
  itemHadnler: (event: ChangeEvent<HTMLInputElement>) => void
}

export function PrefecturesList({
  prefectures,
  itemHadnler,
}: PrefecturesListProps) {
  return (
    <div className="pref-list-container">
      {prefectures?.map((pref) => (
        <PrefectureItem key={pref.prefCode} pref={pref} handler={itemHadnler} />
      ))}
    </div>
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
        type={'radio'}
        name={'perfecture'}
        id={prefName}
        value={prefCode}
        onChange={handler}
      />
      <label htmlFor={prefName}>{prefName}</label>
    </div>
  )
})
