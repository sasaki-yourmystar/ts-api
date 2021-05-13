const hello = (name: string): void => console.log('hello', name)
hello('Nanami')

import express from 'express'

const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()
router.get('/test', (req:express.Request, res:express.Response) => {
    res.send('get')
})
router.post('/test', (req:express.Request, res:express.Response) => {
    res.send('post')
})
router.put('/test', (req:express.Request, res:express.Response) => {
    res.send('put')
})
router.delete('/test', (req:express.Request, res:express.Response) => {
    res.send('delete')
})
app.use(router)

// app.listen(3000,()=>{ console.log('Example app listening on port 3000!') })