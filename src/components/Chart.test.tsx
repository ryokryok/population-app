import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import { Chart } from './Chart'

describe('Chart', () => {
  test('Chart Component', async () => {
    const { container } = render(<Chart code={1} />)
    const targetComponent = container.querySelector(
      'div.recharts-responsive-container'
    )
    expect(targetComponent).not.toBeNull()
  })
})
