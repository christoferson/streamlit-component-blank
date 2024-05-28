import React, { useEffect, ReactNode } from "react";
import {
    Streamlit, StreamlitComponentBase, withStreamlitConnection
  } from "streamlit-component-lib";

  
interface State {
    numClicks: number
}
/**
 * Called by <CustomSlider />, renders the return value on screen.
 *
 * (props) => {code} is an arrow function, a shorter syntax for JS functions
 * equivalent to : function (props) { code; return <h1>Hello world</h1>};
 * or in Python, lambda props : return <h1>Hello world</h1>.
 *
 * When called, it will run then render on the browser the returned JSX block
 */
//const CustomComponent = () => {
class CustomComponent extends StreamlitComponentBase<State> {

    public state = { numClicks: 0 }
  
    public render = (): ReactNode => {

        // Arguments that are passed to the plugin in Python are accessible
        // via `this.props.args`. Here, we access the "name" arg.
        const name = this.props.args["name"]
  
        // This React component returns (and renders) this <h1> block
        return (
            <span>
                <h1 style={{ color: 'red' }}>Custom Component v2 {name}</h1>
                <button onClick={this.onClicked} disabled={this.props.disabled}>
                    Click Me!
                </button>
            </span>
        );
    }

    /** Click handler for our "Click Me!" button. */
    private onClicked = (): void => {
        // Increment state.numClicks, and pass the new value back to
        // Streamlit via `Streamlit.setComponentValue`.
        this.setState(
            prevState => ({ numClicks: prevState.numClicks + 1 }),
            () => Streamlit.setComponentValue(this.state.numClicks)
        )
    }

  
};

// Make the function publicly available. If you forget this, index.tsx won't find it.
// Link the component to Streamlit JS events.
export default withStreamlitConnection(CustomComponent);