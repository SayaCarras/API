import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'

const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(compression())
app.use(helmet())

app.listen(3000, () => {
    console.log('App listening on port 3000')

})

const router = express.Router()

router.get('/', (req, resp) => {

    console.log('This is / Route')
    resp.send('This is / Route')

})

app.use(router)


error e de eejcucion
