import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState} from './reducers';
import { Store, select } from '@ngrx/store';
import { getCount,getCounts} from './selectors/counter.selector';
import { Decrement, Increment } from './actions/counter.actions';
import { async } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NgrxApp';
  count$: Observable<any>;
  count1$: Observable<number>;

  public getColor(balance: number): string{
    return balance > 0 ? 'blue' : 'red';
 }
  // isShow:boolean=true;
  // hideShow:any = 'none';
  // hide:any='block';

  constructor(public store: Store<AppState>) {
    this.count$ = this.store.pipe(select(getCount));
    this.count1$ = this.store.pipe(select(getCounts));
  }

// show(){
//  this.isShow=!this.isShow;
// }
  increment(){
    setInterval(()=> {
      this.store.dispatch(new Increment());
      }, 1000);
}
  // changeEvent(){
  //   this.hideShow = 'block';
  //   this.hide='none';
  // }
  ngOnInit(): void {}
  }

