export interface DomainMapper<D, E> {
  toDomain(entity: E): D
  toEntity(domain: D): E
}
