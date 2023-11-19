import { Injectable } from '@nestjs/common';
import { Pet } from './entities/pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
// import { UpdatePetInput } from './dto/update-pet.input';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}
  create(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput);

    return this.petRepository.save(newPet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
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
