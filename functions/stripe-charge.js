const stripe = require('stripe')('sk_test_Y3t733LBcrtUcs057oNaQqx9')

exports.handler = async function(event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        description,
        currency: 'usd'
    })
}