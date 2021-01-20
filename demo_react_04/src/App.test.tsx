import React from 'react';
import { unmountComponentAtNode, render} from 'react-dom'
import {act} from 'react-dom/test-utils'
import {MemoryRouter} from 'react-router'

import PageHeader from './routerTest/PageHeader';
import HomePage from './routerTest/HomePage'
import ArticlePage from './routerTest/ArticlePage'
import AuthorPage from './routerTest/AuthorPage'
import PageNotFound from './routerTest/PageNotFound'
import RouterCom from './RouterCom'

jest.mock('./routerTest/PageHeader', () => {
  return function DummyPageHeaderMock () {
    return(<div data-testid='pageHeaderMock'>PageHeaderMock</div>)
  }
})
jest.mock('./routerTest/HomePage', () => {
  return function DummyHomePageMock () {
    return(<div data-testid='homePageMock'>HomePageMock</div>)
  }
})
jest.mock('./routerTest/ArticlePage', () => {
  return function DummyHomePageMock () {
    return(<div data-testid='articlePageMock'>ArticlePageMock</div>)
  }
})
jest.mock('./routerTest/AuthorPage', () => {
  return function DummyHomePageMock () {
    return(<div data-testid='authorPageMock'>AuthorPageMock</div>)
  }
})
jest.mock('./routerTest/PageNotFound', () => {
  return function DummyHomePageMock () {
    return(<div data-testid='pageNotFoundMock'>PageNotFoundMock</div>)
  }
})

let container: Element | DocumentFragment | null = null;

describe('router 单元测试', () => {
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
  test('当路由为‘/’应该展示首页', () => {
    act(() => {
      render(
        <MemoryRouter> <RouterCom /> </MemoryRouter>,
        container
      );
    })
    expect(container?.querySelector("[data-testid='pageHeaderMock']")?.innerHTML).toBe('PageHeaderMock');
    expect(container?.querySelector("[data-testid='homePageMock']")?.innerHTML).toBe('HomePageMock');
  })

  test('当路由为‘/article/1’应该展示文章页面', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/article/1']}> <RouterCom /> </MemoryRouter>,
        container
      );
    })
    expect(container?.querySelector("[data-testid='pageHeaderMock']")?.innerHTML).toBe('PageHeaderMock');
    expect(container?.querySelector("[data-testid='articlePageMock']")?.innerHTML).toBe('ArticlePageMock');
  })

  test('当路由为‘/abc’应该展示not found页面', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/abc/1']}> <RouterCom /> </MemoryRouter>,
        container
      );
    })
    expect(container?.querySelector("[data-testid='pageHeaderMock']")?.innerHTML).toBe('PageHeaderMock');
    expect(container?.querySelector("[data-testid='pageNotFoundMock']")?.innerHTML).toBe('PageNotFoundMock');
  })
})
