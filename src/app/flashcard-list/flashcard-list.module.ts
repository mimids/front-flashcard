import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shard/shard.module';
import { FlashcardListComponent } from './flashcard-list.component';

const routes: Routes = [{ path: '', component:  FlashcardListComponent}];
@NgModule({
  declarations: [FlashcardListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class FlashcardListModule { }
