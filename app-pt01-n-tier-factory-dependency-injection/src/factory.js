import Service from './service.js'
import View from './view.js'
import Controller from './controller.js'

async function init() {
    return Controller.init({
        view: new View(),
        service: new Service({ url: 'http://localhost:3000' }),
    })
}
export {
    init
}