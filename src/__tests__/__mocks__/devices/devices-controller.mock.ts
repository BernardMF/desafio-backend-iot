import { getMockReq } from '@jest-mock/express'

export const validCreateBody = {
  name: 'test-device',
  description: 'test-device-description',
  topic: 'test-device-type'
}

export const createRequest = getMockReq({
  body: {
    name: 'test-device',
    description: 'test-device-description',
    topic: 'test-device-type'
  }
})
export const createRequestInvalid = getMockReq({
  body: {
    name: 'test-device',
    description: 'test-device-description'
  }
})

export const queryRequest = getMockReq({
  query: {}
})

export const queryRequestInvalid = getMockReq({
  query: {
    id: '123'
  }
})

export const idRequestInvalid = getMockReq({
  params: {
    id: '123'
  }
})
export const idRequestWithoutId = getMockReq({
  params: {}
})
