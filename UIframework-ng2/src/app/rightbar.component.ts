import { Component } from '@angular/core';

@Component({
  selector: 'rightbar',
  template:`
    <div class="kt-content-right">
      <!-- 页卡切换栏 -->
      <div class="row page-card">
        <div class="row content-tabs">
          <button class="roll-nav roll-left J_tabLeft"><i class="iconfont icon-left1"></i></button>
          <nav class="page-tabs J_menuTabs">
            <div class="page-tabs-content">

            </div>
          </nav>
          <button class="roll-nav roll-right J_tabRight"><i class="iconfont icon-right1"></i></button>
        </div>
      </div>
      <!-- 内容嵌入页 -->
      <div class="J_mainContent">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class RightbarComponent {
}
