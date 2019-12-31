import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

describe("App Component", () => {

  it("should have heading", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h4').text()).toContain('Demo App');
  })

  it("Should have title", () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find('title')).toBeTruthy();
    console.log(wrapper.find(Route).at(1).props().path);
    expect(wrapper.find(Route).at(1).props().path).toBe('/add');
  })

})


