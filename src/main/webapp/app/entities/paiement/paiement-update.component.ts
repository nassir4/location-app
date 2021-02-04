import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPaiement, Paiement } from 'app/shared/model/paiement.model';
import { PaiementService } from './paiement.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'jhi-paiement-update',
  templateUrl: './paiement-update.component.html',
})
export class PaiementUpdateComponent implements OnInit {
  isSaving = false;
  users: IUser[] = [];
  dateDebutDp: any;

  editForm = this.fb.group({
    id: [],
    loyer: [null, [Validators.required]],
    dateDebut: [null, [Validators.required]],
    duree: [null, [Validators.required]],
    userId: [],
  });

  constructor(
    protected paiementService: PaiementService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ paiement }) => {
      this.updateForm(paiement);

      this.userService.query().subscribe((res: HttpResponse<IUser[]>) => (this.users = res.body || []));
    });
  }

  updateForm(paiement: IPaiement): void {
    this.editForm.patchValue({
      id: paiement.id,
      loyer: paiement.loyer,
      dateDebut: paiement.dateDebut,
      duree: paiement.duree,
      userId: paiement.userId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const paiement = this.createFromForm();
    if (paiement.id !== undefined) {
      this.subscribeToSaveResponse(this.paiementService.update(paiement));
    } else {
      this.subscribeToSaveResponse(this.paiementService.create(paiement));
    }
  }

  private createFromForm(): IPaiement {
    return {
      ...new Paiement(),
      id: this.editForm.get(['id'])!.value,
      loyer: this.editForm.get(['loyer'])!.value,
      dateDebut: this.editForm.get(['dateDebut'])!.value,
      duree: this.editForm.get(['duree'])!.value,
      userId: this.editForm.get(['userId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPaiement>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IUser): any {
    return item.id;
  }
}
