import blessed from 'blessed'
import contrib from 'blessed-contrib'

export default class LayoutBuilder {
    #screen
    #layout
    #input
    #table

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

    setLayoutComponent() {
        this.#layout = blessed.layout({
            parent: this.#screen,
            width: '100%',
            height: '100%',
        })

        return this
    }

    setScreen({ title }) {
        this.#screen = blessed.screen({
            smartCSR: true,
            title
        })

        this.#screen.key(['escape', 'q', 'C-c'], () => process.exit(0))

        return this
    }

    setSearchComponent(onSearch) {
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

        input.key('enter', onSearch(input))
        this.#input = input

        return this
    }

    setTable(template) {
        const columnWidth = template.data[0].map(header => String(header).length + 10)
        this.#table = contrib.table(
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

        this.#table.setData(template)

        return this
    }

    build() {
        const components = {
            screen: this.#screen,
            input: this.#input,
            table: this.#table,
        }

        this.#input.focus()
        this.#screen.render()

        return components
    }

}