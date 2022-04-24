import { useState, useEffect } from 'react'
import { PrefecturesCode, fetchPrefecturesCode } from '.'

export function usePrefectures() {
  const [pref, setPref] = useState<PrefecturesCode | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchPrefecturesCode()
      .then((res) => {
        if (res !== undefined) {
          console.log(res)
          setPref(res)
          setLoading(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }, [])

  return { pref, loading }
}
