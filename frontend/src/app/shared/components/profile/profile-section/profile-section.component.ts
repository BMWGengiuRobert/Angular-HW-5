import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { Experience } from '../../../models/experience.model';
import { Education } from '../../../models/education.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-section',
  imports: [MatCardModule, MatDividerModule, MatChipsModule,MatIconModule],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss',
})
export class ProfileSectionComponent {
  @Input() title: string = '';
  @Input() about?: string;
  @Input() dateOfBirth?: string;
  @Input() experience?: Experience[];
  @Input() education?: Education[];
  @Input() skills?: string[];
}
