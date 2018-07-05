import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public tplModal: NzModalRef;

  constructor(
    private postService: PostService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    // this.createModal();
  }

  public createModal(tplContet): void {
    this.modalService.create({
      nzTitle: 'NEW POST',
      nzContent: tplContet,
      nzFooter: null,
      nzClosable: false,
      nzOnOk: () => new Promise((resolve) => window.setTimeout(resolve, 1000))
    });
  }

}
