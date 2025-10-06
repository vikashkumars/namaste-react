import {render, screen} from  "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("Contact us Page test case ",()=>{
it("Should load contact us component",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    
});
it("Should load button inside contact component",()=>{
    render(<Contact/>);
    //const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});
test("Should load button inside contact component",()=>{
    render(<Contact/>);
    //const button = screen.getByRole("button");
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
});
test("Should load two input boxes inside contact component",()=>{
    render(<Contact/>);
    //const button = screen.getByRole("button");
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});
});