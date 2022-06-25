import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent {
  @Input() membership: any;
  @Output() membershipClicked = new EventEmitter();

  membershipCheck() {
    this.membershipClicked.emit();
  }
}
