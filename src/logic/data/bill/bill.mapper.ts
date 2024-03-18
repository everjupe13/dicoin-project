import { Bill } from '@/logic/domain/entity/bill/bill'

import { IBillApi } from './types'

export class BillMapper {
  public static toDomain(entity: IBillApi): Bill {
    return new Bill(
      entity.id,
      entity.name,
      entity.amount,
      entity.created_at,
      entity.updated_at
    )
  }

  public static toApi(domainModel: Bill): IBillApi {
    return {
      id: domainModel.id,
      name: domainModel.name,
      amount: domainModel.amount,
      created_at: domainModel.createdAt,
      updated_at: domainModel.updatedAt
    }
  }
}
