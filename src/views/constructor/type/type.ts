/*
 * @Description: 问卷Class类型
 * @Author: Gavin
 * @Date: 2021-09-28 10:46:18
 * @LastEditTime: 2021-12-02 16:22:45
 * @LastEditors: Gavin
 */
import faker from "faker"
import {TypeEnum as TYPE_PROXY } from '../enmu/enum'


interface BaseType {
  type: string
}
/**
 * @description: 基类Class
 * @constructor  构造函数
 * @Date: 2021-09-28 13:51:19
 */
class FormTypes implements BaseType {
  type: any
  label: string
  formItemId: number
  imgUrl: string
  style: string
  constructor(style = "Default", imgUrl = faker.image.avatar(), label = "示例检查名称 ") {
    this.label = label//检查名称
    this.formItemId = faker.datatype.number();//唯一值Id
    this.imgUrl = imgUrl
    this.style = style//空间标题

  }
}

/**
 * 
 * enclosure: 是否带附件
 * supplement: 是否补充说明
 **/
export class Option {
  content: string
  constructor(content = "示例内容",) {
    this.content = content

  }
}


/**
 * @description: 单选题
 * @constructor  构造函数
 * @extends FormTypes 基类Class
 * @function initOptions 修改选项
 * @Date: 2021-09-28 13:51:19
 */
export class Radio extends FormTypes {
  options: any[]
  option:object

  /**
   * @description: 单选构造函数
   * @param {*} style 风格
   * @param {object} option  选项
   * @param {*} imgUrl 封面
   * @param {*} label
   * @return {*}
   * @Date: 2021-12-02 11:49:51
   */
  constructor(style = "单选", option:object=new Option() , imgUrl, label) {
    super(style, imgUrl, label,)
    this.type = TYPE_PROXY.RADIO
    this.options = new Array()
    this.option=option
    this.addOption()
  }
  /**
   * @description: 添加选项
   * @param {*} option
   * @return {*}
   * @Date: 2021-10-12 14:29:53
   */
  addOption() {
    this.options.push(this.option)
  }
  /**
   * @description: 删除选项
   * @param {*} index
   * @return {*}
   * @Date: 2021-10-12 14:29:40
   */
  delOption(index: number) {
    this.options.splice(index, 1)
  }

}


// /**
//  * @description: 上传
//  * @constructor  构造函数
//  * @extends FormTypes 基类Class
//  * @Date: 2021-09-28 13:51:19
//  */
// export class Upload extends FormTypes {
//   constructor(style = "上传图片", imgUrl, label, content, tips, required) {
//     super(style, imgUrl, label, content, tips, required)
//     this.type = TYPE_PROXY.UPLOAD
//   }

// }



// /**
//  * @description: 多文本
//  * @constructor  构造函数
//  * @extends FormTypes 基类Class
//  * @Date: 2021-09-28 13:51:19
//  */
// export class Textarea extends FormTypes {
//   constructor(style = "多文本", placeholder = "请输入", extent, tipText = 20, imgUrl, label, content, tips, required) {
//     super(style, imgUrl, label, content, tips, required)
//     this.type = TYPE_PROXY.TEXTAREA
//     this.expand = { extent, placeholder, tipText }

//   }
// }

/**
 * @description: 拖动区域占位符默认类型
 * @extends FormTypes
 * @param {*}
 * @return {*}
 * @Date: 2021-10-12 11:19:36
 */
export class Empty extends FormTypes {
  constructor(style:string = "拖动区域", imgUrl?, label="空选择区域" ) {
    super(style, imgUrl, label )
    this.type = TYPE_PROXY.EMPTY
  }
}

// /**
//  * @description: 数字输入类型
//  * @extends FormTypes
//  * @param {*}
//  * @return {*}
//  * @Date: 2021-10-15 11:26:22
//  */
// export class NumberInput extends FormTypes {
//   constructor(style = "数字输入", placeholder = "请输入", unit = "元",tipText = 10, imgUrl, label, content, tips, required) {
//     super(style, imgUrl, label, content, tips, required)
//     this.type = TYPE_PROXY.NUMBER_INPUT
//     this.expand = { unit, placeholder,tipText }

//   }

// }




