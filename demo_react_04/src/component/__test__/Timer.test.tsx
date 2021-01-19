import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils'

import Timer from '../Timer';

let container: Element | DocumentFragment | null = null;

describe('计时器测试', () => {
  beforeEach(() => {
    // setup a DOM as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
  })

  afterEach(() => {
    // clearup on exiting
    unmountComponentAtNode(container as Element);
    (container as Element)?.remove();
    container = null;
  })

  it('超时后应该返回 null', () => {
    const onSelect = jest.fn();
    act(() => {
      render(<Timer onSelect={onSelect} />, container);
    })

    // 提前 100 毫秒执行
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(onSelect).not.toHaveBeenCalled();

    // 然后提前 5 秒执行
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(onSelect).toBeCalledWith(null);
  })

  it('移除时，应该去清除计时器', () => {
    const onSelect = jest.fn();
    act(() => {
      render(<Timer onSelect={onSelect} />, container)
    })

    act(() => {
      jest.advanceTimersByTime(100);
    })
    expect(onSelect).not.toHaveBeenCalled();

    // 卸载
    act(() => {
      render(<div/>, container);
    })
    act(() => {
      jest.advanceTimersByTime(5000);
    })
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('点击按钮2时，应该回调参数为2', () => {
    const onSelect = jest.fn();
    act(() => {
      render(<Timer onSelect={onSelect} />, container);
    })
    act(() => {
      (container as Element).querySelector("[data-testid='2']")
      ?.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    })
    expect(onSelect).toHaveBeenCalledWith(2);
  })

});

