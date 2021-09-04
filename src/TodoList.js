import React from "react"

function TodoList(props) {
    const doneStayle = {
        color: "gray",
        textDecoration: "line-through",
        fontStyle: "italic"
    }
  return (
    <div className="todo">
        <div className="tocomp">
          
      <input type="checkbox" 
      checked={props.item.completed} onChange={()=>props.handle(props.item.id )} />
      <p style={props.item.completed? doneStayle:null}>{props.item.text}</p>
      </div>
      <hr />
    </div>
  );
}
export default TodoList;
