import React from 'react';

export interface Props {
  title: string;
  todo: Array<{ id: string, context: string }>
  [p: string]: any
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <div>
      <header>
        {props.title}
      </header>
      <ul>
        {
          props.todo.length !== 0 && props.todo.map(item => {
            return (
              <li key={item.id}>
                {item.context}
              </li>
            )
          })
        }
        {
          props.todo.length === 0 && <span>暂无数据</span>
        }
      </ul>
    </div>
  )
}

export default TodoList;
