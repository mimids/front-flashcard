import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileUploadZoneComponent } from './components/file-upload-zone/file-upload-zone.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { ImageDefaultDirective } from './directives/image-default.directive';
import { ApiPathPipe } from './pipes/api-path.pipe';
import { MatSelectModule } from '@angular/material/select';

const angularModules = [FormsModule, ReactiveFormsModule];
const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatSelectModule,
];
const libraryModules = [ImageCropperModule];

const components = [FileUploadZoneComponent, ImageCropperComponent];
const directives = [ImageDefaultDirective];
const pipes = [ApiPathPipe];

@NgModule({
  declarations: [components, directives, pipes],
  imports: [CommonModule, materialModules, libraryModules],
  exports: [angularModules, materialModules, components, directives, pipes],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

})
export class SharedModule {}
