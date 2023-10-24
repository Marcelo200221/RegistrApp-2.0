import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaccessPage } from './daccess.page';

describe('DaccessPage', () => {
  let component: DaccessPage;
  let fixture: ComponentFixture<DaccessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
