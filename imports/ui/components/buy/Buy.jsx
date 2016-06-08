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
            paymentInProgress: false,
            shake: false
        };

        this.onChange = this.onChange.bind(this);
        this.paymentInProgressUpdate = this.paymentInProgressUpdate.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.shake = this.shake.bind(this);
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

    paymentInProgressUpdate(state) {

        this.setState({
            paymentProcessing: state
        });
    }

    setMessage(message) {

        this.setState({
            message: message
        });
    }

    shake(){

        let self = this;
        self.setState({shake: true});

        Meteor.setTimeout(function() {

            self.setState({shake: false});
        }, 1000);
    }

    render() {
        return (
            <form>
                <SpatulaMessage handle={this.onChange} 
                value={this.state.message} 
                placeholder="Your message here in 70 characters…"
                shake={this.state.shake}/>
                <PaymentStatus state={this.state.message}/>
                <Pay message={this.state.message} 
                setMessage={this.setMessage} 
                paymentInProgressUpdate={this.paymentInProgressUpdate}
                shake={this.shake}/>
            </form>
        );
    }
}

export default Buy;
