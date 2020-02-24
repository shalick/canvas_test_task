import React from 'react';
import './App.css';

const Square = (props) => {
    return (
      <button className="square"
      //  onClick={props.onClick}
       >
        {props.value}
      </button>
    );
  }
  
  const Raw = (props) => {
      return props.raw.map((currentValue) => {
        return <Square  value={currentValue}/>
      })
  }
  
  const RawWithClass = (props) => {
    return (
      <div className="board-row">
        <Raw raw={props.raw}/>
      </div>
    )
  } 
  
  class Canvas extends React.Component {
  
    state = {
      canvas: new Array(4).map(() =>  new Array(20).fill(0)),
      // line: Array(6).fill('X')
    };
  
  
    drawCanvas() {
      return this.state.canvas.map((index) => {
        return <RawWithClass raw={this.state.canvas[index]}/> 
      })
    }
  
    // draw() {
    //   return this.state.canvas.map(() => {
    //     return <Square />
    //   })
    // }
  
    logCanvas(){
      for(let i = 0; i < this.state.canvas.length; i++){
        for(let j = 0; j < this.state.canvas[i].length; j++) {
          console.log(this.state.canvas[i][j]);
        }
      }
    }

    // drawLine() {
    //   this.setState({
    //     canvas: canvas
    //   })
    //   const lineCoordinates = [1, 2, 6, 2]
    //   for(let i = lineCoordinates[1]; i < lineCoordinates[4]; i++) {
    //     for(let j = lineCoordinates[0]; i < lineCoordinates[3]; j++) {
    //       return <Square value={'X'}/>
    //     } 
    //   }
    // }
  
    render() {
      return (
        <div>
          {/* {this.draw()} */}
          {/* {this.drawCanvas()} */}
          {/* {this.logCanvas()} */}
          <Square />
        </div>
      )
    }
  }

  export default Canvas;