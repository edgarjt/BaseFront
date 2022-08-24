import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from "../../../environments/environment";

interface menuInterface {
  routeLink: string,
  title: string
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{
  title: string;
  logo: string;
  menu: menuInterface[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.title = environment.title;
    this.logo = environment.logo;
  }

  ngOnInit(): void {
    this.loadMenu();
    console.log('navigation active')
  }

  loadMenu(): void {
    this.menu = [
      { routeLink: '/dummy', title: 'Dummy' },
      { routeLink: 'link', title: 'Components' },
      { routeLink: 'link', title: 'Forms' },
      { routeLink: 'link', title: 'Table' }
    ]
  }
}
