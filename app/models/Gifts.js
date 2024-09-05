export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.creatorId = data.creatorId
    this.id = data.id

    this.opened = false //Boolean
  }

  get giftsHTMLTemplate() {
    return `
      <div class="col-3">
        <div onclick="app.GiftsController.openGift('${this.id}')" class="card m-1">
            <img src="${this.url}" alt="${this.tag}">
            <p>${this.tag}</p>
        </div>
      </div>
    `
  }
}