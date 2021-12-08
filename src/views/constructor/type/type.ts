/*
 * @Description: type
 * @Author: Gavin
 * @Date: 2021-09-28 10:46:18
 * @LastEditTime: 2021-12-08 11:53:43
 * @LastEditors: Gavin
 */
import faker from "faker"
import { TypeEnum as TYPE_PROXY } from '../enmu/enum'


/* If you need to constructor a type, you just need to inherit the base type, define the desired properties and export them, for example class Radio */

/**
 * @description: base interface
 * @param {*}
 * @return {*}
 * @Date: 2021-12-08 10:59:50
 */
interface BaseType {
  type: string
  label: string
  formItemId: number | string
  imgUrl: string
  style: string
}
/**
 * @description: base Class
 * @constructor  
 * @Date: 2021-09-28 13:51:19
 */
class FormTypes implements BaseType {
  type: string
  label: string
  formItemId: number | string
  imgUrl: string
  style: string
  constructor(style: string = "Default", imgUrl: string = faker.image.avatar(), label: string = "Sample content") {
    this.label = label//Sample content
    this.formItemId = faker.datatype.number();//Id
    this.imgUrl = imgUrl//avatar
    this.style = style//name

  }

}

/**
 * @content content
 * @disp
 * 
 **/
export class Option {
  content: string
  readonly: boolean | number
 
  constructor(content: string = "content", readonly: boolean | number = false,) {
    this.content = content
    this.readonly = readonly
    
  }
}


/**
 * @description: Radio
 * @constructor  
 * @extends FormTypes 
 * 
 * @Date: 2021-09-28 13:51:19
 */
export class Radio extends FormTypes {
  options: Option[]
  option: Option
  canAdd?: boolean | number

  /**
   * @description: constructor by Radio
   * @param {*} style name
   * @param {object} option  Radio option
   * @param {*} imgUrl avatar
   * @param {*} label Sample content
   * @return {*}
   * @Date: 2021-12-02 11:49:51
   */
  constructor(style: string = "Radio", option: Option | Option[] = new Option(), imgUrl?: string, label?: string,canAdd?: boolean | number) {
    super(style, imgUrl, label,)
    this.type = TYPE_PROXY.RADIO
    this.canAdd=canAdd
    if (Array.isArray(option)) {
      this.option = new Option()
      this.options = option

    } else {
      this.options = new Array()
      this.option = option
      this.addOption()
    }

  }
  /**
   * @description: add option
   * @param {*} option
   * @return {*}
   * @Date: 2021-10-12 14:29:53
   */
  addOption(): void {
    this.options.push(this.option)
  }
  /**
   * @description: delete option
   * @param {*} index
   * @return {*}
   * @Date: 2021-10-12 14:29:40
   */
  delOption(index: number): void {
    this.options.splice(index, 1)
  }

}

/**
 * @description: default Empty
 * @extends FormTypes
 * @param {*}
 * @return {*}
 * @Date: 2021-10-12 11:19:36
 */
export class Empty extends FormTypes {
  constructor(style: string = "DragZone", imgUrl?, label: string = "DragZone") {
    super(style, imgUrl, label)
    this.type = TYPE_PROXY.EMPTY
  }
}

