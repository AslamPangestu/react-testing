import Event from '../../components/Event';
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

const mockFunction = jest.fn()

it('onchange in typing',()=>{
    render(<Event/>)
    const input = screen.getByPlaceholderText("input value")
    userEvent.type(input,'Aslam Test')
    expect(screen.getByText(/Anda mengetik Aslam Test/)).toBeInTheDocument()
})

it('onsubmit',()=>{
    render(<Event onSubmit={mockFunction}/>)
    const button = screen.getByTestId("text-submit")
    userEvent.click(button)
    expect(mockFunction).toHaveBeenCalled()
})