import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';


import MapWapper, {Props as MapWapperProps} from '../MapWapper';
import MockedLKMap, {Props as LKMapProps} from '../LKmap';

jest.mock('../LKmap', () => {
  return function SpyMap(props: LKMapProps) {
    return (
      <div data-testid="map">
        {props.center.lat} : {props.center.lng}
      </div>
    )
  }
})

let container: Element | DocumentFragment | null = null;

describe('mock 组件', () => {
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

  it("渲染联系人相关属性", () => {
    const data: MapWapperProps = {
      name: 'yeyu',
      email: 'yeyu@gmail.com',
      site: 'https://yeyu.abc.com',
      center: {
        lat: 0,
        lng: 0
      }
    }
    act(() => {
      render(
        <MapWapper
          {...data}
        />, container
      )
    })
    expect(
      (container as any).querySelector("[data-testid='email']").getAttribute("href")
    ).toEqual("mailto:yeyu@gmail.com");

    expect(
      (container as any).querySelector('[data-testid="site"]').getAttribute("href")
    ).toEqual("https://yeyu.abc.com");

    expect((container as any).querySelector('[data-testid="map"]').textContent).toEqual(
      "0 : 0"
    );
  })
})
