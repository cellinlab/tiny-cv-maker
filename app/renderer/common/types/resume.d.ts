declare namespace TSResume {
  /**
   * @description 基本信息
   */
  export interface Base {
    avatar?: string;
    username: string;
    area?: string;
    school?: string;
    onSchoolTime?: {
      beginTime: string | number | null;
      endTime: string | number | null;
    };
    major?: string;
    degree?: string;
    hometown?: string;
    political?: string;
  }

  /**
   * @description 联系方式
   */
  export interface Contact {
    phone?: string;
    email?: string;
    github?: string;
    juejin?: string;
  }

  /**
   * @description 求职信息
   */
  export interface Work {
    job?: string;
    city?: string;
    cityList?: string[];
  }

  /**
   * @description 在校经验
   */
  export interface SchoolExperience extends Experience {
    department?: string;
    post?: string;
    content?: string;
    parseContent?: string[];
  }

  /**
   * @description 工作经验
   */
  export interface WorkExperience extends Experience {
    department?: string;
    post?: string;
    content?: string;
    parseContent?: string[];
  }

  /**
   * @description 项目经验
   */
  export interface ProjectExperience extends Experience {
    projectName?: string;
    post?: string;
    content?: string;
    parseContent?: string[];
  }

  /**
   * @description 经验
   */
  interface Experience {
    beginTime?: number | string | undefined;
    endTime?: number | string | undefined;
    supplement?: string;
    date?: number;
  }

  /**
   * @description 一份完整的简历信息
   */
  export interface IntactResume {
    base: Base;
    skill: string;
    skillList: string[];
    hobby: string;
    evaluation: string;
    evaluationList: string[];
    certificate: string;
    certificateList: string[];
    contact: Contact;
    work: Work;
    workExperience?: WorkExperience[];
    schoolExperience?: SchoolExperience[];
    projectExperience?: ProjectExperience[];
  }

  /**
   * @description 简历模版
   */
  export interface TemplateItem {
    id: string;
    name: string;
    cover: string;
  }

  /**
   * @description 简历工具条模块
   */
  export interface SliderItem {
    key: string;
    name: string;
    summary: string;
    require: boolean;
  }
}
