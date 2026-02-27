import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { AvatarComponent } from '../avatar/avatar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule, AvatarComponent, MatMenuModule,MatButtonModule,MatIcon,RouterLink, MatTableModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly service = inject(UsersService);
  private readonly router = inject(Router)

  public user : User | null = null;

  ngOnInit(): void {
    this.service.currentUser().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        console.error('Error fetching current user:', err);
      }
    });
  }

  goToSettings(){
    this.router.navigate(['/settings'])
  }
}
