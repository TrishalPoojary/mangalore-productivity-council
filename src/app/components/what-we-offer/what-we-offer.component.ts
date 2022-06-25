import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent {
  ourOfferings = [{
    description: "Fire fighting and Disaster Management"
  }, {
    description: "First Aid"
  }, {
    description: "Stress Management, Life style Management and Health care"
  }, {
    description: "Effective financial and Tax planning"
  }, {
    description: "Personality Development, Communication and Motivation"
  }, {
    description: "Productivity and quality Management"
  }, {
    description: "Customer service and sales Management"
  }, {
    description: "Programme for H.R, finance Managers"
  }, {
    description: "Leadership, Creativity and time Management"
  }, {
    description: "How to face Interview for an attractive job?"
  }, {
    description: "Art of public speaking"
  }, {
    description: "Investment in shares and mutual funds"
  }, {
    description: "Happiness and Humour, 14 GST"
  }]
}
