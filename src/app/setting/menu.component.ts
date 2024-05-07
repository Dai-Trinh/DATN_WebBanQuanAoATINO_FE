import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input() isCollapsed = false;

  constructor() {}

  access(listRole: string[]) {
    if (listRole === null) {
      return true;
    }
    return false;
    // return listRole.some((role: string) => {
    //   return this.checkRoleService.checkRole(role);
    // });
  }

  lstMenuRes?: any[] = [
    {
      name: 'Home',
      url: 'home',
      classIcon: 'home',
      role: null,
      lstChild: null,
    },
  ];
}
