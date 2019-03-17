import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { StatusComponent } from './status/status.component';
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [TestComponent, StatusComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
