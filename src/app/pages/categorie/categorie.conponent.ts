import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categorie } from '../../Models/categorie.model';
import { CategorieService } from '../../service/categorie.service'

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.conponent.scss']
})

export class CategorieComponent implements OnInit {

  listCategories : any;
  form : boolean = false;
  categorie!: Categorie;
  closeResult!: String;
 

  constructor(private cs : CategorieService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCategorie();

    this.categorie = {
      idCategorie: null,
      nomCategorie:null,
      descriptionCategorie: null
     
    }
  }
    getAllCategorie() {
      this.cs.getAllCategorie().subscribe(res => this.listCategories = res);
    }

  saveCategorie(Categorie: any) {
    this.cs.SaveCategorie(Categorie).subscribe(() => {
        this.getAllCategorie();
        this.form = false;
      });
    }


    updateCategorie(Categorie: Categorie) {
      this.cs.updateCategorie(this.categorie).subscribe();
    }

    deleteCategorie(idCategorie: any) {
      this.cs.deleteCategorie(idCategorie).subscribe(() => this.getAllCategorie())
    }
    confirmDelete(idCategorie: any , nomCategorie: any) {
      if (confirm('Are you sure to delete ' + nomCategorie)) {
        this.cs.deleteCategorie(idCategorie).subscribe(() => this.getAllCategorie());
      }
    }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }

 private getDismissReason(reason: any): string {

   if (reason == ModalDismissReasons.ESC) {
     return 'by pressing ESC';

   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

     return 'by clicking on a backdrop';

   } else {

     return `with: ${reason}`;

   }

 }

  closeForm() {
  }

  cancel() {
    this.form = false;
  }
}
