import { Directive, HostListener, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appSaveButton]'
})
export class SaveButtonDirective {

  private readonly snackBar = inject(MatSnackBar);

  @HostListener('click') onClick() {
    this.snackBar.open('Your changes have been saved successfully!', 'Dismiss', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
