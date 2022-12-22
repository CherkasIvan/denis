import {
  OnInit,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  Input,
  AfterViewChecked,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarInfoComponent implements OnInit, AfterViewChecked {
  @Input()
  public carOptions!: any;
  // model = {
  //   vin: 'CC123456778A99',
  //   car_mark: 'Hyundai',
  //   car_model: 'Solaris',
  //   car_year: 2020,
  //   engine_capacity: '2.0',
  //   transmission: 'Автоматическая',
  //   car_price: 1200000,
  //   pts_issue_year: 2020,
  //   car_body_type: 'Седан',
  //   car_telematic: 'true',
  // };

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public onSubmitForm(model: any): void {
    console.log(model);
  }

  ngOnInit(): void {}

  // form = new FormGroup({});
  // options: FormlyFormOptions = {};

  // topFields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'car-info-container__details__form',
  //     fieldGroup: [
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'vin',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'VIN',
  //           placeholder: 'Введите VIN',
  //           required: true,
  //         },
  //       },
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'car_mark',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Марка',
  //           placeholder: 'Введите марку автомобиля',
  //           required: true,
  //         },
  //       },
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'car_model',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Модель',
  //           placeholder: 'Введите модель автомобиля',
  //           required: true,
  //         },
  //       },
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'car_year',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Год выпуска',
  //           placeholder: 'Введите год выпуска автомобиля',
  //           required: true,
  //         },
  //       },
  //     ],
  //   },
  // ];
  // middleFields: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'car-info-container__details__form',
  //     fieldGroup: [
  //       {
  //         className: 'car-info-details-form-item',
  //         key: 'pts_issue_year',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'ПТС',
  //           placeholder: 'Введите год выпуска автомобиля из ПТС',
  //           required: true,
  //         },
  //       },
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'engine_capacity',
  //         type: 'input',
  //         templateOptions: {
  //           label: 'Объем двигателя',
  //           placeholder: 'Введите объем двигателя автомобиля',
  //           required: true,
  //         },
  //       },
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'transmission',
  //         type: 'select',
  //         templateOptions: {
  //           label: 'Трансмиссия автомобиля',
  //           placeholder: 'Выберите тип трансмиссии автомобиля',
  //           description: 'Выберите тип трансмиссии автомобиля',
  //           required: true,
  //           options: [
  //             { value: 'Механическая', label: 'Механическая' },
  //             { value: 'Автоматическая', label: 'Автоматическая' },
  //           ],
  //         },
  //       },
  //     ],
  //   },
  // ];
  // typeOfCarBodyFields:  FormlyFieldConfig[] = [
  //     {
  //       fieldGroupClassName: 'car-info-container__details__form',
  //       fieldGroup: [
  //         {
  //           className: 'car-info-container__details__form__item car-info-container__details__form__item__radio',
  //           key: 'car_body_type',
  //           type: 'radio',
  //           templateOptions: {
  //             label: 'Тип кузова',
  //             options: [
  //               { value: 1, label: 'Седан' },
  //               { value: 2, label: 'Внедорожник' },
  //               { value: 3, label: 'Универсал' },
  //               { value: 4, label: 'Кроссовер' },
  //               { value: 5, label: 'Хэтчбек' },
  //               { value: 6, label: 'Минивэн' },
  //             ],
  //           },
  //         }
  //       ],
  //     },
  //     ];
  // sliderField: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'car-info-container__details__form',
  //     fieldGroup: [
  //       {
  //       className: 'car-info-container__details__form__item car-info-container__details__form__input',
  //       key: 'car_price',
  //       type: 'input',
  //       templateOptions: {
  //         label: 'Стоимость авто, руб',
  //         placeholder: 'Введите стоимость автомобиля',
  //         required: true,
  //       },
  //     },
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'car_price',
  //         type: 'slider',
  //         templateOptions: {
  //           min: 0,
  //           max: 7000000,
  //           step: 1,
  //         },
  //       },
  //     ]
  //   }
  // ];
  // discountFiled: FormlyFieldConfig[] = [
  //   {
  //     fieldGroupClassName: 'car-info-container__details__form',
  //     fieldGroup: [
  //       {
  //         className: 'car-info-container__details__form__item',
  //         key: 'car_telematic',
  //         type: 'toggle',
  //         props: {
  //           label: 'Телематическая система',
  //           // description: 'Toggle Description',
  //           required: true,
  //         },
  //       },
  //     ]
  //   }
  // ];
  // // onSubmit(model: any) {
  // //   console.log(this.model);
  // // }
  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
