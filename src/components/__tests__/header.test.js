import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appstore";
import { BrowserRouter,MemoryRouter  } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header Component with a login button", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>
  );
  const loginButton = screen.getByRole("button", {name:"Login"});
  //const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});
it("Should render header Component with a Cart Items 0", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>
  );
  const cartItems = screen.getByText("Cart- (0 items )");
  //const loginButton = screen.getByText("Lo gin");
  expect(cartItems).toBeInTheDocument();
});
it("Should render header Component with a Cart is there or not", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>
  );
  const cartItems = screen.getByText(/Cart/);
  //const loginButton = screen.getByText("Login");
  expect(cartItems).toBeInTheDocument();
});

it("Should render Login Buttom to Logout on click", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>
  );
 // const cartItems = screen.getByText(/Cart/);
  const loginButton = screen.getByRole("button", {name: "Login"});
  fireEvent.click(loginButton);
const logoutButton = screen.getByRole("button", {name: "Logout"});
  //fireEvent.click(logoutButton);


  expect(logoutButton).toBeInTheDocument();
});