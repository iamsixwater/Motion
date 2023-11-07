import { ImageComponent } from './components/page/item/image.js';
import { TextComponent } from './components/page/item/text.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { PageComponent } from './components/page/page.js';
class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'image title',
      'https://picsum.photos/600/300'
    );
    image.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent(
      'this is title',
      'https://www.youtube.com/watch?v=K3-jG52XwuQ&t=441'
    );
    video.attachTo(appRoot, 'beforeend');

    const text = new TextComponent('this is title', 'this is text');
    text.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('this is todo', 'this is todo text');
    todo.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
