import { render, screen } from "@testing-library/react"
import Variant,{data} from "../../components/Variant"

test('queryby n findby', async () => {
    render(<Variant/>)
    const text = screen.queryByText(/Selamat datang/)
    expect(text).toBeNull()
    const text1 = await screen.findByText(/Selamat datang/)
    expect(text1).toBeInTheDocument()
})

it('get many data', () => {
    render(<Variant/>)
    expect(screen.getAllByTestId('hari')).toHaveLength(data.length)
    
})

