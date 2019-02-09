import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./services/http.service";
import { MatDialogModule } from "@angular/material/dialog";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatTableModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
  ],
  entryComponents: [ProductFormComponent],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
