import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftpagePage } from './leftpage.page';

describe('LeftpagePage', () => {
  let component: LeftpagePage;
  let fixture: ComponentFixture<LeftpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
