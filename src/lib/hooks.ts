import { useState, useEffect, ChangeEvent, useCallback } from 'react'
import { PrefecturesCode, fetchPrefecturesCode } from './client'

export function usePrefectures() {
  const [prefectures, setPrefectures] = useState<PrefecturesCode[] | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchPrefecturesCode()
      .then((res) => {
        if (res !== undefined) {
          console.log(res.result)
          setPrefectures(res.result)
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  return { prefectures, loading }
}

export function useCheckedList() {
  const [checkedList, setCheckedList] = useState<number[]>([])
  const handleCheck = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckedList([...checkedList, Number(event.target.value)])
    } else {
      setCheckedList(
        checkedList.filter((value) => value !== Number(event.target.value))
      )
    }
  }, [])

  return { checkedList, handleCheck }
}
