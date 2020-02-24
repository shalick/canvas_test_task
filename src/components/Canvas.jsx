import React from 'react';
import '../App.css';

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
    return props.raw.map((element, index) => {
        return <Square value={element} key={index}/>
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
        canvas: new Array(this.props.input.c.h + 2).fill(null).map(() => new Array(this.props.input.c.w + 2).fill(null)),
    };

    componentDidMount() {
        this.drawCanvasWrapper();
    }

    drawCanvas() {
        return this.state.canvas.map((element, index) => {
            return <RawWithClass raw={this.state.canvas[index]} key={index}/>
        })
    }

    drawCanvasWrapper() {
        return this.setState({
            canvas: this.state.canvas.map((raw, index) => {
                if (index === 0 || index === (this.state.canvas.length - 1) ) {
                    return raw.map((element, index) => {
                            return '-';
                    })
                } else {
                    return raw.map((element, index) => {
                        if (index === 0 || index === (raw.length - 1)) {
                            return '|';
                        } else {
                            return element;
                        }

                    })
                }
            })
        })
    }

    drawLine(x1, y1, x2, y2) {
        this.setState({
            canvas: this.state.canvas.map((raw, index) => {
                if (index >= (y1) && index <= (y2)) {
                    return raw.map((square, index) => {
                        if (index >= (x1) && index <= (x2)) {
                            return 'X';
                        } else {
                            return square
                        }
                    })
                } else {
                    return raw
                }
            })
        })
    }

    drawBucketFill(x1, y1, s) {
        this.setState({
            canvas: this.state.canvas.map((element, index) => {
                return this.state.canvas[index].map((element, index) => {
                    if (element === null) {
                        return s;
                    } else {
                        return element
                    }
                })

            })
        })
    }

    render() {
        return (
            <div>
                {this.drawCanvas()}

                <button onClick={() => {
                    this.drawLine(...this.props.input.l[0])
                }}>Draw Line 1
                </button>
                <button onClick={() => {
                    this.drawLine(...this.props.input.l[1])
                }}>Draw Line 2
                </button>
                <button onClick={() => {
                    this.drawLine(...this.props.input.r)
                }}>Draw Rectangle
                </button>
                <button onClick={() => {
                    this.drawBucketFill(...this.props.input.b)
                }}>Bucket Fill
                </button>
            </div>
        )
    }
}

export default Canvas;