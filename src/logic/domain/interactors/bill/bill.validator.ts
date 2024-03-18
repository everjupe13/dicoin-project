import { Guard } from '@/logic/domain/utils/guard/guard'

export class BillValidator {
  validateId(id: any) {
    return Guard.isNumber(id)
  }
}
