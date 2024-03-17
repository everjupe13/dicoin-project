export class BillEntity {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly amount: number,
    readonly created_at: string,
    readonly updated_at: string
  ) {}
}
