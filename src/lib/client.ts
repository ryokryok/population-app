const BASE_URL = 'https://opendata.resas-portal.go.jp'

const defaultHeaders: { [name: string]: string } = {
  'Content-Type': 'application/json',
  'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
}

const RequestOptions = {
  method: 'GET',
  headers: defaultHeaders,
}

export type PrefecturesResult = {
  message: string | null
  result: PrefecturesCode[]
}

export type PrefecturesCode = {
  prefCode: number
  prefName: string
}

export async function fetchPrefecturesCode(): Promise<PrefecturesResult | null> {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/prefectures`, {
      ...RequestOptions,
    })
    if (res.ok) {
      return res.json()
    }
    throw new Error(res.statusText)
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(error)
    }
    return null
  }
}

export type PopulationResult = {
  message: string | null
  result: {
    boundaryYear: number
    data: {
      label: '総人口' | '年少人口' | '生産年齢人口' | '老年人口'
      data: PopulationData[]
    }[]
  }
}

export type PopulationData = {
  year: number
  value: number
  rate?: number
}

type PopulationParam = {
  prefCode: number
  cityCode: number | '-'
  addArea?: string
}

export async function fetchPopulation(
  param: PopulationParam
): Promise<PopulationResult | null> {
  const { prefCode, cityCode, addArea } = param
  try {
    const res = await fetch(
      `${BASE_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=${cityCode}&addArea=${
        addArea ?? ''
      }`,
      {
        ...RequestOptions,
      }
    )
    if (res.ok) {
      return res.json()
    }
    throw new Error(res.statusText)
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(error)
    }
    return null
  }
}
