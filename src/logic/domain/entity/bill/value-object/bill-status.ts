export type IBillStatus = 'active' | 'expired' | 'pending'

export class BillStatus {
  constructor(readonly status: IBillStatus) {}
}
