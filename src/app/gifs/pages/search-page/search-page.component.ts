import { Component } from '@angular/core';
import {GifListComponent} from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-search-page',
  imports: [
    GifListComponent
  ],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent {

  onSearch(query: string) {
    console.log({query});
  }
}
