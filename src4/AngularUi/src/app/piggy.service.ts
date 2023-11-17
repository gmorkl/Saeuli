import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DonationResponse } from './donationResponse';
import { FundingResponse } from './fundingResponse';

@Injectable({
  providedIn: 'root'
})
export class PiggyService {

  constructor(
    private http: HttpClient) { }

    private donationUrl = 'http://localhost:5000/api/donate'; 
    private fundingUrl = 'http://localhost:5000/api/fund'; 

  donate(): Observable<DonationResponse> {
    return this.http.get<DonationResponse>(this.donationUrl)
  }

  receive(): Observable<FundingResponse> {
    return this.http.get<FundingResponse>(this.fundingUrl)
  }

}
