import React from 'react'
import {render,  screen, fireEvent, waitFor,} from '@testing-library/react'
import Card from "./Card";
import '@testing-library/jest-dom';

describe("card component tests", () => {
  test("Card is rendered", async () => {
    const cardDeleteCallBack = jest.fn();
    render(<Card cardName={"name"} cardData={{}} cardID={12345} deleteCard={cardDeleteCallBack}/>);
    screen.getByText('name');
    screen.debug();
    expect(await screen.findByText("newText")).toBeInTheDocument();
    screen.debug();
  });

  test("Delete card callback is called", async () => {
    const cardDeleteCallBack = jest.fn();
    render(<Card cardName={"name"} cardData={{}} cardID={"id"} deleteCard={cardDeleteCallBack}/>);
    fireEvent.click(screen.getByText('delete'));
    fireEvent.click(screen.getByText('delete'));
    expect(cardDeleteCallBack).toHaveBeenCalledTimes(2);

    fireEvent(screen.getByPlaceholderText('New name input'))
  })

  test("new name label exist", async () => {
    const cardChangeNameCallBack = jest.fn();
    render(<Card cardName={"name"} cardData={{}} cardID={"id"} changeName={cardChangeNameCallBack}/>);
    screen.getByLabelText('New name');
  })

  test("new name exist", async () => {
    const cardChangeNameCallBack = jest.fn();
    render(<Card cardName={"name"} cardData={{}} cardID={"id"} changeName={cardChangeNameCallBack}/>);
    screen.getByLabelText('New name');
    screen.getByPlaceholderText('New name input');
  })

  test("new name input works", async () => {
    const cardChangeNameCallBack = jest.fn();
    render(<Card cardName={"name"} cardData={{}} cardID={"id"} changeName={cardChangeNameCallBack}/>);
    fireEvent(screen.getByPlaceholderText('New name input'), {target:{ value:"newName"}});
    screen.findByDisplayValue("newName");
  })

  test("input submits", async () => {
    const cardChangeNameCallBack = jest.fn();
    render(<Card cardName={"name"} cardData={{}} cardID={"id"} changeName={cardChangeNameCallBack}/>);
    fireEvent(screen.getByPlaceholderText('New name input'), {target:{ value:"newName"}});
    fireEvent.click(screen.getByText('submit new name'));
    expect(cardChangeNameCallBack).toHaveBeenLastCalledWith("newName");
  })

  test("after submit input clears itself", async () => {
    const cardChangeNameCallBack = jest.fn();
    render(<Card cardName={"name"} cardData={{}} cardID={"id"} changeName={cardChangeNameCallBack}/>);
    fireEvent(screen.getByPlaceholderText('New name input'), {target:{ value:"newName"}});
    fireEvent.click(screen.getByText('submit new name'));

    fireEvent(screen.getByPlaceholderText('New name input'), {target:{ value:"newName2"}});
    fireEvent.click(screen.getByText('submit new name'));

    expect(cardChangeNameCallBack).toHaveBeenCalledTimes(2);
    expect(cardChangeNameCallBack).toHaveBeenLastCalledWith("newName2");
  })
})