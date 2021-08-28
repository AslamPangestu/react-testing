import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

test('menampilkan seluruh tag html', () => {
    render(<App/>)
    // screen.debug();
    const btn = screen.getAllByRole('button')[0]
    fireEvent.click(btn)
    // screen.debug();
})

test('menyapa', () => {
    render(<App/>)
    const text = screen.getByText('Hello World');
    expect(text).toBeInTheDocument();
})
