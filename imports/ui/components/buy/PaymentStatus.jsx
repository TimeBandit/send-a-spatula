import React from 'react';

const PaymentStatus = ({ paymentInProgress }) => {
    if (!paymentInProgress) {
        return (
            <p>
				<i className="fa fa-cog fa-spin fa-fw"></i>
				<span className="sr-only">Processing your payment....</span>	
			</p>);
    } else {
        return (
            <span></span>
        )
    }
}

export default PaymentStatus;
