import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import {
  counterButtonDecreaseAction,
  counterButtonIncreaseAction,
} from '../../store/actions/counter-button.action';
import { getCounterButtonValue } from '../../store/selectors/counter-button.selector';

import { CounterType } from '../../models/types/counter.type';

@Component({
  selector: 'tes-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent implements OnInit {
  public initialCounter$!: Observable<number>;
  @Output() public currentCountValue = new EventEmitter<number>();

  public counterForm!: FormGroup;

  public initializeForm(): void {
    this.counterForm = this._fb.group({
      counterFormInput: 0,
    });
  }

  public initializeStoreValues(): void {
    this.initialCounter$ = this._store.pipe(select(getCounterButtonValue));
    this.initialCounter$.subscribe((el) => this.currentCountValue.emit(el));
  }

  constructor(
    private _fb: FormBuilder,
    private readonly _store: Store<CounterType>
  ) {}

  public decrementInputValue(): void {
    this._store.dispatch(counterButtonDecreaseAction());
  }

  public incrementInputValue(): void {
    this._store.dispatch(counterButtonIncreaseAction());
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.initializeStoreValues();
  }
}
