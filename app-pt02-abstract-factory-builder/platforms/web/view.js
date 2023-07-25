export default class View {
    #btnSearch = document.querySelector('#btnSearch')
    #btnClear = document.querySelector('#btnClear')
    #filter = document.querySelector('#filter')
    #container = document.querySelector('#container')

    configureOnClearClick(onClear) {
        this.#btnClear.addEventListener('click', () => {
            this.#filter.value = ''
            onClear()
        })
    }

    configureOnSearchClick(onSearch) {
        this.#btnSearch.addEventListener('click', () => {
            onSearch(this.#filter.value)
        })
    }

    #prepareData(data) {
        const [firstItem] = data
        const tHeaders = Object.keys(firstItem)
            .map(text => `<th scope=col>${text}</th>`)
        const joinLists = list => list.join('')

        const tBodyValues = data
            .map(item => Object.values(item))
            .map(item => item.map(value => `<td>${value}</td>`))
            .map(tds => `<tr>${joinLists(tds)}</tr>`)
        const template = `
            <table class="table">
                <thead>
                    <tr>${joinLists(tHeaders)}</tr>
                </thead>
                <tbody>
                    ${joinLists(tBodyValues)}
                </tbody>
            </table>
            `

        return template
    }

    render(data) {
        const template = this.#prepareData(data)
        this.#container.innerHTML = template
    }
}