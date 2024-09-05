import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftsController {
  constructor() {
    console.log('GiftsController has loaded');
    AppState.on('user', this.getGifts)
    AppState.on('gift', this.drawGifts)
    // this.getGifts()
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error);
      console.error(error);
    }
  }

  drawGifts() {
    const gift = AppState.gift
    let giftHTML = ''

    gift.forEach(gift => giftHTML += gift.giftsHTMLTemplate)
    setHTML('gift-template', giftHTML)
  }

  openGift() {
    console.log('Gift has been received by Controller');
    giftsService.openGift()

  }
}