let apiRoot = ''
if (import.meta.env.MODE === 'development') {
  apiRoot = 'http://localhost:8017'
} else {
  apiRoot = 'https://trello-api-ecnn.onrender.com'
}

export const API_ROOT = apiRoot

export const BOARD_ID = '65846f194b167e85db1f6b25'

import Image1 from '@/images/image1.jpg'
import Image2 from '@/images/image2.jpg'
import Image3 from '@/images/image3.jpg'
import Image4 from '@/images/image4.jpg'
import Image5 from '@/images/image5.jpg'

export const FAKE_DATA_USER = [
  {
    username: 'User 1',
    avatar: Image1
  },
  {
    username: 'User 2',
    avatar: Image2
  },
  {
    username: 'User 3',
    avatar: Image3
  },
  {
    username: 'User 4',
    avatar: Image4
  },
  {
    username: 'User 5',
    avatar: Image5
  },
  {
    username: 'User 5',
    avatar: Image5
  },
  {
    username: 'User 5',
    avatar: Image5
  },
  {
    username: 'User 5',
    avatar: Image5
  },
  {
    username: 'User 5',
    avatar: Image5
  },
  {
    username: 'User 5',
    avatar: Image5
  }
]
