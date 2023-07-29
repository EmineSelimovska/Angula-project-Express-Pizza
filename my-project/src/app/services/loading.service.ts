import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
private isLoadingSubj = new BehaviorSubject<boolean>(false);
  constructor() { }

  showLoading(){
    this.isLoadingSubj.next(true);
  }

  hideLoading(){
    this.isLoadingSubj.next(false);
  }

  get isloading(){
    return this.isLoadingSubj.asObservable();
  }
}
