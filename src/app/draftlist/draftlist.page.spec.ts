import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DraftlistPage } from './draftlist.page';

describe('DraftlistPage', () => {
  let component: DraftlistPage;
  let fixture: ComponentFixture<DraftlistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
