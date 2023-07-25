import blessed from 'blessed'
import contrib from 'blessed-contrib'

export default class View {
    #screen
    #layout
    #input
    #onSearch = () => { }
    #onClear = () => { }
    constructor() { }

    configureOnClearClick(onClear) {
        this.#onClear = onClear
    }

    configureOnSearchClick(onSearch) {
        this.#onSearch = onSearch
    }

    #baseComponent() {
        return {
            border: 'line',
            mouse: true,
            keys: true,
            top: 0,
            scrollboard: {
                ch: ' ',
                inverse: true
            },
            tags: true
        }
    }

    setScreen({ title }) {
        this.#screen = blessed.screen({
            smartCSR: true,
            title
        })

        this.#screen.key(['escape', 'q', 'C-c'], () => process.exit(0))

        return this
    }

    setLayoutComponent() {
        this.#layout = blessed.layout({
            parent: this.#screen,
            width: '100%',
            height: '100%',
        })

        return this
    }

    setSearchComponent(onEnterPressed) {
        const input = blessed.textarea({
            parent: this.#screen,
            bottom: 2,
            height: '15%',
            inputOnFocus: true,
            padding: {
                top: 1,
                left: 2
            },
            style: {
                fg: '#f6f6f6',
                bg: '#353535'
            }
        })

        input.key('enter', onEnterPressed)
        this.#input = input

        return this

    }

    setTable(template) {
        const columnWidth = template.data[0].map(header => String(header).length + 10)
        const table = contrib.table(
            {
                ...this.#baseComponent(),
                parent: this.#layout,
                keys: true,
                fg: 'white',
                selectedFg: 'white',
                selectedBg: 'blue',
                interactive: true,
                label: 'Users',
                width: '100%',
                height: '75%',
                bottom: 1,
                border: { type: "line", fg: "cyan" },
                columnSpacing: 10,
                columnWidth
            })

        table.focus()
        table.setData({
            headers: template.headers,
            data: template.data
        })

        return this
    }

    build() {
        const components = {
            screen: this.#screen,
            input: this.#input,
        }

        return components
    }

    #prepareData(data) {
        return {
            headers: Object.keys(data[0]).slice(0, 3),
            data: data.map(item => Object.values(item).slice(0, 3))
        }
    }

    render(data) {
        const that = this;
        const template = this.#prepareData(data)
        const components = this.setScreen({ title: 'HackerChat - Erick Wendel' })
            .setLayoutComponent()
            .setSearchComponent(function () {
                const message = this.getValue()
                that.#onSearch(message)
                this.clearValue()
            })
            .setTable(template)
            .build()

        components.input.focus()
        components.screen.render()
    }
}
