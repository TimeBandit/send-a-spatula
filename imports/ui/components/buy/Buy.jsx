import React from 'react';
import StripeInstance from "../../helpers/StripeInstance";
import SpatulaMessage from "./SpatulaMessage";
import PaymentStatus from "./PaymentStatus";
import Pay from "./Pay";

export class Buy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            buttonDisabled: true
        };

        this.onChange = this.onChange.bind(this);
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

    render() {
        return (
            <form>
                <SpatulaMessage handle={this.onChange} value={this.state.message} placeholder="Your Message Here In 70 Characters…"/>
                <PaymentStatus />
                <Pay />
                <input className="button-primary" value="buy now" type="submit"/>
            </form>
        );
    }
}

export default Buy;
