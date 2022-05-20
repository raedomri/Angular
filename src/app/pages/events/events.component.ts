import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Events } from '../../Models/events.model';
import { EventsService } from '../../service/events.service';
import { PubliciteService } from '../../service/publicite.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  listEvents : any;
  listPublicites:any;
  form : boolean = false;
  events!: Events;
  closeResult!: String;
  dateEvents;
  myDate= new Date(Date.now());

 

  constructor( private p :PubliciteService , private es : EventsService , private modalService: NgbModal ) { }
  
  ngOnInit(): void {
    this.getAllEvents();
    this.getAllPublicite;
   

    this.events = {
        idEvents: null,
        endroitEvents: null,
        nbParticipant: null,
        dateEvents: null,
        descEvents: null,
        publicite_id_publicite: null
    }
  }
    getAllEvents() {
      this.es.getAllEvents().subscribe(res => this.listEvents = res);
    }
    getAllPublicite() {
      this.p.getAllPublicte().subscribe(res => this.listPublicites = res);
    }


  saveEvents(Events: any) {
    this.es.saveEvents(Events).subscribe(() => {
        this.getAllEvents();
        this.form = false;
      });
    }
    

    updateEvents(Events: Events) {
      this.es.updateEvents(Events).subscribe();
    }

    deleteEvents(idEvents: any) {
      this.es.deleteEvents(idEvents).subscribe(() => this.getAllEvents())
    }
    confirmDelete(idEvents: any , nomEvents: any) {
      if (confirm('Are you sure to delete ' + nomEvents)) {
        this.es.deleteEvents(idEvents).subscribe(() => this.getAllEvents());
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
