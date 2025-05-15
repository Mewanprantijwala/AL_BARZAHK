const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 5000


app.set('view engine', 'ejs')

app.use(express.static('Assets'))

app.get('/', (_req, res) => {
    res.render('Pages/Home', {
        title: 'AL-BARKZAKH-EXPORT',
        description: 'Welcome to the home page'
    })
    
})

app.get('/about', (_req, res) => {
    res.render('Pages/About', {
        title: 'AL-BARKZAKH-EXPORT',
        description: 'Learn more about us'
    })
}
)

app.get('/contact', (_req, res) => {
    res.render('Pages/Contact', {
        title: 'AL-BARKZAKH-EXPORT',
        description: 'Get in touch with us'
    })
})

app.get('/Services', (_req, res) => {
    res.render('Pages/services', {
        title: 'AL-BARKZAKH-EXPORT',
        description: 'Explore our products'
    })
})


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))