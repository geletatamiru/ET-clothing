import { createSlice } from '@reduxjs/toolkit';
import hats from '../images/hats.png';
import jackets from '../images/jackets.png';
import men from '../images/men.png';
import sneakers from '../images/sneakers.png';
import womens from '../images/womens.png';
const initialState = {
  sections: [
      {
        title: 'hats',
        imageUrl: hats,
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: jackets,
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: sneakers,
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: womens,
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: men,
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
};

const directorySlice = createSlice({
  name: 'directory',
  initialState
 });

export default directorySlice.reducer;
