import { Repository } from "typeorm";

export abstract class FamilyService {
  protected constructor(
    private readonly repo: Repository<any>
  ) {}

  async getAllMembers(options = {}) {
    return await this.repo.find(options)
  }

  async getFamilyMemberBy(options) {
    return await this.repo.findOneBy(options)
  }
  
  async updateFamilyMember(id: number, options) {
    return await this.repo.update(id, options);     
  }

  async deleteFamilyMember(id: number) {
    return await this.repo.delete(id)
  }

}