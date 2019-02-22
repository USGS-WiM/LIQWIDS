import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';


@Component({
  selector: 'loading-screen',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    public show = true; //start
    private subscription: Subscription;

  constructor(private _loaderService: LoaderService) { }

ngOnInit() {
    this.subscription = this._loaderService.loaderState.subscribe((state:boolean) => {
        this.show = state;
    });
}

ngOnDestroy() {
    this.subscription.unsubscribe();
}


}
