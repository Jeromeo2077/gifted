import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gifts.js";


class GiftsService {

  async getGifts() {
    const response = await api.get('/api/gifts')
    console.log('Received Gifts!', response.data);
    const newGift = new Gift(response.data)
    AppState.gift = newGift
    console.log('Logging Appstate', AppState.gift);

  }
}


export const giftsService = new GiftsService()