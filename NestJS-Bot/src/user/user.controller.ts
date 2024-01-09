/* eslint-disable prettier/prettier */
// user/user.controller.ts

import { Controller, Get, Delete, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Delete(':chatId')
  async deleteUser(@Param('chatId') chatId: number) {
    const deletedUser = await this.userService.deleteUser(chatId);
    if (deletedUser) {
      return { message: 'User deleted successfully' };
    } else {
    //   throw new NotFoundException('User not found');
    }
  }

  @Post(':chatId')
  async blockUser(@Param('chatId') chatId: number) {
    const blockedUser = await this.userService.blockUser(chatId);
    if (blockedUser) {
      if (blockedUser.isBlocked) return { message: 'User unblocked successfully' };
      else return { message: 'User blocked successfully' };
    } else {
      // throw new NotFoundException('User not found');
      return { message: 'User not found' }; // You can customize the error message
    }
  }
}