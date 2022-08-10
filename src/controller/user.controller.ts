import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "src/model/user.entity";
import { UserService } from "src/service/user.service";


@Controller('user')
export class UserController{

    constructor(private readonly userService: UserService){}

    @Post('create')
    async createUser(@Body() user: User){
        return this.userService.create(user);
    }

    @Get('allUsers')
    async getAllUsers(){
        return this.userService.findAll();
    }

    @Get(':id')
    async getOneUser(@Param() param){
        return this.userService.findOne(param.id);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() user: User){
        return this.userService.update(id, user);
    }




}