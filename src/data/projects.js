import testImage from "../assets/image/test_project.png";

import { MdOutlineSchool } from "react-icons/md";

const projects = [
  {
    title: ["學生", <br />, "跨領域學習", <br />, "行為分析"],
    desc: "我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作。",
    image: {
      link: testImage,
      desc: "testImage",
    },
    keywords: [
      "Category Data Analysis",
      "Text Mining",
      "TF-IDF",
      "Cluster Analysis",
      "Words Correlation",
      "R",
    ],
    position: {
      company: "National Cheng Kung University",
      icon: <MdOutlineSchool size={25} style={{ marginRight: "5px" }} />,
      date: 2023,
    },
  },
  {
    title: ["聯合國", <br />, "永續發展目標", <br />, "論文文字探勘"],
    desc: "我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作。",
    image: {
      link: testImage,
      desc: "testImage",
    },
    keywords: [
      "Category Data Analysis",
      "Text Mining",
      "TF-IDF",
      "Cluster Analysis",
      "Words Correlation",
      "R",
    ],
    position: {
      company: "National Cheng Kung University",
      icon: <MdOutlineSchool size={25} style={{ marginRight: "5px" }} />,
      date: 2023,
    },
  },
  {
    title: ["象徵性資料", <br />, "的時間序列應用"],
    desc: "我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作，我要找到好工作。",
    image: {
      link: testImage,
      desc: "testImage",
    },
    keywords: [
      "Category Data Analysis",
      "Text Mining",
      "TF-IDF",
      "Cluster Analysis",
      "Words Correlation",
      "R",
    ],
    position: {
      company: "National Cheng Kung University",
      icon: <MdOutlineSchool size={25} style={{ marginRight: "5px" }} />,
      date: 2023,
    },
  },
];

export default projects;
