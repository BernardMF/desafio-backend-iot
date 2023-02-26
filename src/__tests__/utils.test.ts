import * as m from './__mocks__/utils.mock'
import * as utils from '../utils'

describe('Tests for schema validate function', () => {
  it('Should throw error because object is incompatible with the schema provided', async () => {
    expect(() => utils.validateRequestSchema(m.testSchema, m.invalidRequest)).toThrow()
  })
  it('Should return a valid object', async () => {
    expect(utils.validateRequestSchema(m.testSchema, m.validRequest)).toBeTruthy()
  })
})
