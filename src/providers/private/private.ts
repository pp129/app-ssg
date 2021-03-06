import { Http} from "@angular/http";
import { Injectable } from '@angular/core';

/*
  Generated class for the PrivateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//不提交此文件 私人工具

@Injectable()
export class PrivateProvider {

  constructor(public http: Http) {
    //console.log('Hello PrivateProvider Provider');
  }
	/**
	 * 通用的后台地址
	 * 如果只有一个人启动后台 地址改为启动人的后台地址
	 * 如果本人启动，地址改为本人启动的后台地址
	 * 跨域问题在ionic.config.json文件里设置代理"proxies": [
	 {
         "path": "/",
         "proxyUrl": "启动及使用的后台地址"
     }
	 ]
	 */
	public backEndUrl() {
		return "http://172.16.1.115:8084";
	}
}
