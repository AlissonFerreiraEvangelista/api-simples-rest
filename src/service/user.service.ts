import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/model/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserService{

    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async create(user: User): Promise<User>{
        const userExists = await this.userRepository.findOneBy(user);
        if (userExists) {
            throw new Error('User already exists'); 
        }else{
            return user = await this.userRepository.save(user)
        }
    }

    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User>{
        return this.userRepository.findOneBy({id});
    }
    async remove(id: number){
        const userExists: User = await this.userRepository.findOneBy({id});
        if(userExists){
            await this.userRepository.delete(id);
        }else{
            throw new Error('User does not exists')
        }    
         
    }

    async update(id: number, user: User){
        const userExists = await this.userRepository.findOneBy({id});
        if(!userExists){
            throw new Error('User does not exists')
        }else{
            return await this.userRepository.update(id, user);
        }

    }




}