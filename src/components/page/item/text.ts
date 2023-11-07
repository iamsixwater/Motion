import { BaseComponent } from '../../component.js';

export class TextComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="text">
              <h2 class="page-item__title text__title"></h2>
              <p class="text__body"></p>
          </section>`);

    const titleElement = this.element.querySelector(
      '.text__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(
      '.text__body'
    )! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
