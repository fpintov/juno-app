import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LoginSimpleComponent } from './login-simple/login-simple.component';
import { CommanLoginFormComponent } from './comman-login-form/comman-login-form.component';
import { LoginBgImageComponent } from './login-bg-image/login-bg-image.component';
import { LoginTwoImageComponent } from './login-two-image/login-two-image.component';
import { LoginValidationComponent } from './login-validation/login-validation.component';
import { LoginTooltipComponent } from './login-tooltip/login-tooltip.component';
import { LoginSweetalert2Component } from './login-sweetalert2/login-sweetalert2.component';
import { RegisterSimpleComponent } from './register-simple/register-simple.component';
import { CommonRegisterFormComponent } from './common-register-form/common-register-form.component';
import { RegisterBgImageComponent } from './register-bg-image/register-bg-image.component';
import { RegisterWithTwoImageComponent } from './register-with-two-image/register-with-two-image.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';


@NgModule({
  declarations: [
    LoginSimpleComponent,
    CommanLoginFormComponent,
    LoginBgImageComponent,
    LoginTwoImageComponent,
    LoginValidationComponent,
    LoginTooltipComponent,
    LoginSweetalert2Component,
    RegisterSimpleComponent,
    CommonRegisterFormComponent,
    RegisterBgImageComponent,
    RegisterWithTwoImageComponent,
    UnlockUserComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
