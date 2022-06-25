import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mangalore-productivity-council';
  teamMembers = [
    {
      name: 'U.Rama Rao',
      designation: 'President',
      mobileNo: '0824-2455719',
      email: '',
    },
    {
      name: 'P.Ravindra Rao',
      designation: 'Secretary',
      mobileNo: '0824-3553936, 81470-22006',
      email: '',
    },
    {
      name: 'Chandrashekar Mayya',
      designation: 'Treasurer',
      mobileNo: '99029-44059',
      email: 'ravindrarao17@gmail.com',
    },
  ];
  membershipOptions = [
    {
      type: 'Life Membership',
      price: 'Rs. Two Thousand',
    },
    {
      type: 'Patron',
      price: 'Rs. Five Thousand',
    },
  ];
  showMembershipAlert: boolean;

  membershipClicked() {
    this.showMembershipAlert = true;
  }

  closeAlert() {    
    this.showMembershipAlert = false;
  }

  logoClicked() {
    window.scrollTo(0,0)
  }
}
