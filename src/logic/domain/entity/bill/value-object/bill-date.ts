import dayjs, { Dayjs } from 'dayjs'

export type IBillDate = {
  createdAt: Dayjs
  updatedAt: Dayjs
}

export class BillDate {
  readonly createdAt: IBillDate['createdAt']
  readonly updatedAt: IBillDate['updatedAt']

  constructor(
    readonly _createdAt: string,
    readonly _updatedAt: string
  ) {
    this.createdAt = dayjs(this._createdAt)
    this.updatedAt = dayjs(this._updatedAt)
  }
}
