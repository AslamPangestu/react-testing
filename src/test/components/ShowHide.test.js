import { fireEvent, render, screen } from "@testing-library/react"
import ShowHide from "../../components/ShowHide"

describe('testing show hide',()=>{
    test('memastikan text sembunyi', () => {
        render(<ShowHide/>)
        const text = screen.getByText('Saya sedang Sembunyi')
        expect(text).toBeInTheDocument();
    })
    
    test('memastikan text button Munculkan', () => {
        render(<ShowHide/>)
        const text = screen.getByText('Munculkan')
        expect(text).toBeInTheDocument();
    })

    test('memastikan text setelah diclick',()=>{
        render(<ShowHide/>)
        const button = screen.getByText('Munculkan');
        fireEvent.click(button)
        const text = screen.getByText('Saya sedang Muncul')
        expect(text).toBeInTheDocument();
    })
    
    test('memastikan text dalam button setelah diclick',()=>{
        render(<ShowHide/>)
        const button = screen.getByText('Munculkan');
        fireEvent.click(button)
        const text = screen.getByText('Sembunyikan')
        expect(text).toBeInTheDocument();
    })
})
