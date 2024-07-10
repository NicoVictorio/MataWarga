import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrafttambahPage } from './drafttambah.page';

describe('DrafttambahPage', () => {
  let component: DrafttambahPage;
  let fixture: ComponentFixture<DrafttambahPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DrafttambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
