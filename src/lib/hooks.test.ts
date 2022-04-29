import { test, describe } from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks'
import { useCheckedList, usePrefectures } from './hooks'
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

describe('useCheckList', () => {
  test('shoud check or not', () => {
    const { result } = renderHook(useCheckedList)
    expect(result.current.checkedList).toEqual([])

    const mockAddEvent = {
      target: {
        checked: true,
        value: '1',
      },
    } as ChangeEvent<HTMLInputElement>

    act(() => {
      result.current.handleCheck(mockAddEvent)
    })

    expect(result.current.checkedList).toEqual([1])

    const mockRemoveEvent = {
      target: {
        checked: false,
        value: '1',
      },
    } as ChangeEvent<HTMLInputElement>

    act(() => {
      result.current.handleCheck(mockRemoveEvent)
    })

    expect(result.current.checkedList).toEqual([])
  })
})
