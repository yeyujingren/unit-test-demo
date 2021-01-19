import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

import User, {User as ExpectRes} from '../UserComponent';

let container: Element | DocumentFragment | null = null;

describe('User 组件测试: 异步请求mock', () => {
  let mockGet: jest.SpyInstance;
  jest.mock('axios');
  beforeEach(() => {
    // setup a DOM as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  afterEach(() => {
    // clearup on exiting
    unmountComponentAtNode(container as Element);
    (container as Element)?.remove();
    container = null;
  })

  test("渲染用户数据", async () => {
    const mockData: ExpectRes = {
      name: 'yeyu',
      age: 24,
      heigh: 187
    }
    mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation((): Promise<any> =>
      Promise.resolve({
        data: {
          code: 1,
          msg: 'success',
          data: mockData
        }
      })
    )

    await act(async () => {
      render(<User id="123" />, container);
    })
    expect(container?.querySelector('header')?.innerHTML).toBe('Hi, my name is yeyu');
    expect(container?.querySelectorAll('span')[0]?.innerHTML).toBe('Im 24 years old;');
    expect(container?.querySelectorAll('span')[1]?.innerHTML).toBe('and Im 187 cm;');
  })

  test("数据加载失败", async () => {
    mockGet = jest.spyOn(axios, 'get');
    mockGet.mockImplementation((): Promise<any> =>
      Promise.resolve({
        data: {
          code: 4,
          msg: '数据加载失败，请刷新重试！',
          data: {}
        }
      })
    )

    await act(async () => {
      render(<User id="123" />, container);
    })
    expect(container?.textContent).toBe('数据加载失败，请刷新重试！');
  })

})
