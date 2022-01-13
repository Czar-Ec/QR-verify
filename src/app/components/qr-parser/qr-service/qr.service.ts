import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import * as CryptoJs from 'crypto-js';

import { Guest } from './qr-data';

@Injectable()
export class QrService {

  constructor(
    private http: HttpClient
  ) { }

  public validateInvite(val: any): Observable<Guest[]> {
    // reroute to code if no params provided
    if (!val || !val?.params || !Object.keys(val?.params)?.length) {
      throw new Error('no parameters provided');
    }

    const params = val.params;

    // check if theres id or code
    if (!params?.id || !params?.code) {
      throw new Error('invalid parameters');
    }

    return this.validateId(params.id, params.code).pipe(
      map((res: boolean) => {
        if (!res) {
          throw new Error('Invalid invite');
        }

        return this.parseGuests(params?.code)
      })
    )
  }

  private validateId(id: string, code: string): Observable<boolean> {
    const hash = CryptoJs.HmacSHA256(code, id).toString();

    return this.http.get('/assets/test-data.json').pipe(
      map((res: any) => {
        return !!(res?.hashes.filter((storedHash: string) => !!(storedHash === hash))).length
      })
    )
  }

  private parseGuests(code: string): Guest[] {
    try {
      const parsedCode = JSON.parse(atob(code));

      // check if array and there are values
      if (!parsedCode || !Array.isArray(parsedCode)) {
        return [];
      }

      return parsedCode;
    } catch {
      return []
    }
  }
}
