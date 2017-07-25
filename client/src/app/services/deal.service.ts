import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Deal } from './deal';

@Injectable()
export class DealService {

  private publicDealUrl = 'http://localhost:3001/api/deals/public';
  private privateDealsUrl = 'http://localhost:3001/api/deals/private';

  constructor(
    private http: Http
  ) { }

  getPublicDeals() {
    return this.http
      .get(this.publicDealUrl)
      .toPromise()
      .then(response => response.json() as Deal[])
      .catch(this.handleError);
  }

  getPrivateDeals() {
    return this.http
    .get(this.privateDealsUrl)
    .toPromise()
    .then(response=>response.json() as Deal[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.rejected(error.message || error);
  }

}
