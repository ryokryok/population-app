import { useState, useEffect, ChangeEvent, useCallback } from 'react'
import {
  PrefecturesCode,
  fetchPrefecturesCode,
  fetchPopulation,
  PopulationData,
} from './client'

export function usePrefectures() {
  const [prefectures, setPrefectures] = useState<PrefecturesCode[] | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchPrefecturesCode()
      .then((res) => {
        if (res !== undefined) {
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

export function useTotalPopulation(prefCode: number) {
  const [population, setPopulation] = useState<PopulationData[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPopulation({ prefCode, cityCode: '-', addArea: '' })
      .then((res) => {
        const totalPopulationData = res?.result.data.find(
          (d) => d.label === '総人口'
        )
        if (totalPopulationData !== undefined) {
          setPopulation(totalPopulationData.data)
          setLoading(false)
        } else {
          new Error('nothing data')
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [prefCode])

  return { population, loading }
}

export function useCheckedList(prefCode = 0) {
  const [checked, setChecked] = useState<number>(prefCode)
  const handleCheck = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setChecked(Number(event.target.value))
  }, [])

  return { checked, handleCheck }
}
