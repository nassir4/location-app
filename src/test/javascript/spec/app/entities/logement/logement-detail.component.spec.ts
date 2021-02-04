import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { LocationAppTestModule } from '../../../test.module';
import { LogementDetailComponent } from 'app/entities/logement/logement-detail.component';
import { Logement } from 'app/shared/model/logement.model';

describe('Component Tests', () => {
  describe('Logement Management Detail Component', () => {
    let comp: LogementDetailComponent;
    let fixture: ComponentFixture<LogementDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ logement: new Logement(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [LocationAppTestModule],
        declarations: [LogementDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(LogementDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(LogementDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load logement on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.logement).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
