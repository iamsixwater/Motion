import { Component } from './components/component.js';
import { ImageComponent } from './components/page/item/image.js';
import { TextComponent } from './components/page/item/text.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent } from './components/page/page.js';
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'image title',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      'this is title',
      'https://www.youtube.com/watch?v=K3-jG52XwuQ&t=441'
    );
    this.page.addChild(video);

    const text = new TextComponent('this is title', 'this is text');
    this.page.addChild(text);

    const todo = new TodoComponent('this is todo', 'this is todo text');
    this.page.addChild(todo);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
