import { Component, Input, OnInit } from '@angular/core';

import { DocumentsInterface } from '../../models/interfaces/documents.interface';

@Component({
  selector: 'tes-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  @Input() document!: DocumentsInterface;
  constructor() {}

  ngOnInit(): void {}
}
