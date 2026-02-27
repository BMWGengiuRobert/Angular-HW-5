import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AvatarComponent } from '../avatar/avatar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatButtonModule,
    AvatarComponent,
    MatIconModule,
    MatDividerModule,
    ProfileSectionComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  private readonly usersService = inject(UsersService);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const userId = Number(params['userId']);
        this.usersService.getUserById(userId).subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (err) => {
            console.error('Error fetching user by ID:', err);
          }
        });
      },
      error: (err) => {
        console.error('Error fetching route parameters:', err);
      }
    });
  }
}
