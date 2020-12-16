import { mount } from 'enzyme';
import App from './App';


describe("App.js", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('renders welcome message', () => {
    expect(wrapper.find('p').text()).toContain('Edit src/App.js and save to reload.');
  });

  test('renders link learn react', () => {
    expect(wrapper.find('a').text()).toContain('Learn React');
  });

  test('renders button increment', () => {
    expect(wrapper.find('#btn-increment').text()).toEqual('Counter Up');
  });

  test('renders button decrement', () => {
    expect(wrapper.find('#btn-decrement').text()).toEqual('Counter Down');
  });

  test('renders button reset', () => {
    expect(wrapper.find('#btn-reset').text()).toEqual('Reset');
  });

  test('renders value', () => {
    expect(wrapper.find('#value').text()).toEqual('0');
  });

  test('renders and click btn-increment', () => {
    const btnIncrement = wrapper.find('#btn-increment')
    const btnDecrement = wrapper.find('#btn-decrement')
    btnIncrement.simulate('click')
    btnIncrement.simulate('click')
    btnDecrement.simulate('click')
    btnDecrement.simulate('click')
    btnDecrement.simulate('click')
    expect(wrapper.find('#value').text()).toEqual('0')
  })

  test('renders and click btn-increment', () => {
    const btnIncrement = wrapper.find('#btn-increment')
    const btnReset = wrapper.find('#btn-reset')
    btnIncrement.simulate('click')
    btnIncrement.simulate('click')
    btnReset.simulate('click')
    expect(wrapper.find('#value').text()).toEqual('0')
  });

})