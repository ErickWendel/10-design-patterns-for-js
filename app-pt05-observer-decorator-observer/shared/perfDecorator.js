export default class PerfDecorator {
    #observers
    #appId
    constructor({ observers, appId }) {
        this.#observers = observers
        this.#appId = appId
    }

    measureTime(fn) {
        const fnName = fn.name
        const startedTag = `${fnName}-started`
        const endedTag = `${fnName}-ended`
        performance.mark(startedTag)
        this.#observers.notify({
            appId: this.#appId,
            tag: startedTag,
            at: Date.now()
        })

        return async (...args) => {
            const result = fn(...args)
            if (result.then) {
                await result
            }
            performance.mark(endedTag)
            const { duration } = performance.measure(`${fnName}-duration`, startedTag, endedTag)

            this.#observers.notify({
                appId: this.#appId,
                tag: endedTag,
                at: Date.now(),
                message: `${fnName} took ${duration}ms`
            })
        }
    }
}



