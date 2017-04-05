import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template:`
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="visible-xs kt-show-sidebar"><span class="iconfont icon-menu11"></span></a>
          <a class="navbar-brand" href="#">
            <img class="hidden-xs" alt="Brand" src="img/logo.png" width="180px" height="35px">
          </a>
          <a class="navbar-toggle collapsed" data-toggle="collapse" data-target="#system-selection">切换</a>
          <span class="badge visible-xs">19</span>
        </div>
        <div class="nav navbar-nav kt-navbar-nav">
          <div class="dropdown kt-platform">
            <a href="#" class="dropdown-toggle kt-platform-title" data-toggle="dropdown">区域医疗<span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">基础支撑</a></li>
              <li><a href="#">区域医疗</a></li>
              <li><a href="#">分级诊疗</a></li>
              <li class="divider"></li>
              <li><a href="login-platform.html">回到平台选择窗口</a></li>
            </ul>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="system-selection">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#"><i class="iconfont icon-papers"></i>系统管理</a></li>
            <li><a href="#"><i class="iconfont icon-file"></i>决策分析</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                更多<b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li class="kt-li"><a href="#">公安对接</a></li>
                <li class="kt-li"><a href="#">系统管理</a></li>
                <li class="kt-li"><a href="#">决策分析</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!-- 消息通知 -->
            <li class="dropdown qtt-notification">
              <a href="#" class="dropdown-toggle qtt-notification-btn" data-toggle="dropdown">
                <span class="glyphicon glyphicon-bell hidden-xs"></span>
                <p class="visible-xs">新消息</p>
                <span class="badge">19</span>
                <span class="caret visible-xs"></span>
              </a>
              <ul class="dropdown-menu qtt-notification-content" role="menu">
                <li class="kt-li">
                  <a href="#">
                    <div><i class="hidden-xs glyphicon glyphicon-comment"></i>有16条未读消息</div>
                    <p>4分钟前</p>
                  </a>
                </li>
                <li class="kt-li">
                  <a href="#">
                    <div><i class="hidden-xs glyphicon glyphicon-bullhorn"></i>有3条新回复</div>
                    <p>10分钟前</p>
                  </a>
                </li>
                <li class="divider"></li>
                <li class="kt-li"><a href="＃">查看全部消息</a></li>
              </ul>
            </li>
            <!-- 用户入口 -->
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img class="hidden-xs" src="img/personal/logo_mini.png" alt="">
                用户入口<span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li class="kt-li"><a onclick="layer_custom1('主题设置','ccc')" >主题设置</a></li>
                <li class="divider"></li>
                <li class="kt-li"><a href="login.html">退出</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})

export class NavbarComponent {

}
