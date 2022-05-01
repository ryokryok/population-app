import { ChangeEvent, memo } from 'react'
import { PrefecturesCode } from '../lib/client'

type PrefecturesListProps = {
  prefectures: PrefecturesCode[] | null
  itemHadnler: (event: ChangeEvent<HTMLInputElement>) => void
  itemChecked: number
}

export function PrefecturesList({
  prefectures,
  itemHadnler,
  itemChecked,
}: PrefecturesListProps) {
  return (
    <div className="pref-list-container">
      {prefectures ? (
        prefectures.map((pref) => (
          <PrefectureItem
            key={pref.prefCode}
            pref={pref}
            handler={itemHadnler}
            checkedValue={itemChecked}
          />
        ))
      ) : (
        <div>データ取得エラーです。ブラウザを再度リロードしてください。</div>
      )}
    </div>
  )
}

type PrefectureItemProps = {
  pref: {
    prefName: string
    prefCode: number
  }
  handler: (e: ChangeEvent<HTMLInputElement>) => void
  checkedValue: number
}

export const PrefectureItem = memo(function PrefectureComponent({
  pref,
  handler,
  checkedValue,
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
        defaultChecked={prefCode === checkedValue}
      />
      <label htmlFor={prefName} className="pref-list-item-label">
        {prefName}
      </label>
    </div>
  )
})
