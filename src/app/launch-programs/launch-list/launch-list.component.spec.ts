import { LaunchDataService } from './../../services/launches/launch-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchListComponent } from './launch-list.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { MatButtonToggle, MatButtonToggleChange } from '@angular/material';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchListComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        LaunchDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LaunchListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should component init success', () => {
    spyOn(LaunchDataService.prototype,'getFilteredLaunches').and.returnValue(of([]));
    let service = TestBed.get(LaunchDataService);
    component.ngOnInit();
    expect(service['getFilteredLaunches']).toHaveBeenCalled();
  });

  it('should call filter change method for year', () => {
    spyOn(LaunchDataService.prototype,'getFilteredLaunches').and.returnValue(of([]));
    spyOn(component, 'yearSelected').and.callThrough();
    let service = TestBed.get(LaunchDataService);
    const toggleElement = fixture.debugElement.query(By.css('.year-event'));
    toggleElement.nativeElement.dispatchEvent(new Event('change'));;
    expect(component.yearSelected).toHaveBeenCalled();
    expect(service['getFilteredLaunches']).toHaveBeenCalled();
  });

  it('should call filter change method for launch success', () => {
    spyOn(LaunchDataService.prototype,'getFilteredLaunches').and.returnValue(of([]));
    spyOn(component, 'launchSuccessSelected').and.callThrough();
    let service = TestBed.get(LaunchDataService);
    const toggleElement = fixture.debugElement.query(By.css('.launch-success-event'));
    toggleElement.nativeElement.dispatchEvent(new Event('change'));;
    expect(component.launchSuccessSelected).toHaveBeenCalled();
    expect(service['getFilteredLaunches']).toHaveBeenCalled();
  });

  it('should call filter change method for land success', () => {
    spyOn(LaunchDataService.prototype,'getFilteredLaunches').and.returnValue(of([]));
    spyOn(component, 'landSuccessSelected').and.callThrough();
    let service = TestBed.get(LaunchDataService);
    const toggleElement = fixture.debugElement.query(By.css('.land-success-event'));
    toggleElement.nativeElement.dispatchEvent(new Event('change'));;
    expect(component.landSuccessSelected).toHaveBeenCalled();
    expect(service['getFilteredLaunches']).toHaveBeenCalled();
  });
});
