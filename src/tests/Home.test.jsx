import { render, screen } from '@testing-library/preact'
import { ServicesPage } from '../pages/Service/ServicePage'
import { describe, expect, it } from 'vitest'

describe('ServicePage component', () => {
  it('renders the correct h1 text', () => {
    render(<ServicesPage />)

    // Look for the h1 with the exact text
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Microservices API Dashboard')
  })
})