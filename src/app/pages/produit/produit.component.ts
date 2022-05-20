import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produit } from '../../Models/produit.model';
import { ProduitService } from '../../service/produit.service'
import { CategorieService } from '../../service/categorie.service'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
   
})

export class ProduitComponent implements OnInit {

  listProduits : any;
  listCatigories:any;
  form : boolean = false;
  produit!: Produit;
  closeResult!: String;
 
 

  constructor(private cs :CategorieService,private ps : ProduitService , private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProduits();
    this.getAllCategorie();
    
    this.produit = {
      idProduit: null,
      nomProduit:null,
      prixProduit: null,
      dateExp:null,
      poidProduit:null,
      typeProduit:null,
      qte_stock:null,
      codeAbarre: null,
      categorie_id_categorie:null
    }
  }
    getAllProduits() {
      this.ps.getAllProduits().subscribe(res => this.listProduits = res);
    }
    getAllCategorie() {
      this.cs.getAllCategorie().subscribe(res => this.listCatigories = res);
    }

  saveProduit(produit: any) {
    this.ps.SaveProduit(produit).subscribe(() => {
        this.getAllProduits();
        this.form = false;
      });
    }


    updateProduit(produit: Produit) {
      this.ps. updateProduit(Produit).subscribe();
    }

    deleteProduit(idProduit: any) {
      this.ps.deleteProduit(idProduit).subscribe(() => this.getAllProduits())
    }
    confirmDelete(idProduit: any , nomProduit: any) {
      if (confirm('Are you sure to delete ' + nomProduit)) {
        this.ps.deleteProduit(idProduit).subscribe(() => this.getAllProduits());
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
