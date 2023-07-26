import { createServer } from 'node:http'
import { faker } from '@faker-js/faker'
import { setTimeout } from 'node:timers/promises'
import { once } from 'node:events'
createServer(async (req, res) => {
    // Allow CORS for all origins and methods
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    // Handling preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return
    }

    if(req.url.includes('analytics') && req.method === 'POST') {
        const { appId, ...args } = JSON.parse(await once(req, 'data'))
        console.log(`[app: ${appId}]`, args)

        res.writeHead(200)
        res.end('ok')
        return;
    }
    // get limit and skip from query string or set default values
    const params = new URLSearchParams(req.url.split('?')[1])
    const limit = parseInt(params.get('limit')) || 10 // Default limit is 10
    const skip = parseInt(params.get('skip')) || 0   // Default skip is 0
    const search = params.get('search') || ''        // Default search is an empty string

    // Generate objects as an array with faker library
    res.writeHead(200, { 'Content-Type': 'application/json' })

    for (let i = 0; i < limit; i++) {
        // if (name.toLowerCase().includes(search.toLowerCase())) {
        const data = {
            id: i + 1,
            name: faker.person.fullName(),
            age: faker.number.int(18, 100),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            vehicle: faker.vehicle.model(),
        }
        res.write(JSON.stringify(data).concat('\n'))
        await setTimeout(100)
    }

    // Set the response headers and send the data as JSON
    return res.end()

}).listen(3000, () => console.log('Server is running at http://localhost:3000/'))
