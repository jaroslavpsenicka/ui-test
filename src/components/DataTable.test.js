import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';

import DataTable from './DataTable';

const mockStore = configureMockStore([thunk])

describe('App', () => {

  it('renders no data', () => {
    const store = mockStore({ data: {} })
    const wrapper = mount(<Provider store={store}><DataTable /></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders error', () => {
    const store = mockStore({ data: { success: false, error: 'ERR' } })
    const wrapper = mount(<Provider store={store}><DataTable /></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders one row', () => {
    const store = mockStore({ data: { success: true, data: [{ name: 'A', height: 5 }]}})
    const wrapper = mount(<Provider store={store}><DataTable /></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders two rows, sorts properly', () => {
    const store = mockStore({ data: { success: true, data: [{ name: 'B', height: 2 }, { name: 'A', height: 5 }]}})
    const wrapper = mount(<Provider store={store}><DataTable /></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});