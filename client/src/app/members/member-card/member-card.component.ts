import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Member} from '../../_models/member';
import {MembersService} from '../../_services/members.service';
import {ToastrService} from 'ngx-toastr';
import {PresenceService} from '../../_services/presence.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MemberCardComponent implements OnInit {

  @Input() member: Member;
  isOnline$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private membersService: MembersService,
    private toastr: ToastrService,
    public presenceService: PresenceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.presenceService.onlineUsers$.subscribe(onlineUsers => {
      console.log(onlineUsers);
      if (onlineUsers.includes(this.member.userName)) {
        this.isOnline$.next(true);
      } else {
        this.isOnline$.next(false);
      }
      this.cdr.detectChanges();
      console.log(this.isOnline$.value)
    })
  }

  addLike(member: Member) {
    this.membersService.addLike(member.userName).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    });
  }

}
