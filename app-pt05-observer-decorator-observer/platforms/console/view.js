import LayoutBuilder from "./layoutBuilder.js"

export default class View {
    #components
    #headers = []
    #firstRender = true

    #onSearch = () => { }

    constructor() { }

    configureOnClearClick(onClear) {
    }

    configureOnSearchClick(onSearch) {
        this.#onSearch = (input) => {
            return () => {
                const message = input.getValue().trim()
                onSearch(message)
                input.clearValue()
                input.focus()
            }
        }
    }

    #prepareData(data) {
        if (!data.length) {
            return {
                headers: this.#headers,
                data: []
            }
        }

        this.#headers = Object.keys(data[0]).slice(0, 3)
        return {
            headers: this.#headers,
            data: data.map(item => Object.values(item).slice(0, 3))
        }
    }

    #updateTable(data) {
        const template = this.#prepareData(data)
        this.#components.table.setData({
            headers: template.headers,
            data: template.data
        })
    }

    render(data) {
        if (!this.#firstRender) {
            this.#updateTable(data);
            return;
        }

        const template = this.#prepareData(data)
        const layout = new LayoutBuilder()

        this.#components = layout
            .setScreen({ title: 'Design Patterns with Erick Wendel' })
            .setLayoutComponent()
            .setSearchComponent(this.#onSearch)
            .setTable(template)
            .build()

        this.#firstRender = false
    }
}
