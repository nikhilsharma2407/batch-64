import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor() {
        super();
        console.log('initialisation in constructor')
        this.state = {
            count: 0,
            someVal: 0
        }
    }

    render() {
        console.log("🚀 ~ ClassComponent ~ render ~ render:");

        // function onClickHandler() {
        //     this.setState({ count: this.state.count + 1 })
        // }
        const onClickHandler = () => {
            this.setState({ count: this.state.count + 1 })
        }
        const { name } = this.props;
        const { count } = this.state;
        return (
            <>
                <h1>Welcome - {name}</h1>
                <h2>Count - {count}</h2>
                <button onClick={onClickHandler}>Click me</button>
            </>
        )
    }


    componentDidMount() {
        console.log("🚀 ~ ClassComponent ~ componentDidMount ~ componentDidMount:")
    }

    componentDidUpdate() {
        console.log("🚀 ~ ClassComponent ~ componentDidUpdate ~ componentDidUpdate:")
    }

    shouldComponentUpdate(...props) {
        console.log("🚀 ~ ClassComponent ~ shouldComponentUpdate ~ props:", props)
        return true
    }

    componentWillUnmount() {

        console.log("🚀 ~ ClassComponent ~ componentWillUnmount:")
    }


}

export default ClassComponent;