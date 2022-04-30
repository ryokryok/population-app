import { test, describe } from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCheckedList, usePrefectures, useTotalPopulation } from './hooks'
import { PREFECTURES_CODE } from './constants'
import { ChangeEvent } from 'react'

describe('usePrefectures', () => {
  test('shoud fetch prefecture code', async () => {
    const { result, waitForNextUpdate } = renderHook(usePrefectures)
    expect(result.current.loading).toBe(true)
    expect(result.current.prefectures).toBe(null)

    await waitForNextUpdate({ timeout: 2000 })

    expect(result.current.loading).toBe(false)
    expect(result.current.prefectures).toEqual(PREFECTURES_CODE)
  })
})

describe('useTotalPopulation', () => {
  test('should fetch population', async () => {
    const TOKYO_PREF_CODE = 13
    const { result, waitForNextUpdate } = renderHook(() =>
      useTotalPopulation(TOKYO_PREF_CODE)
    )
    expect(result.current.loading).toBe(true)
    expect(result.current.population).toBe(null)

    await waitForNextUpdate({ timeout: 2000 })

    expect(result.current.loading).toBe(false)

    const tokyoPopulation = result.current.population
    // population data is available from 1960 to 2045.
    expect(tokyoPopulation?.some((p) => p.year === 1960) === true).toBe(true)
    expect(tokyoPopulation?.some((p) => p.year === 2045) === true).toBe(true)
  })
})

describe('useCheckList', () => {
  test('shoud check or not', () => {
    const { result } = renderHook(useCheckedList)
    expect(result.current.checked).toEqual(0)

    const mockEvent1 = {
      target: {
        checked: true,
        value: '1',
      },
    } as ChangeEvent<HTMLInputElement>

    act(() => {
      result.current.handleCheck(mockEvent1)
    })

    expect(result.current.checked).toEqual(1)

    const mockEvent2 = {
      target: {
        value: '2',
      },
    } as ChangeEvent<HTMLInputElement>

    act(() => {
      result.current.handleCheck(mockEvent2)
    })

    expect(result.current.checked).toEqual(2)
  })
})
