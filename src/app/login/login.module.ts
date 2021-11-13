import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule, Routes} from '@angular/router';
import {TuiInputModule, TuiInputPasswordModule, TuiIslandModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiIslandModule,
    TuiButtonModule,
    TuiInputModule,
    TuiInputPasswordModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, LoginComponent]
})
export class LoginModule { }
