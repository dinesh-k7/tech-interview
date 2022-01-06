import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IEntriesModel } from '../../model/public-api.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

    /**
     * Function to return the Object key as array
     * @param obj: IEntriesModel
     */
    public getObjectKey(obj: IEntriesModel) {
        return Object.keys(obj);
    }
}
