import { expect, it, describe } from 'vitest'

import { fetchPrefecturesCode, fetchPopulation } from './client'

import { startFailedMockServer, stopFailedMockServer } from '../test/utils'

const firstPref = {
  prefCode: 1,
  prefName: '北海道',
}

const lastPref = {
  prefCode: 47,
  prefName: '沖縄県',
}

describe('fetchPrefecturesCode', () => {
  it('should fetch prefectures code', async () => {
    const res = await fetchPrefecturesCode()
    expect(res?.message).toBe(null)
    expect(res?.result.length).toBe(47)
    expect(res?.result[0]).toEqual(firstPref)
    expect(res?.result[46]).toEqual(lastPref)
  })
  it('should not fetch prefectures code', async () => {
    startFailedMockServer()
    const res = await fetchPrefecturesCode()
    expect(res).toBeNull()
    stopFailedMockServer()
  })
})

describe('fetchPopulation', () => {
  it('should fetch population', async () => {
    const res = await fetchPopulation({
      prefCode: firstPref.prefCode,
      cityCode: '-',
    })
    expect(res?.message).toBe(null)
    expect(res?.result.boundaryYear).toBe(2015)
    expect(res?.result.data.length).toBe(4)

    const totalPopulation = res?.result.data.find((d) => d.label === '総人口')
    expect(totalPopulation?.label).toBe('総人口')

    // Data provision year 1980 to 2045
    const data1980 = totalPopulation?.data.find((d) => d.year === 1980)
    const data2045 = totalPopulation?.data.find((d) => d.year === 2045)

    expect(data1980).not.toBeUndefined()
    expect(data1980?.year).toBe(1980)
    expect(data2045).not.toBeUndefined()
    expect(data2045).not.toBe(2045)
  })

  it('should not fetch population', async () => {
    startFailedMockServer()
    const res = await fetchPopulation({
      prefCode: firstPref.prefCode,
      cityCode: '-',
    })
    expect(res).toBeNull()
    stopFailedMockServer()
  })
})
