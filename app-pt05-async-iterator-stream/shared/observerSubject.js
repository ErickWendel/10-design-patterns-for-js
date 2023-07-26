export default class ObserverSubject {
    #observers = new Set()
    notify(data) {
        this.#observers.forEach(observer => observer.notify(data))
    }

    unsubscribe(observable) {
        this.#observers.delete(observable)
    }

    subscribe(observable) {
        this.#observers.add(observable)
    }
}