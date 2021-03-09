import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
  test("status from srops shut be in the state", () => {
    const component = create(<ProfileStatus status="hello, world" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("hello, world");
  });
  test("after creaction <span> should be displayed", () => {
    const component = create(<ProfileStatus status="hello, world" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span).not.toBeNull();    
  });
  test("after creaction <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="hello, world" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span.children[0]).toBe("hello, world");    
  });  
  test("after creaction <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="hello, world" />);
    const root = component.root;    
    expect(()=> { 
      let input = root.findByType("input")
    }).toThrow();       
  });  
  test("input should be displayed in edit mode insted of span", () => {
    const component = create(<ProfileStatus status="hello, world" />);
    const root = component.root;
    let span = root.findByType("span")
    span.props.onDoubleClick()
    let input = root.findByType("input")    
    expect(input.props.value).toBe("hello, world");         
  });  
  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="hello, world" updateStatus={mockCallback} />);
    const instance = component.getInstance();    
    instance.deActivateEditMofe()
    expect(mockCallback.mock.calls.length).toBe(1);         
  });  
});
