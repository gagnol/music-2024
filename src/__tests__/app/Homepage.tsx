import {render,screen} from "@testing-library/react"
import HomePage from "@/app/[locale]/page"

it("renderr home",()=>{
    render(<HomePage/>)
    expect(screen.getByText("Hola")).toBeInTheDocument()
})