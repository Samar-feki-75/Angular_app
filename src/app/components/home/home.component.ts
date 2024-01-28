import { Component, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Employer } from '../../models/employer';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private dataservice: DataService) { }
  data: MatTableDataSource<Employer> = new MatTableDataSource<Employer>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'salary', 'age', 'dob', 'email', 'salary', 'address'
    , 'imageUrl', 'contactNumber']

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 10;
  ngOnInit(): void {
    this.dataservice.getAll().subscribe(response => {
      this.data = new MatTableDataSource(response);
      this.data.sort = this.sort;
      this.data.paginator = this.paginator;
      console.log(this.data)
    });

  }
}
