import Mock from 'mockjs';//模块mock
import banner from './banner.json';//数据
import floor from './floor.json';


Mock.mock('/mock/banner', { code: 200, data: banner })//1.地址2.数据
Mock.mock('/mock/floor', { code: 200, data: floor })