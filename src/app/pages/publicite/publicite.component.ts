import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Publicite } from '../../Models/publicite.model';
import { PubliciteService } from '../../service/publicite.service'

@Component({
  selector: 'app-publicite',
  templateUrl: './publicite.component.html',
  styleUrls: ['./publicite.component.scss']
  
})

export class PubliciteComponent implements OnInit {

  listPublicites : any;
  form : boolean = false;
  publicite!: Publicite;
  closeResult!: String;
 

  constructor(private p : PubliciteService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllPublicite();

    this.publicite = {
        idPublicite: null,
        nomPub:null,
        canal: null,  
        nbTv:null,
        nbFv:null,
        cout:null,
        dateDebut:null,
        dateFin:null,
      
    }
  }
    getAllPublicite() {
      this.p.getAllPublicte().subscribe(res => this.listPublicites = res);
    }

  savePublicite(Publicite: any) {
    this.p.SavePublicite(Publicite).subscribe(() => {
        this.getAllPublicite();
        this.form = false;
      });
    }


    updatePublicite(Publicite: Publicite) {
      this.p.updatePublicite(this.publicite).subscribe();
    }

    deletePublicite(idPublicite: any) {
      this.p.deletePublicite(idPublicite).subscribe(() => this.getAllPublicite())
    }
    confirmDelete(idPublicite: any , nomPublicite: any) {
      if (confirm('Are you sure to delete ' + nomPublicite)) {
        this.p.deletePublicite(idPublicite).subscribe(() => this.getAllPublicite());
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
