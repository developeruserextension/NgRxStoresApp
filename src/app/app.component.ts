import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState} from './reducers';
import { Store, select } from '@ngrx/store';
import { getCount } from './selectors/counter.selector';
import { Decrement, Increment } from './actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NgrxApp';
  count$: Observable<any>;



  isShow:boolean=true;
  hideShow:any = 'none';
  hide:any='block';

  constructor(private store: Store<AppState>, private store2: Store<AppState>) {
    this.count$ = this.store.pipe(select(getCount));

  }
show(){
 this.isShow=!this.isShow;
}
  decrement(): void {
    this.store.dispatch(new Increment());
  }
  increment(): void {
    this.store2.dispatch(new Decrement());
  }
  changeEvent(){
    this.hideShow = 'block';
    this.hide='none';
  }
  ngOnInit(): void {
    this.increment();
  }
}
