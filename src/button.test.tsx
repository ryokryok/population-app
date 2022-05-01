import React, { useState } from 'react'
import { test, describe, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

type ButtonProps = {
  defaultLabel: string
  completeLabel: string
}

function PrimaryButton({ defaultLabel, completeLabel }: ButtonProps) {
  const [complete, setComplete] = useState(false)

  return (
    <button onClick={() => setComplete(!complete)}>
      {complete ? completeLabel : defaultLabel}
    </button>
  )
}

describe('PrimaryButton', () => {
  test('render button', async () => {
    const label = 'Send'
    const complete = 'Sent'
    render(<PrimaryButton defaultLabel={label} completeLabel={complete} />)
    const targetButton = screen.getByRole('button')
    expect(targetButton).toBeInTheDocument()
    expect(targetButton).toHaveTextContent(label)
    fireEvent.click(targetButton)
    expect(await screen.findByRole('button')).toHaveTextContent(complete)
  })
})
