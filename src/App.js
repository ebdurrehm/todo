import React from "react";
import TodoList from "./TodoList";
import Data from "./Data";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    
    };
    this.handleChange = this.handleChange.bind(this);
  
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { data } = this.state,
    text = this.refs.text.value;
    let id=this.state.data.map(item=>item.id);
    console.log(id);
    
    
    this.setState({
      data: [...data, {
        text,
        id  
      }]
    }, () => {
      this.refs.text.value = '';
      
    });
  }



  handleChange(id) {
    
    this.setState((prevState) => {
      let uptadetData = prevState.data.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            completed: !d.completed
        }
          
        }
        return d;
      })
      console.log(prevState.data)
      console.log(uptadetData) 
      return {
        data: uptadetData
      };
    });
    console.log(this.state.data)
  }

  render() {
    const values = this.state.data.map((item) => (
      <TodoList handle={this.handleChange} key={item.id} item={item} />
    ));

    return (
      <div className="app">
        <h1 id="title">To do App</h1>
        <form onSubmit={this.handleSubmit}>
        <div id="btn">
        <input className="text" type="text" name="text" ref="text" placeholder="What to do next?" />
        
         <input id="submit" type="submit" value="+"/>
         </div>
        </form>
        

        {values}
      </div>
    );
  }
}
export default App;
