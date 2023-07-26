import assert from 'node:assert'
import { it, describe } from 'node:test'
import fetch from './model/fetchResponse.js'
import Service from '../shared/service.js'

describe('Test Data Builder', () => {
    const service = new Service({ url: '' })

    it('shouldn\'t return error with valid response', async () => {
        const response = fetch.aResponse().build()
        global.fetch = (url) => response
        const results = []
        for await (const result of service.getData()) results.push(result)

        const expected = [
            {
                id: 1,
                name: 'Mrs. Misty Rempel-Lehner',
                age: 8,
                email: 'Monique.Leffler@yahoo.com',
                phone: '(551) 801-5964',
                vehicle: 'Land Cruiser'
            }
        ]

        assert.deepStrictEqual(results, expected)
    })

    describe('Response Errors', () => {
        it('should not contain items when an internal server error happens', async () => {
            const response = fetch.aResponse().withStatus500().build()
            global.fetch = (url) => response
            const results = []
            for await (const result of service.getData()) results.push(result)
            const expected = []

            assert.deepStrictEqual(results, expected)
        })
        it('should not contain items when an not found error happens', async () => {
            const response = fetch.aResponse().withStatus404().build()
            global.fetch = (url) => response
            const results = []
            for await (const result of service.getData()) results.push(result)
            const expected = []
            assert.deepStrictEqual(results, expected)
        })
        it('should not throw if the body response is invalid', async () => {
            const response = fetch.aResponse().withInvalidBody().build()
            global.fetch = (url) => response
            const results = []
            for await (const result of service.getData()) results.push(result)
            const expected = []
            assert.deepStrictEqual(results, expected)
        })
    })
})