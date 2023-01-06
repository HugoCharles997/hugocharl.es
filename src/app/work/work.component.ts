import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  frontEndProjects = [
    {
      name: 'Project 1',
      description: 'hi',
      image: 'assets/images/mypicture.png',
    },
    {
      name: 'random portfolio',
      description: 'my very first website. HTML/CSS, bit of JS',
      image: 'assets/images/firstportfolio.png',
    },
    {
      name: 'Project 1',
      description: 'Project 1 description',
      image: 'assets/images/mypicture.png',
    },
    {
      name: 'Project 1',
      description: 'Project 1 description',
      image: 'assets/images/firstportfolio.png',
    },
    {
      name: 'Project 1',
      description: 'Project 1 description',
      image: 'assets/images/firstportfolio.png',
    },
    {
      name: 'this project lol',
      description: 'made with angular/SCSS, and is awesome',
      image: 'assets/images/homesite.png',
    },
  ];

  backEndProjects = [
    {
      name: 'random portfolio',
      description: 'my very first website. HTML/CSS, bit of JS',
      image: 'assets/images/firstportfolio.png',
    },
    {
      name: 'random portfolio',
      description: 'my very first website. HTML/CSS, bit of JS',
      image: 'assets/images/firstportfolio.png',
    },
    {
      name: 'random portfolio',
      description: 'my very first website. HTML/CSS, bit of JS',
      image: 'assets/images/firstportfolio.png',
    },
  ];
  getProjects() {
    return this.frontEndProjects;
  }
  getBackEndProjects() {
    return this.backEndProjects;
  }
}
