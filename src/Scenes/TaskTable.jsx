import React, {useEffect, useState} from "react";
import fakeServerAPI from "../api/fakeServerInstance";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCardTable = styled.table`
  background-color: ${props => props.theme.infoCardBackgroundColor};
  margin: 20px;
  border-radius: 5px;
  width: 100%;
  color: ${props => props.theme.accentTextColor};
  
  thead {
    width: 100%;
  }
`

const TaskTable = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchTableData = () => {
    fakeServerAPI.get(`/tasks?_page=${pageNumber}&_limit=5&_sort=${sortField}&_order=${sortDirection > 0 ? "asc" : "desc"}`).then(({data}) => {
      setTaskList(data)
    })
  }

  useEffect(() => {
    fetchTableData();
  }, [pageNumber, sortField, sortDirection]);

  const handleSort = (fieldKey) => () => {
    if (fieldKey !== sortField) {
      setSortField(fieldKey);
      setSortDirection(1);
    } else {
      setSortDirection((-1) * sortDirection);
    }
  };

  const handlePageChange = (newPage) => {
    setPageNumber(newPage)
  };

  return (
    <React.Fragment>
      <StyledCardTable>
        <thead>
        {props.columns.map(column => {
            return (
              <th onClick={handleSort(column.dataKey)} style={{width:`${column.width}%`}}>
                {column.name}
              </th>
            )
          }
        )}
        </thead>
        <tbody>
        {taskList.map(task => {
          return (
            <tr>
              {props.columns.map(column => {
                  return (
                    <td style={{width:`${column.width}%`}}>
                      {task[column.dataKey]}
                    </td>
                  )
                }
              )}
            </tr>
          )
        })}
        </tbody>
      </StyledCardTable>
      <button onClick={() => {handlePageChange(pageNumber - 1)}}>Prev</button>
      {pageNumber}
      <button onClick={() => {handlePageChange(pageNumber + 1)}}>Next</button>
    </React.Fragment>

  )
}

TaskTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    width: PropTypes.number,
  })).isRequired
}

export default TaskTable