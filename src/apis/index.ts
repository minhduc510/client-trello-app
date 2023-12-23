import axios from 'axios'

import { API_ROOT } from '@/utils/constants'
import { ColumnBodyProps, CardBodyProps } from '@/interface'

export const fetchBoardDetailsAPI = async (
  boardId: string
) => {
  const response = await axios.get(
    `${API_ROOT}/v1/boards/${boardId}`
  )
  return response.data
}

export const updateBoardDetailsAPI = async (
  id: string,
  newCardData: {
    columnOrderIds: string[]
  }
) => {
  const response = await axios.put(
    `${API_ROOT}/v1/boards/${id}`,
    newCardData
  )
  return response.data
}

export const moveCardToDifferentColumnAPI = async (data: {
  currentCardId: string | number
  prevColumnId: string
  prevCardOrderIds: string[]
  nextColumnId: string
  nextCardOrderIds: string[]
}) => {
  const response = await axios.put(
    `${API_ROOT}/v1/boards/supports/moving_card`,
    data
  )
  return response.data
}

export const updateColumnDetailsAPI = async (
  id: string,
  updateData: {
    cardOrderIds: string[]
  }
) => {
  const response = await axios.put(
    `${API_ROOT}/v1/columns/${id}`,
    updateData
  )
  return response.data
}

export const deleteColumnDetailsAPI = async (
  id: string
) => {
  const response = await axios.delete(
    `${API_ROOT}/v1/columns/${id}`
  )
  return response.data
}

export const createNewColumnAPI = async (
  newColumnData: ColumnBodyProps
) => {
  const response = await axios.post(
    `${API_ROOT}/v1/columns`,
    newColumnData
  )
  return response.data
}

export const createNewCardAPI = async (
  newCardData: CardBodyProps
) => {
  const response = await axios.post(
    `${API_ROOT}/v1/cards`,
    newCardData
  )
  return response.data
}
