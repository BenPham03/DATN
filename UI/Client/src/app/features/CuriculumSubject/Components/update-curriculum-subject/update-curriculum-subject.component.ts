import { Component, Input } from '@angular/core';
import { CurriculumsubjectDto, UpdateCurriculumsubjectDto } from '../../Models/CurriculumSubject';
import { CurriculumDto } from '../../../Curriculum/Models/Curriculum';
import { SubjectDto } from '../../../Subject/models/SubjectDto';
import { CurriculumSubjectService } from '../../Services/curriculum-subject.service';
import { CurriculumService } from '../../../Curriculum/Services/curriculum.service';
import { SubjectService } from '../../../Subject/Services/subject.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { commonDto } from '../../../../core/Common/Status';

@Component({
  selector: 'app-update-curriculum-subject',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-curriculum-subject.component.html',
  styleUrl: './update-curriculum-subject.component.css'
})
export class UpdateCurriculumSubjectComponent {
  isModalOpen = false;

  curriculumSubject : UpdateCurriculumsubjectDto = {
    curriculumId : "",
    subjectId : "",
    semester: 1
  }
  statusCm: commonDto ={
      status :[0]
    }

  @Input() curriculumSubjectM!: CurriculumsubjectDto;

  curriculum: CurriculumDto[] = [];
  subject: SubjectDto[] = [];

  constructor(private curriculumSubjectService : CurriculumSubjectService,
    private curriculumService: CurriculumService,
    private subjectService: SubjectService,
    private router : Router
  ) { }

  ngOnInit(){
    this.curriculumService.getAllCurriculum().subscribe((data:any) =>{
      this.curriculum = data.items 
    });
    this.subjectService.getAllSubject(this.statusCm).subscribe((data:any) =>{
      this.subject = data.items 
    });
  }

  openModal() {
    this.isModalOpen = true;
    console.log(this.curriculumSubjectM)
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
  onSubmit() {
    this.curriculumSubject = {
      curriculumId: this.curriculumSubjectM.curriculumId,
      subjectId: this.curriculumSubjectM.subjectId,
      semester: this.curriculumSubjectM.semester,
    }

    this.curriculumSubjectService.updateCurriculumSubject(this.curriculumSubject).subscribe((data: any) =>{
      console.log(data)
    });
    console.log('Curriculum subject được update:', this.curriculumSubject);
    // Gửi dữ liệu lên server tại đây nếu cần
    this.closeModal();
    
    // Reset form nếu cần
    // this.major = { name: '', description: '', facultyId: '' };

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/curriculumSubject']);
    });
  }
}

