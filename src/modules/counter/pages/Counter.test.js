import React from 'react';

import {shallow, mount} from 'enzyme';
import Counter from './Counter';
import ClickCounter from './ClickCounter';

describe("Counter Component", () => {

    // let wrapper;

    // beforeEach(() => {
    //     wrapper = mount(<Counter />);
    // })

    // it("should have a NewComponent" ,() => {
    //     const wrapper = shallow(<Counter />);
    //     console.log(wrapper.debug());
    //     expect(wrapper.find('NewComponent').exists()).toBe(true);
    // })

    // it("should return value of click counter incremented by 1", () => {
    //     console.log(wrapper.debug());
    //     console.log(wrapper.find(ClickCounter).instance().state.count);
    //     wrapper.find('ClickCounter').props().incrementCount();
    //     wrapper.find('ClickCounter button').simulate('click');
    //     wrapper.find('ClickCounter button').props().onClick();
    //     console.log(wrapper.find(ClickCounter).instance().state.count);
    })
})
