import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="video__title"></h3>
        </section>`);

    const iframeElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframeElement.src = this.convertToEmbeddedUrl(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private convertToEmbeddedUrl(url: string): string {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-_]{11}))|(?:youtu.be\/([a-zA-Z0-9-_]{11})))/;
    const matches = url.match(regex);
    const videoId = matches ? matches[1] || matches[2] : undefined;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
