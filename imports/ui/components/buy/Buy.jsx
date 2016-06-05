import React from 'react';
import SpatulaMessage from "./SpatulaMessage";
import PaymentStatus from "./PaymentStatus";
import Pay from "./Pay";

export class Buy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            buttonDisabled: true,
            paymentProcessing: false
        };

        this.onChange = this.onChange.bind(this);
        this.setProcessingState = this.setProcessingState.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }

    componentDidMount() {
        // clear the message box
        // set the payment status none {none, processing}
    }

    onChange(e) {

        e.preventDefault();

        let message = e.target.value;

        this.setState({
            message: e.target.value
        });

        if (message === "") {
            this.setState({
                disabled: true
            });
        } else {
            this.setState({
                disabled: false
            });
        }
    }

    setProcessingState(state) {
        this.setState({
            paymentProcessing: state
        });
    }

    setMessage(message) {
        this.setState({
            message: message
        });
    }

    render() {
        return (
            <form>
                <SpatulaMessage handle={this.onChange} value={this.state.message} placeholder="Your message here in 70 characters…"/>
                <PaymentStatus />
                <Pay message={this.state.message} setMessage={this.setMessage} setProcessingState={this.setProcessingState}/>
            </form>
        );
    }
}

export default Buy;
