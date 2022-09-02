import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from '../../App'

it('sample test', () => {
  render(<App />)
  const search = screen.getByPlaceholderText('Search for city')
})
