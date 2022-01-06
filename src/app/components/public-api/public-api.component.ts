import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { IEntriesModel } from '../../model/public-api.model';
import { PublicApiService } from './services/public-api.service';
import { ModalComponent } from '../modal/modal.component';
import { columns } from '../../../constants';

@Component({
    selector: 'app-public-api',
    templateUrl: './public-api.component.html',
    styleUrls: ['./public-api.component.scss']
})
export class PublicApiComponent implements OnInit {
    constructor(private readonly publicApiService: PublicApiService, public dialog: MatDialog) {}
    public tableColumns: string[] = [];
    public dataSource = new MatTableDataSource<IEntriesModel>([]);
    public isLoading = true;

    @ViewChild(MatSort) sort: any;

    ngOnInit(): void {
        this.tableColumns = columns;
        this.publicApiService.getEntries().subscribe(
            (data) => {
                if (data && data.length) {
                    this.isLoading = false;
                    const entries: IEntriesModel[] = data.slice(0, 100);
                    this.dataSource = new MatTableDataSource(entries);
                    this.dataSource.sort = this.sort;
                } else {
                    this.isLoading = false;
                }
            },
            () => (this.isLoading = false)
        );
    }

    /**
     * Function to open the Modal component to display the Entires information
     * @param rowData: IEntriesModel
     */
    public openDialog(rowData: IEntriesModel): void {
        this.dialog.open(ModalComponent, {
            width: '600px',
            data: rowData
        });
    }
}
