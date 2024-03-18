export class Bill {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly amount: number,
    readonly createdAt: string,
    readonly updatedAt: string
  ) {}

  toObject() {
    return {
      id: this.id,
      name: this.name,
      amount: this.amount,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }
}
