import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import {RouterModule, Routes} from '@angular/router';
import {TuiInputModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule} from '@taiga-ui/core';

const routes: Routes = [
  { path: '', component: PostsComponent }
]


@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
  ],
  exports: [RouterModule]
})
export class PostsModule { }
