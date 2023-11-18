import { Injectable } from '@nestjs/common';
import { Pet } from './entities/pet.entity';
// import { CreatePetInput } from './dto/create-pet.input';
// import { UpdatePetInput } from './dto/update-pet.input';

@Injectable()
export class PetsService {
  // create(createPetInput: CreatePetInput) {
  //   return 'This action adds a new pet';
  // }

  async findAll(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = '52a42725-20b9-410e-84d8-a3ca92fd092b';
    pet.name = 'Thor';
    pet.type = 'dog';

    return [pet];
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  // update(id: number, updatePetInput: UpdatePetInput) {
  //   return `This action updates a #${id} pet`;
  // }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
