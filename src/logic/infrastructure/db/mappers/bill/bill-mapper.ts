import { Bill } from '@/logic/core/entities/bill/bill'
import { BillEntity } from '@/logic/infrastructure/db/entities/bill/bill'

export class BillMapper {
  public static toDomain(entity: BillEntity): Bill {
    return new Bill(
      entity.id,
      entity.name,
      entity.amount,
      entity.created_at,
      entity.updated_at
    )
  }

  public static toEntity(domainModel: Bill): BillEntity {
    return new BillEntity(
      domainModel.id,
      domainModel.name,
      domainModel.amount,
      domainModel.createdAt,
      domainModel.updatedAt
    )
  }
}
