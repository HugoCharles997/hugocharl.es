import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'hugocharles';

  constructor() {}
  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const target2 = document.querySelector('.tw2');

    const writer1 = new Typewriter(target, {
      typeSpeed: 80,
      deleteSpeed: 20,
      typeColor: 'rgb(255, 252, 247)',
      cursorColor: 'rgb(255, 252, 247)',
    });

    const writer2 = new Typewriter(target2, {
      typeSpeed: 80,
      cursorColor: 'rgb(255, 252, 247)',
      typeColor: '#efc2d5',
    });

    writer1
      .type('Hello there. ')
      .rest(300)
      .type(' I am Hugo, ')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start();

    writer2
      .rest(300)
      .type('web developer')
      .rest(600)
      .clear()
      .type('used to Angular')
      .rest(600)
      .clear()
      .type('back-end, db & API')
      .rest(600)
      .clear()
      .type('proJUCEr')
      .rest(600)
      .clear()
      .type('Blender learner')
      .rest(600)
      .clear()
      .type('Bitwig producer')
      .rest(600)
      .clear()
      .then(writer1.start.bind(writer1));

    // .changeTypeColor('red')
    // .type('web developer?')
    // .rest(500)
    // .remove(14)
    // .type('Angular developer?')
    // .type('synchronize callbacks')
    // .rest(500)
    // .remove(21)

    // .type('change options on the go')
    // .rest(500)
    // // .clear()
    // .start();
  }
}
