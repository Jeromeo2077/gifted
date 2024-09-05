import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gifts.js";


class GiftsService {
  openGift() {
    console.log('Gift has been received by Service');

  }

  async getGifts() {
    const response = await api.get('/api/gifts')

    const gift = response.data.map(giftData => new Gift(giftData))

    AppState.gift = gift
  }
}


export const giftsService = new GiftsService()