/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-11-18 18:38:28
 * @LastEditTime: 2021-11-19 11:56:15
 * @LastEditors: Gavin
 */

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
interface UploadEvent{
  handleCancel?:()=>void
  handlePreview?:(file:FileItem)=>void
  handleChange:(file:FileInfo)=>void
  beforeUpload:(file:FileItem)=>void
}

interface UploadByAvatar extends UploadEvent{
  previewImage?:string
  previewVisible?:boolean
  fileList:Ref<[]>
  loading:Ref<boolean>
  imageUrl:Ref<string>
}
import {Ref,ref} from 'vue'
import { message } from 'ant-design-vue';
export default function ():UploadByAvatar {
  const fileList=ref<[]>([]),
  loading=ref<boolean>(false),
  imageUrl = ref<string>(''),
  handleChange = (info: FileInfo) => {
    if (info.file.status === 'uploading') {
      loading.value = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (base64Url: string) => {
        imageUrl.value = base64Url;
        loading.value = false;
      });
    }
    if (info.file.status === 'error') {
      loading.value = false;
      message.error('upload error');
    }
  },
  beforeUpload = (file: FileItem) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  return {
    fileList,
    loading,
    imageUrl,
    handleChange,
    beforeUpload
  }
 
  
}