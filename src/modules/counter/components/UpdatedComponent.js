import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component{

        constructor(props) {
            super(props)
            this.state = {
                 count:0
            }
        }
    
        incrementHandler = () => {
            this.setState(prevState => {
                return {count:prevState.count+1}
            })
        }

        render(){
            const {count} = this.state;
            return <OriginalComponent count={count} incrementCount={this.incrementHandler} />
        }
    }
    return NewComponent;
}

export default UpdatedComponent
