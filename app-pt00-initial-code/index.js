let _database = []
let _btnSearch
let _filter
let _container

function prepareData(data) {
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

function render(data) {
    const template = prepareData(data)
    _container.innerHTML = template
}

const onSearch = (filter) => () => {
    const search = filter.value
    const filteredDatabase = _database.filter(({ name }) => {
        return name.toLowerCase().includes(search.toLowerCase())
    })
    render(filteredDatabase)
}

const onload = async () => {
    _btnSearch = document.querySelector('#btnSearch')
    _btnClear = document.querySelector('#btnClear')
    _filter = document.querySelector('#filter')
    _container = document.querySelector('#container'
    )
    _btnSearch.addEventListener('click', onSearch(_filter))
    _btnClear.addEventListener('click', () => {
        _filter.value = ''
        render(_database)
    })

    const database = await (await fetch('http://localhost:3000')).text()
    const data = _database = database.split('\n').filter(i => !!i).map(JSON.parse)
    render(data)
}

window.onload = onload