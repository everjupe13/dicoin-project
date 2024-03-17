// import { Bill } from '@/logic/core/entities/bill/bill'
// import { BillEntity } from '@/logic/infrastructure/domain/entities/bill'
// import { DomainMapper } from '@/logic/infrastructure/domain/mappers/base-mapper'

// export class BillMapper implements DomainMapper<BillEntity, Bill> {
//   public toDomain(entity: Bill): BillEntity {
//     return new BillEntity(entity.id, entity.email, entity.password)
//   }

//   public toEntity(domainModel: User): UserEntity {
//     return new UserEntity(
//       domainModel.id,
//       domainModel.email,
//       domainModel.password,
//       new Date()
//     )
//   }
// }
