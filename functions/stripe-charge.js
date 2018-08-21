const stripe = require('stripe')('sk_test_Y3t733LBcrtUcs057oNaQqx9')

exports.handler = async function (event) {
	const {
		tokenId,
		email,
		name,
		description,
		amount
	} = JSON.parse(event.body)

	const customer = await stripe.customers.create({
		email: email,
		source: tokenId
	})

	await stripe.charges.create({
		customer: customer.id,
		amount,
		name,
        description,
        receipt_email: customer.email,
		currency: 'usd'
	})
}