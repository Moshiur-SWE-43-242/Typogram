import { Controller, Post, Body, UsePipes, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import {
  RequestOtpSchema,
  VerifyOtpSchema,
  RegisterSchema,
} from './dto/auth.schema';
import type { RequestOtpDto, VerifyOtpDto, RegisterDto } from './dto/auth.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('request-otp')
  @UsePipes(new ZodValidationPipe(RequestOtpSchema))
  async requestOtp(@Body() dto: RequestOtpDto) {
    await this.authService.requestOtp(dto.email);
    return { message: 'OTP sent successfully to ' + dto.email };
  }

  @Post('verify-otp')
  @UsePipes(new ZodValidationPipe(VerifyOtpSchema))
  async verifyOtp(@Body() dto: VerifyOtpDto) {
    const result = await this.authService.verifyOtp(dto.email, dto.code);
    return {
      message: 'OTP verified successfully',
      verificationToken: result.verificationToken,
    };
  }

  @Post('register')
  @UsePipes(new ZodValidationPipe(RegisterSchema))
  async register(
    @Body() dto: RegisterDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const deviceInfo = req.headers['user-agent'] || 'Unknown Device';
    const ipAddress = req.ip || req.socket.remoteAddress || 'Unknown IP';

    const { accessToken, refreshToken } = await this.authService.registerUser(
      dto.verificationToken,
      dto,
      deviceInfo,
      ipAddress,
    );

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return {
      message: 'User registered successfully',
      accessToken,
    };
  }
}

