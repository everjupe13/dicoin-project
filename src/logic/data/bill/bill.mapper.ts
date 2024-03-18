import { Bill } from '@/logic/domain/entity/bill/bill'

import { IBillApi } from './types'

export class BillMapper {
  public static toDomain(apiObject: IBillApi): Bill {
    return new Bill(
      apiObject.id,
      apiObject.name,
      apiObject.amount,
      apiObject.created_at,
      apiObject.updated_at,
      apiObject.status
    )
  }

  public static toApi(domainModel: Bill): IBillApi {
    return {
      id: domainModel.id,
      name: domainModel.name,
      amount: domainModel.amount,
      created_at: domainModel.createdAt.toISOString(),
      updated_at: domainModel.updatedAt.toISOString(),
      status: domainModel.status
    }
  }
}
