import { Guard } from '../../utils/guard'

export class BillValidator {
  validateId(id: any) {
    return Guard.isSignificantString(id)
  }
}
