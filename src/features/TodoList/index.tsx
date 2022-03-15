import React from "react";
import styled from "@emotion/styled/macro";
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from 'recoil';

import { selectedTodoState, Todo } from './atom';
import { todoStatisticsModalOpenState } from "../TodoStatistisModal/atom";

const TodoItem = styled.li<{ done?: boolean; selected?: boolean; }>`
  max-width: 100px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ done, selected }) => selected ? 'rgba(112, 71, 235, 1)' : done ? 'transparent' : 'rgba(112, 71, 235, 0.4)'};
  padding: 2px 4px;
  margin: 0;
  border-radius: 8px;
  font-size: 10px;
  text-decoration: ${({ done }) => done && 'line-through'};
  cursor: pointer;
`;

const EtcItem = styled.li`
    padding: 2px 4px;
    margin: 0;
    font-size: 10px;
    cursor: pointer;
`;

const Base = styled.ul`
    list-style: none;
    margin: 36px 0 0 0;
    padding: 0;
    width: 100%;
    height: 60;
    ${TodoItem} + ${TodoItem} {
        margin-top: 1px;
    }
    ${TodoItem} + ${EtcItem} {
        margin-top: 1px;
    }
`;

interface Props {
    items: Array<Todo>
}

const TodoList: React.FC<Props> = ({ items }) => {
    const selectedTodo = useRecoilValue(selectedTodoState);

    const setSelectedTodo = useSetRecoilState(selectedTodoState);
    const setTodoStatisticsModalOpen = useSetRecoilState(todoStatisticsModalOpenState);

    const handleClick = (e: React.SyntheticEvent<HTMLElement>, todo: Todo) => {
        e.stopPropagation();
        setSelectedTodo(selectedTodo?.id === todo.id && selectedTodo.date === todo.date ? null : todo);
    };

    const handletodoStatisticsModalOpen = (e: React.SyntheticEvent<HTMLElement>) => {
        e.stopPropagation();
        setTodoStatisticsModalOpen(true);
    };

    return (
        <Base>
            {
                items.slice(0, 3).map((item, idx) => (
                    <TodoItem key={item.id} done={item.done} onClick={e=>handleClick(e, item)}>{item.content}</TodoItem>
                ))
            }
            {
                items.length > 3 && (
                    <EtcItem onClick={handletodoStatisticsModalOpen} >{`그 외 ${items.length - 3}`}</EtcItem>
                )
            }
        </Base>
    );
}

export default TodoList;