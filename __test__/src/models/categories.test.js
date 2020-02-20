const Categories = require('../../../src/models/categories');
require('@code-fellows/supergoose')

const categories = new Categories()

describe('Categories model', () => {
    it('Can create a new category object', () => {
        const testObject = {
            name: "trevor",
            display_name:"trevor",
            description:"brother"
        }
        return categories.create(testObject)
        .then(record => {
            Object.keys(testObject).forEach(key => {
                expect(record[key]).toEqual(testObject[key])
            })
        }).catch(err => console.error('Error:', err))
    })
    it('Can get all category objects' , () => {
        const testObject = {
            _id: 1,
            name: "trevor",
            display_name: "trevor",
            description: "brother"
        }  

        return categories.read()
        .then(record => {
                expect(record).toEqual(testObject)

        })
    })
})