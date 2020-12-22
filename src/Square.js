import React from "react";

class Square extends React.Component{
    /*constructor(props) {
        super(props);
        console.log(props.value)
        this.state= {
            value: props.value,
        }
    }*/
    render() {
        console.log('square rendered')
        return(
            <div className={'square'} onClick={this.props.onClick}>
                <strong>{this.props.value}</strong>
            </div>
        )
    }
}

export default Square
