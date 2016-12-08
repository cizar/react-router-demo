import axios from 'axios'

const INITIAL_STATE = []

export const TOPICS_SET = 'TOPICS_SET'
export const setTopics = (topics) => ({
  type: TOPICS_SET,
  topics
})

export const fetchTopics = () => (dispatch) => {
  return axios.get('/api/items')
    .then(({ data }) => dispatch(setTopics(data)))
}

export const TOPICS_ADD = 'TOPICS_ADD'
export const addTopic = (topic) => ({
  type: TOPICS_ADD,
  topic
})

export const createTopic = (topic) => (dispatch) => {
  return axios.post('/api/items', topic)
    .then(({ data }) => dispatch(addTopic(data)))
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOPICS_SET:
      return [...action.topics]
    case TOPICS_ADD:
      return [...state, action.topic]
    default:
      return state
  }
}