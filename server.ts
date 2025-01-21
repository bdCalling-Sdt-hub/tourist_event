const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT || '5000', 10)
const dev =false // process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    //@ts-ignore
    createServer((req, res) => {
        const parsedUrl = parse(req.url!, true)
        handle(req, res, parsedUrl)
    }).listen(port)

    console.log(
        `> Server listening at http://192.168.10.25:${port} as ${dev ? 'development' : process.env.NODE_ENV
        }`
    )
})
// "scripts": {
//     "dev": "ts-node server.ts",
//     "build": "next build",
//     "start": "ts-node server.ts"
//   },
