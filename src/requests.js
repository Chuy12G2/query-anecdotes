import axios from "axios";

const baseUrl = 'http://localhost:3002/anecdotes'

export const getAnecdotes = () =>
  axios.get(baseUrl).then(res => res.data)

export const addAnecdote = (newAnecdote) => {
  if(newAnecdote.content.length < 5){
    return
  }

  axios.post(baseUrl, newAnecdote).then(res => res.data)
}

export const updateAnecdote = (updatedAnecdote) => {
  axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)
}