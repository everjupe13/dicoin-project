import { BillDate, IBillDate } from './value-object/bill-date'
import { BillStatus, IBillStatus } from './value-object/bill-status'

export class Bill {
  private _status: BillStatus
  private _billDate: IBillDate

  constructor(
    readonly id: string,
    readonly name: string,
    readonly amount: number,
    protected _createdAt: string,
    protected _updatedAt: string,
    _status: IBillStatus
  ) {
    this._status = new BillStatus(_status)
    this._billDate = new BillDate(this._createdAt, this._updatedAt)
  }

  get status() {
    return this._status.status
  }

  get createdAt() {
    return this._billDate.createdAt
  }

  get updatedAt() {
    return this._billDate.updatedAt
  }

  get billDate() {
    return {
      createdAt: this._billDate.createdAt,
      updatedAt: this._billDate.updatedAt
    }
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      amount: this.amount,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      status: this._status.status
    }
  }
}
