import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders App component', () => {
  render(<App />)
  
  // Verifica se algum elemento está presente
  expect(screen.getByText('RS Vieira')).toBeInTheDocument()
})
