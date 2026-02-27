import { Directive, inject, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appIfCurrentUser]'
})
export class IfCurrentUserDirective implements OnInit, OnDestroy {

  @Input('appIfCurrentUser') userId: number | null = null;

  private readonly userService = inject(UsersService);
  private readonly viewContainerRef = inject(ViewContainerRef)
  private readonly templateRef = inject(TemplateRef);
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.userService.currentUser().subscribe({
      next: (currentUser) => {
        if (currentUser && this.userId !== null && currentUser.id === this.userId) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      },
      error: (err) => {
        console.error('Error fetching current user:', err);
        this.viewContainerRef.clear();
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}