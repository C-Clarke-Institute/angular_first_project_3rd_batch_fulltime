import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { SideNavBar } from './side-nav-bar/side-nav-bar';
import { ProductsWrapper } from './feature/products/components/products-wrapper/products-wrapper';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideNavBar, ProductsWrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('first-project');
}
