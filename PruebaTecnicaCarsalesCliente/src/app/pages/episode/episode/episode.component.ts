import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodeService } from '../../../service/episode.service';
import { Episode } from '../../../model/episode';
import { Info } from '../../../model/info';
import { CollectionGeneric } from '../../../model/collectionGeneric';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css',
  imports: [CommonModule, FormsModule],
})

export class EpisodeComponent {
 
  results?: Episode[] = [];
  Info?: Info;

  pAnt: string = "";
  pNext: string = "";

  enableButtonNext: boolean = false;
  enableButtonPrev: boolean = false;

  constructor(
    private router: Router,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(){
      this.episodeService.getAll().subscribe((data: CollectionGeneric<Episode>) => {
        this.results = data.results;
        this.Info = data.info;         

          if(this.Info?.prev == "" || this.Info?.prev == null){
            this.enableButtonPrev = true;            
            this.pAnt = "";

          }else if(this.Info?.prev != "" && this.Info?.prev != null){ 
            this.enableButtonPrev = false;            
            this.pAnt = this.Info.prev.substring(45, 46);
          }        
          
          if(this.Info?.next == "" && this.Info?.next == null){
            this.pNext = "";
            this.enableButtonNext = true;    
          }else if(this.Info?.next != "" && this.Info?.next != null){ 
            this.enableButtonNext = false;            
            this.pNext = this.Info.next.substring(45, 46);            
          }           

      })  
    } 

    getNextP(pag: string) {

      this.episodeService.getUrl(pag).subscribe((data: CollectionGeneric<Episode>) => {
        this.results = data.results;
        this.Info = data.info;       
        
        if(this.Info?.prev == "" || this.Info?.prev == null){
          this.enableButtonPrev = true;            
          this.pAnt = "";

        }else if(this.Info?.prev != "" && this.Info?.prev != null){ 
          this.enableButtonPrev = false;            
          this.pAnt = this.Info.prev.substring(45, 46);
        }        
        
        if(this.Info?.next == "" || this.Info?.next == null){
          this.pNext = "";
          this.enableButtonNext = true;    
        }else if(this.Info?.next != "" || this.Info?.next != null){ 
          this.enableButtonNext = false;            
          this.pNext = this.Info.next.substring(45, 46);            
        }         

      });      
    };
  
    getAntP(pag: string){
      
      console.log(pag);
      this.episodeService.getUrl(pag).subscribe((data: CollectionGeneric<Episode>) => {
        this.results = data.results;
        this.Info = data.info;

        if(this.Info?.prev == "" || this.Info?.prev == null){
          this.enableButtonPrev = true;            
          this.pAnt = "";
        }else if(this.Info?.prev != "" && this.Info?.prev != null){ 
          this.enableButtonPrev = false;            
          this.pAnt = this.Info.prev.substring(45, 46);
        }        
        
        if(this.Info?.next == "" && this.Info?.next == null){
          this.pNext = "";
          this.enableButtonNext = true;    

        }else if(this.Info?.next != "" && this.Info?.next != null){ 
          this.enableButtonNext = false;            
          this.pNext = this.Info.next.substring(45, 46);            
        }          
      });
    };
 }

