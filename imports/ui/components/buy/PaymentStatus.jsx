import React from 'react';

const PaymentStatus = ({ paymentProcessing }) => {
    if (paymentProcessing) {
        return (
            <p>
				<i className="fa fa-cog fa-spin fa-fw"></i>
				<span className="sr-only">Processing your payment</span>
				<span>Processing your payment...</span>
			</p>);
    } else {
        return (
            <span></span>
        )
    }
}

export default PaymentStatus;
