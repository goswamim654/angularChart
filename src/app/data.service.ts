import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Data } from './data';

export interface FileName {
	fileName:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getDataSets(fileName): Observable<Data> {
  	return this.http.get<Data>
  	("https://alegralabs.com/mukesh/chart/apiChart.php?fileName="+fileName);
  }

  getFileName(): Observable<FileName> {
  	return this.http.get<FileName>
  	("https://alegralabs.com/mukesh/chart/apiFileName.php");
  }
}
