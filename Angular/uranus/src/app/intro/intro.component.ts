import { Component } from '@angular/core';
import { WindowComponent } from '../shared/window/window.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ WindowComponent ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {

  typescriptCode: string = "import { Component } from '@angular/core';\nimport { ShowcaseComponent } from '../shared/showcase/showcase.component';\nimport { ShowcaseType } from '../enums/showcasetype.enum';\n\n@Component({\n  selector: 'app-intro',\n  standalone: true,\n  imports: [ ShowcaseComponent ],\n  templateUrl: './intro.component.html',\n  styleUrl: './intro.component.scss'\n})\nexport class IntroComponent {\n\n  readonly ShowcaseType = ShowcaseType;\n\n  code: string = \"Here goes the code you're reading right now\";\n\n  numberOfRows: number = (this.code.match(/\\n/g) || []).length + 1;\n}";
  htmlCode: string = "<div class=\"showcase-row\">\n    <div class=\"showcase-left\">\n        <div class=\"inline-h1\"><h1>Welcome </h1>curious explorer,</div>\n        <p>to a journey through the intricate web of technology that powers this very site. Much like a finely-tuned ecosystem, every element of this website works in harmony, from the moment you type the URL to the instant the page appears before you.</p>\n        <p>Together, we'll delve into the underlying code, uncover the hidden frameworks, and traverse the infrastructure that sustains this digital habitat. Like the delicate balance of life in nature, this website relies on countless components working in concert — each with a crucial role to play in this ever-evolving digital landscape.</p>\n        <p>Prepare to witness the fascinating dance of data, design, and development. Welcome to the hidden world behind the screen!</p>\n    </div>\n    <div class=\"divider-1-vertical\" role=\"separator\" aria-label=\"Divider-Vertical\"></div>\n    <div class=\"showcase-right\">\n        <app-window title=\"intro.pdf\">\n            <img src=\"earth-icon-vector-art.png\" alt=\"Logo\" />\n            <p>At present, the image stands alone, without the text it so dearly deserves. One can only hope that, in the near future, this imbalance will be addressed, and the story behind the image will finally be told.</p>\n        </app-window>\n        \n        <h2>Angular</h2>\n        <p>Look upon my works ye mighty, and despair.</p>\n\n        <h3>Typescript</h3>\n        <p></p>\n        <app-window title=\"intro.component.ts\" [code]=\"code\" [numberOfRows]=\"numberOfRows\"></app-window>\n\n        <h3>HTML</h3>\n        <p></p>\n        <app-window title=\"intro.component.html\" [code]=\"code\" [numberOfRows]=\"numberOfRows\"></app-window>\n\n        <h3>CSS</h3>\n        <p></p>\n        <app-window title=\"intro.component.scss\" [code]=\"code\" [numberOfRows]=\"numberOfRows\"></app-window>\n    </div>\n</div>";
  cssCode: string = "";

  numberOfRows = (str: string): number => (str.match(/\n/g) || []).length + 1;
}