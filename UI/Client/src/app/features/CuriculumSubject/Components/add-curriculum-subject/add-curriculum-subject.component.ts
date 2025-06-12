import { Component, Input } from '@angular/core';
import { CreateCurriculumsubjectDto } from '../../Models/CurriculumSubject';
import { CurriculumDto } from '../../../Curriculum/Models/Curriculum';
import { SubjectDto } from '../../../Subject/models/SubjectDto';
import { CurriculumSubjectService } from '../../Services/curriculum-subject.service';
import { CurriculumService } from '../../../Curriculum/Services/curriculum.service';
import { Router } from '@angular/router';
import { SubjectService } from '../../../Subject/Services/subject.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-add-curriculum-subject',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-curriculum-subject.component.html',
  styleUrl: './add-curriculum-subject.component.css'
})
export class AddCurriculumSubjectComponent {
 isModalOpen = false;

  
  @Input() CurriculumId!: string | null;
curriculumSubject : CreateCurriculumsubjectDto = {
    curriculumId : '',
    subjectId : "",
    semester : 1
  }
  hasIdParam : boolean = false
  curriculum: CurriculumDto[] = [];
  subject: SubjectDto[] = [];
  statusCm: commonDto ={
      status :[0]
    }

  constructor(private curriculumSubjectService : CurriculumSubjectService,
    private curriculumService: CurriculumService,
    private subjectService: SubjectService,
    private router : Router
  ) { }

  ngOnInit(){
    this.hasIdParam = this.CurriculumId != null;
    this.curriculumService.getAllCurriculum().subscribe((data:any) =>{
      this.curriculum = data.items 
    });
    this.subjectService.getAllSubject(this.statusCm).subscribe((data:any) =>{
      this.subject = data.items 
    });
    this.curriculumSubject = {
    curriculumId : this.CurriculumId != null ? this.CurriculumId : '',
    subjectId : "",
    semester : 1
  }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.curriculumSubjectService.addCurriculumSubject(this.curriculumSubject).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Curriculum subject được thêm:', this.curriculumSubject);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    
    this.curriculumSubject = { curriculumId: "", subjectId: "", semester : 1};

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/curriculumSubject']);
    });
  }
}

