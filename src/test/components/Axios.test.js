import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import Axios from "../../components/Axios";

jest.mock('axios')
it('mock axios call',async()=>{
    const users = [
        {id:1,name:'Aslam'},
        {id:2,name:'Test'}
    ]
    axios.get.mockImplementation(()=>Promise.resolve({data:users}))
    render(<Axios/>)
    const button = screen.getByTestId('get-user')
    userEvent.click(button)
    await waitFor(()=>{
        const texts = screen.getAllByTestId('user-name')
        expect(texts).toHaveLength(users.length)
    })
})