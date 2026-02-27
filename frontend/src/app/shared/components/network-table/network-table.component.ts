import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router } from '@angular/router';

import { HighlightDirective } from '../../directives/highlight-directive/highlight.directive';
import { TechIconsDirective } from '../../directives/tech-icons-direcitive/tech-icons.directive';

@Component({
  selector: 'app-network-table',
  imports: [MatTableModule, MatIcon, AvatarComponent, HighlightDirective, TechIconsDirective],
  templateUrl: './network-table.component.html',
  styleUrl: './network-table.component.scss',
})

export class NetworkTableComponent implements OnInit {
  public readonly displayedColumns: string[] = ['name', 'headline', 'location', 'connections'];
  public users: User[] = []
  public selectedUser : User | null = null;

  private readonly router = inject(Router)
  private readonly usersService = inject(UsersService)


  ngOnInit(): void {
    this.usersService.allUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    })
  }

  goToUserProfile(userId : number){
    this.router.navigate(['/profile',userId])
  }
}
