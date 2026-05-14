import { Injectable } from '@nestjs/common';
import type { RegisterDto } from './dto/auth.schema';

@Injectable()
export class AuthService {
  async requestOtp(email: string): Promise<void> {
    // TODO: implement OTP generation and delivery
  }

  async verifyOtp(email: string, code: string): Promise<{ verificationToken: string }> {
    // TODO: implement OTP verification
    return { verificationToken: 'placeholder-token' };
  }

  async registerUser(
    verificationToken: string,
    dto: RegisterDto,
    deviceInfo: string,
    ipAddress: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    // TODO: implement user registration and token creation
    return { accessToken: 'placeholder-access-token', refreshToken: 'placeholder-refresh-token' };
  }
}

