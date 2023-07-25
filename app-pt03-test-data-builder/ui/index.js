import Controller from "../shared/controller.js"
import Service from "../shared/service.js"

const path = globalThis.window ? 'web' : 'console'
const { default: View } = await import(`./../platforms/${path}/view.js`)

Controller.init({
    view: new View(),
    service: new Service({ url: 'http://localhost:3000' }),
})

