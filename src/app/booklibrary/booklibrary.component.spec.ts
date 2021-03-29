import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklibraryComponent } from './booklibrary.component';

describe('BooklibraryComponent', () => {
  let component: BooklibraryComponent;
  let fixture: ComponentFixture<BooklibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
