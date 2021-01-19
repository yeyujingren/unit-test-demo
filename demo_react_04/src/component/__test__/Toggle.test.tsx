import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Toggle from '../Toggle';

let container: Element | DocumentFragment | null = null;

describe('event 测试', () => {
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

  it('点击按钮更新文案', () => {
    const onChange = jest.fn();
    act(() => {
      render(<Toggle onChange={onChange} />, container);
    })

    // 获取按钮元素，并触发点击事件
    const btn = document.querySelector('[data-testid=toggle]');
    expect(btn?.innerHTML).toBe("Turn on");

    act(() => {
      // 注意，你需要在创建的每个事件中传递 { bubbles: true } 才能到达 React 监听器，因为 React 会自动将事件委托给 root。
      btn?.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(btn?.innerHTML).toBe("Turn off");

    act(() => {
      for (let i = 0; i < 5; i++) {
        btn?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(onChange).toHaveBeenCalledTimes(6);
    expect(btn?.innerHTML).toBe("Turn on");
  })
})
