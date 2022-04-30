import { test, describe, expect } from 'vitest'
import { render } from '@testing-library/react'
import { SiteTitle } from './Title'

describe('SiteTitle', () => {
  test('Title Component', () => {
    const displayName = 'Hoge'
    const { container } = render(<SiteTitle title={displayName} />)
    const targetComponent = container.getElementsByTagName('h1')[0]
    expect(targetComponent.innerHTML).toBe(displayName)
  })
})
