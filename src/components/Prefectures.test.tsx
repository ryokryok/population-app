import { test, describe, expect } from 'vitest'
import { render } from '@testing-library/react'
import { PrefectureItem, PrefecturesList } from './Prefectures'
import { PrefecturesCode } from '../lib/client'

const mockPrefecture: PrefecturesCode[] = [
  { prefName: '北海道', prefCode: 1 },
  { prefName: '青森県', prefCode: 2 },
  { prefName: '岩手県', prefCode: 3 },
]

/* eslint @typescript-eslint/no-empty-function: 0 */
const mockHandler = () => {}

describe('Prefecture Components', () => {
  test('Prefectures List', () => {
    const { container } = render(
      <PrefecturesList prefectures={mockPrefecture} itemHadnler={mockHandler} />
    )
    const targetComponent = container.querySelector('div')
    expect(targetComponent).toBeInTheDocument()
    expect(targetComponent?.childElementCount).toBe(3)

    const targetInput = targetComponent?.querySelectorAll('input')
    expect(targetInput).not.toBeNull()
    if (targetInput) {
      ;[...targetInput].forEach((element, index) => {
        const mockPref = mockPrefecture[index]
        expect(element.name).toBe('perfecture')
        expect(element.id).toBe(mockPref.prefName)
        expect(element.value).toBe(mockPref.prefCode.toString())
      })
    }
  })
  test('Null Prefectures List', () => {
    const { container } = render(
      <PrefecturesList prefectures={null} itemHadnler={mockHandler} />
    )
    const targetComponent = container.querySelector('div')
    expect(targetComponent).toBeInTheDocument()
    expect(targetComponent?.querySelectorAll('input').length).toBe(0)
  })
  test('PrefectureItem', () => {
    const tokyoPref = {
      prefName: '東京都',
      prefCode: 13,
    }
    const { container } = render(
      <PrefectureItem pref={tokyoPref} handler={mockHandler} />
    )
    const targetComponent = container.querySelector('.pref-list-item')
    expect(targetComponent).not.toBeNull()
    expect(targetComponent?.querySelector('label')?.innerHTML).toBe(
      tokyoPref.prefName
    )
    const inputTag = targetComponent?.querySelector('input')
    expect(inputTag?.id).toBe(tokyoPref.prefName)
    expect(inputTag?.name).toBe('perfecture')
    expect(inputTag?.type).toBe('radio')
    expect(inputTag?.value).toBe(tokyoPref.prefCode.toString())
  })
})
