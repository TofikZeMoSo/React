import { render,screen } from "@testing-library/react";
import MyAvatar from "../Avatar/MyAvatar"

test("MyAvatar Alphabet should be A",()=>{

    render(
        <MyAvatar alphabet="A"/>
    );

     const alphabet = screen.getByText('A');
    
     expect(alphabet).toBeInTheDocument();

});

test("MyAvatar Alphabet should be A",()=>{

    render(
        <MyAvatar alphabet="A"/>
    );

     const alphabet = screen.getByText('A');

     expect(alphabet).toBeInTheDocument();

});