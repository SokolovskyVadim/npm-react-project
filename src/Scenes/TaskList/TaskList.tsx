import React, {useCallback, useEffect, useMemo, useState} from "react";
import Card from "Components/Card/Card";
import styled from "styled-components";
import EditCard from "Components/ModalContent/EditCard";
import {Outlet} from "react-router-dom"
import useModal from "hooks/useModal"
import {useDispatch, useSelector} from "react-redux";
import {cardListSelector} from "store/selectors/cardList";
import {replaceCardList, deleteCard} from "store/actions/cardList";
import fakeJsonAPI from "api/fakeJsonInstance";
import fakeServerAPI from "api/fakeServerInstance";
import cardReducer from "../../store/reducers/cardListReducer";
import {useTypedSelector} from "../../store/hooks";

const StyledTaskListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.accentTextColor};
  font-size: 30px;
`

interface TaskListProps {
  additionalProp?: string
}

/**
 * This is full screen cowering object with list of cards
 *
 * @param props no additional props needed
 *
 * @return TaskList an valid react component
 *
 * @constructor
 *
 * @example
 *
 * <TaskList/>
 */
const TaskList = (props: TaskListProps): React.FunctionComponent => {
  const openModal = useModal();
  const cardList = useTypedSelector(cardListSelector);
  const [something, addSomething] = useState<string>("[]");
  const dispatch = useDispatch();

  const handleCardDeleteModaOpen = card => () => {
    openModal(
      <EditCard deleteCard={() => {
        dispatch(deleteCard(card.id))
            .then((succesAction) => {
        console.log("its thenable!", succesAction);
      })
      }}
                setModal={openModal}
                cardName={card.cardName}/>
    )
  };

  useEffect(() => {
    fakeServerAPI.get("/tasks")
    .then((responce) => {
      responce.data.map()
      dispatch(replaceCardList(responce.data));
    }).catch(() => {dispatch(replaceCardList([]));})
  }, []);

  const feelTheGroow = (amount : number) : void => {
    for (let i = 0; i<amount; i++) {
      fakeServerAPI.post("/tasks", {
        "name": `TaskName_${cardList.length}_${i}`,
        "text": "Task text",
      })
    }
  }

  if (!cardList) {
    return <StyledLoadingWrapper>
      Loading...
    </StyledLoadingWrapper>
  }

  return (
    <StyledTaskListWrapper>
      <button onClick={
        () => {
          fakeServerAPI.put("/tasks/1", {
            "cardName": "Completely new task",
            "cardText": "Completely new task",
            "id": 123
          })
        }
      }>
        Break task list
      </button>
      <button onClick={() => {feelTheGroow(5)}}>
        Add tasks batch
      </button>
      {cardList.map((taskInfo, index) =>
        <Card
          deleteCard={handleCardDeleteModaOpen(taskInfo)}
          key={taskInfo.id}
          cardID={taskInfo.id}
          cardName={taskInfo.name}
          cardText={taskInfo.text}/>
      )}
      <Outlet/>
    </StyledTaskListWrapper>
  )
}

export default TaskList