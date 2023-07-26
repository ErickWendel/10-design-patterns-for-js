import AnalyticsObserver from "../shared/observers/analytics.js"
import Controller from "../shared/controller.js"
import PerfDecorator from "../shared/perfDecorator.js"

import Service from "../shared/service.js"
import ObserverSubject from "../shared/observerSubject.js"
import LogObserver from "../shared/observers/log.js"

const isWeb = !!globalThis.window
const path = isWeb ? 'web' : 'console'
const { default: View } = await import(`./../platforms/${path}/view.js`)

const appId = (isWeb ? globalThis.crypto : (await import('node:crypto'))).randomUUID()
const url = 'http://localhost:3000'

const analytics = new AnalyticsObserver({ url })
const log = new LogObserver()

const subject = new ObserverSubject()
subject.subscribe(analytics)
subject.subscribe(log)
const perf = new PerfDecorator({ appId: `${path}:${appId}`, observers: subject })

const deps = {
    view: new View(),
    service: new Service({ url }),
}

perf.measureTime(Controller.init)(deps)