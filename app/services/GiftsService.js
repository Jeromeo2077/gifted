import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gifts.js";


class GiftsService {
  async openGift(giftId) {

    const gift = AppState.gift.find(gift => gift.id == giftId)

    console.log('Gift has been received by Service', giftId, gift);

    const giftData = { opened: true }

    const response = await api.put(`api/gifts/${giftId}`, giftData)

  }

  async getGifts() {
    const response = await api.get('/api/gifts')

    const gift = response.data.map(giftData => new Gift(giftData))

    AppState.gift = gift
  }
}


export const giftsService = new GiftsService()