export default class View {
    #btnSearch = document.querySelector('#btnSearch')
    #btnClear = document.querySelector('#btnClear')
    #filter = document.querySelector('#filter')
    #container = document.querySelector('#container')
    #firstRender = true

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

    #buildTableHeader(data) {
        const [firstItem] = data
        const tHeaders = Object.keys(firstItem)
            .map(text => `<th scope=col>${text}</th>`)

        const template = `
        <table id="table" class="table">
            <thead>
                <tr>${tHeaders.join('')}</tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
        `

        return template
    }

    #updateTableBody({ data = [], cleanFirst = false }) {
        const tBodyValues = data
            .map(item => Object.values(item))
            .map(item => item.map(value => `<td>${value}</td>`))
            .map(tds => `<tr>${tds.join('')}</tr>`)

        const tbody = document.getElementById('tbody')
        if (cleanFirst) tbody.innerHTML = ''

        tbody.innerHTML += tBodyValues.join('')
    }


    render(data) {
        const isArray = Array.isArray(data)
        const items = isArray ? data : [data]
        if (this.#firstRender || isArray) {
            const tableHeader = this.#buildTableHeader(items)
            this.#container.innerHTML = tableHeader;
            this.#firstRender = false
        }

        this.#updateTableBody({
            data: items,
            cleanFirst: isArray
        })
        return;
    }
}