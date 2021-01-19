import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import TodoList, { Props as TodoProps } from '../TodoList';

let container: Element | DocumentFragment | null = null;

describe('todolist组件测试：基础dom校验', () => {
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

  test('当list为空时，应该展示暂无数据', () => {
    const props = {
      title: 'list为空',
      todo: []
    }
    act(() => {
      render(<TodoList {...props} />, container);
    })
    expect((container as Element).querySelector('span')?.innerHTML).toBe('暂无数据');
  })

  test('todoList对应的title应该为：title', () => {
    const props = {
      title: 'title',
      todo: []
    }
    act(() => {
      render(<TodoList {...props} />, container);
    })
    expect((container as Element).querySelector('header')?.innerHTML).toBe('title');
  })

  test('todoList对应的todoList长度应该为3', () => {
    const props: TodoProps = {
      title: 'title',
      todo: [
        {
          id: 'one',
          context: 'eating'
        },
        {
          id: 'two',
          context: 'drinking'
        },
        {
          id: 'thr',
          context: 'sleeping'
        }
      ]
    }
    act(() => {
      render(<TodoList {...props} />, container);
    })
    expect((container as Element).querySelectorAll('li')).toHaveLength(3);
  })
})
