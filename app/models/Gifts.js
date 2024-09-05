export class Gift {
  constructor(data) {
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened //Boolean
    this.creatorId = data.creatorId
  }

  get giftsHTMLTemplate() {
    return `
    <div class="col-3">
              <div class="card">
                <img src="${this.url}" alt="${this.tag}">
                <p>${this.tag}</p>
              </div>
            </div>
    `
  }
}