import { Component} from '@angular/core';
@Component({
  selector: 'moban-b',
  template: `
    <div id="section-1">
      <h2>文件结构说明</h2>
      <blockquote style="margin-top:10px;">
        <p>注意事项：</p>
        <footer>开发页面之前，有必要先熟悉下我们框架的整体文件归档方式，能方便各位更快入手以及保证日后文件归档的一致性。</footer>
        <footer>务必仔细阅读括号内指导文字，按照说明归档您的项目文件，有利于后期的维护。</footer>
        <footer>我们已将不需用到的bootstrap文件删除，缩减了项目体积。下方列出的文件均是必须文件，在深度了解该文件的用途之前请勿自行删除。</footer>
        <footer>您可以双击下方的树形菜单查看每个文件夹包含的内容以及说明。</footer>
      </blockquote>
      <div style="overflow-x:auto;">
        <div class="js-tree">
          <div class="js-tree-content">
            <div id="using_json1" class="jstree-x"></div>
          </div>
        </div>
      </div>
    </div>
  `,
})

export class ZjComponent {

}
