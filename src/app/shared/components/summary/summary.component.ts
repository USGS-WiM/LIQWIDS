import { Component, ViewChild, OnInit } from '@angular/core';
import { SummariesService } from '../../services/summaries.service';
import { MatTableDataSource, MatSort, MatTab } from '@angular/material';
import { Isummary } from '../../interfaces/summary.interface';
import { Ioutput } from '../../interfaces/output.interface';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;

    public displayedColumns = ['org_name', 'last_submit', 'num_samples'];
    // public dataSource = new MatTableDataSource;
    public dataSource: MatTableDataSource<Ioutput>;

    constructor(private _summariesService: SummariesService) {}

    ngOnInit() {
        this._summariesService.getData();

        this._summariesService.SummaryData.subscribe(sum_data => {
            this.dataSource = new MatTableDataSource(sum_data);
            this.dataSource.sort = this.sort;
            this.dataSource.sortingDataAccessor = (item, property) => {
                switch (property) {
                    case 'last_submit':
                        return new Date(item.last_submit);
                    default:
                        return item[property];
                }
            };
        });
    }

    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
