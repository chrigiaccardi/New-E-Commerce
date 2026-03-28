const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));


//INSERIRE QUA API STRIPE



app.post('/checkout', async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: {
                allowed_countries: ['IT'],
            },
            shipping_options: [
                {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: 0,
                        currency: 'EUR',
                    },
                    display_name: 'Spedizione Gratuita',
                    delivery_estimate: {
                        minimum: {
                            unit: 'business_day',
                            value: 5,
                        },
                        maximum: {
                            unit: 'business_day',
                            value: 7,
                            },
                        },
                    },
                },
                {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: 1500,
                        currency: 'EUR',
                        },
                    display_name: 'Giorno Successivo',
                    delivery_estimate: {
                        minimum: {
                            unit: 'business_day',
                            value: 1,
                        },
                        maximum: {
                            unit: 'business_day',
                            value: 1,
                        },
                    },
                },
            },
        ],
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: "EUR",
                product_data: {
                    name: item.nome,
                    images: [item.prodotto]
                },
                    unit_amount: item.prezzo * 100,
                },
            quantity: item.quantita,
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html",
        });
        res.status(200).json(session)
    } catch (error) {
        next(error);
    }
});


app.listen(4242, () => console.log('app sta girando nella porta 4242'));

