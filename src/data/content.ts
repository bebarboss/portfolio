import avatar from '../assets/images/avatar-fb.jpg'
import photoDatabricks from '../assets/images/about/gosoft-databricks.jpg'
import photoWorkshop from '../assets/images/about/workshop.jpg'
import photoBeach from '../assets/images/about/beach.jpg'
import photoMural from '../assets/images/about/mural.jpg'
import cover from '../assets/images/cover-fb.jpg'
import slipBot from '../assets/images/projects/slip-bot.png'
import airflow from '../assets/images/projects/airflow.png'
import botboss from '../assets/images/projects/botboss.png'
import eolData from '../assets/images/projects/eol-data.png'
import boa from '../assets/images/projects/boa.png'
import tiktok from '../assets/images/projects/tiktok.png'
import notebookRag from '../assets/images/projects/notebook-rag.png'
import workflowSlipBot from '../assets/images/workflows/slip-bot.png'
import workflowAirflow from '../assets/images/workflows/airflow-etl.png'
import workflowBotboss from '../assets/images/workflows/botboss.png'
import workflowEol from '../assets/images/workflows/eol-data.png'
import workflowBoa from '../assets/images/workflows/boa.png'
import workflowTiktok from '../assets/images/workflows/tiktok-pipeline.png'
import workflowNotebookRag from '../assets/images/workflows/notebook-rag.png'
import topicAbout from '../assets/images/topics/about.png'
import topicExperience from '../assets/images/topics/experience.png'
import topicSkills from '../assets/images/topics/skills.png'
import topicProjects from '../assets/images/topics/projects.png'
import topicCerts from '../assets/images/topics/certs.png'
import topicContact from '../assets/images/topics/contact.png'
import certPytorch from '../assets/images/certs/skooldio-pytorch.jpg'
import certKmitl from '../assets/images/certs/kmitl-ai-ml.jpg'
import certDatabricks from '../assets/images/certs/databricks-bootcamp.jpg'
import certPython from '../assets/images/certs/python-in-action.jpg'
import certOic from '../assets/images/certs/oic-insurtech.jpg'
import certClassify from '../assets/images/certs/data-classification.jpg'
import certFutureSkill from '../assets/images/certs/futureskill-data-science.jpg'
import certSamsungAi from '../assets/images/certs/samsung-ai-workplace.jpg'
import certSamsungPython from '../assets/images/certs/samsung-python.jpg'

export const profile = {
  name: 'Navarit Rodsamrit',
  brand: 'NAVARIT',
  monogram: 'NVR',
  role: 'Application Support Engineer',
  company: 'Gosoft · CP ALL',
  tagline: 'Instrumentation roots. Data-driven ops. Code that ships.',
  summary:
    'Experienced in instrumentation engineering and IC manufacturing, with a strong background in production systems and quality control. Currently transitioning into IT, focusing on data-driven insights to improve operational efficiency.',
  story: [
    'I trained in applied physics and instrumentation at King Mongkut’s Institute of Technology Ladkrabang, then spent the next years on the hardware itself. At Micropower Electronics I designed circuits in Altium Designer and SolidWorks, wrote ESP32 control code in C, and built control cabinets. At Advance Siam Tech I calibrated measuring instruments and checked machine vibration in factories across provinces.',
    'That shop-floor work turned into production leadership at UTAC Thai Limited, running daily output, quality, and machine maintenance. Since May 2026 I have been an Application Support Engineer at Gosoft · CP ALL, keeping retail systems up while I learn the data side: Airflow pipelines, Databricks, Python automation, and OCR that turns a LINE slip into a monthly expense record.',
    'I am based in Saphan Sung, Bangkok. Thai is my first language and English is intermediate. The project and certificate pages hold the builds; this page is how I got from instruments to IT.',
  ],
  facts: [
    { label: 'Based', value: 'Saphan Sung, Bangkok' },
    { label: 'Education', value: 'B.Sc. Applied Physics (Instrument), KMITL · 2018–2021' },
    { label: 'Now', value: 'Application Support Engineer, Gosoft · CP ALL' },
    { label: 'Languages', value: 'Thai (native) · English (intermediate)' },
  ],
  photos: [
    {
      src: photoDatabricks,
      alt: 'Navarit at a Gosoft Databricks session, Get Started with Databricks for Data Engineering',
    },
    {
      src: photoWorkshop,
      alt: 'Navarit working on a laptop during a training workshop',
    },
    {
      src: photoBeach,
      alt: 'Navarit with a camera on the beach',
    },
    {
      src: photoMural,
      alt: 'Navarit standing in front of a mural',
    },
  ],
  location: 'Saphan Sung, Bangkok, Thailand',
  phone: '+66 85 818 5117',
  email: 'bluebus.boss@gmail.com',
  avatar,
  cover,
  links: {
    linkedin: 'https://linkedin.com/in/navarit-rodsamrit-554121240/',
    github: 'https://github.com/bebarboss',
    facebook: 'https://facebook.com/bluebus.boss/',
    photos: 'https://www.facebook.com/bluebus.boss/photos_by',
    website: 'https://resume-website-ten-ivory.vercel.app',
    resume: 'https://www.canva.com/design/DAHB01U6Z60/7JwhOsxm09oKf4MbQS62sw/view',
  },
}

export const experience = [
  {
    role: 'Application Support Engineer',
    company: 'Gosoft · CP ALL',
    period: 'May 2026 — Present',
    points: [
      'Support and troubleshoot applications across retail tech operations',
      'Assist users, resolve technical issues, and coordinate with engineering teams',
      'Maintain system performance and deliver technical guidance and training',
    ],
  },
  {
    role: 'Manufacturing Supervisor',
    company: 'UTAC Thai Limited',
    period: 'Aug 2023 — Feb 2026',
    points: [
      'Managed daily production, quality compliance, and process improvement',
      'Supervised staff, coordinated machine maintenance, and reported performance',
      'Solved production issues under high-throughput IC manufacturing constraints',
    ],
  },
  {
    role: 'Service Engineer',
    company: 'Advance Siam Tech',
    period: 'Nov 2022 — Aug 2023',
    points: [
      'Provided customer support and calibrated measuring instruments',
      'Measured machine vibration at factories across multiple provinces',
    ],
  },
  {
    role: 'Engineer',
    company: 'Micropower Electronics',
    period: 'Jun 2021 — Nov 2022',
    points: [
      'Built and repaired electrical systems; designed circuits with Altium Designer and SolidWorks',
      'Inspected train sensors and developed ESP32 control code in C',
      'Designed control cabinet systems and troubleshot electrical circuits',
    ],
  },
]

export const education = {
  school: "King Mongkut's Institute of Technology Ladkrabang",
  degree: 'Bachelor of Science · Applied Physics (Instrument)',
  period: '2018 — 2021',
}

export const skillGroups = [
  {
    title: 'Programming & Query',
    items: [
      { name: 'Python', logos: ['python'] },
      { name: 'SQL', logos: ['sql'] },
      { name: 'JSON', logos: ['json'] },
      { name: 'Bash', logos: ['gnubash'] },
    ],
  },
  {
    title: 'Data Engineering',
    items: [
      { name: 'Apache Airflow', logos: ['apacheairflow'] },
      { name: 'ETL / ELT', logos: ['etl'] },
      { name: 'Pandas', logos: ['pandas'] },
      { name: 'PySpark', logos: ['apachespark'] },
      { name: 'Web Scraping (Selenium)', logos: ['selenium'] },
      { name: 'Incremental Load', logos: ['incremental'] },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', logos: ['postgresql'] },
      { name: 'Oracle', logos: ['oracle'] },
      { name: 'Supabase', logos: ['supabase'] },
      { name: 'Query Optimization', logos: ['query'] },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Power BI (DAX)', logos: ['powerbi'] },
      { name: 'Excel · Power Query', logos: ['microsoftexcel'] },
      { name: 'Docker', logos: ['docker'] },
      { name: 'Git / GitHub', logos: ['git', 'github'] },
      { name: 'Linux CLI', logos: ['linux'] },
      { name: 'Vercel', logos: ['vercel'] },
      { name: 'Arduino IDE', logos: ['arduino'] },
    ],
  },
  {
    title: 'Languages',
    items: [
      { name: 'Thai · Native', logos: ['thai'] },
      { name: 'English · Intermediate', logos: ['english'] },
    ],
  },
]

export const projects = [
  {
    slug: 'slip-bot',
    code: '01',
    name: 'SlipBOT',
    blurb: 'ส่งสลิปเข้า LINE แล้วให้บอทจดบัญชีให้',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'การจดรายรับรายจ่ายพังเพราะขี้เกียจจด แต่ทุกการโอนมีสลิปอยู่แล้ว ถ้าแค่ส่งสลิปเข้าแชทแล้วระบบอ่านและบันทึกให้ การจดบัญชีจะเหลือแค่การแชร์รูปหนึ่งครั้ง',
        ],
      },
      {
        title: 'สถาปัตยกรรม',
        paragraphs: [
          'LINE Messaging API รับข้อความและรูปจากผู้ใช้ FastAPI เป็น webhook ที่ /callback รันใน Docker คู่กับ ngrok เพื่อเปิด URL สาธารณะตอนพัฒนา OpenCV กับ EasyOCR แยกประเภทสลิปและอ่านข้อความไทยกับอังกฤษ Supabase เก็บรายการ และแดชบอร์ด Next.js ใช้ดูหรือแก้ไขรายการ',
        ],
      },
      {
        title: 'ลงมือทำ',
        paragraphs: [
          'ทุก request ถูกตรวจลายเซ็น X-Line-Signature ก่อน ถ้าไม่ผ่านตอบ 400 จากนั้นแยกตามชนิดข้อความ ข้อความแบบ +500 บันทึกเป็นรายรับ 500 บาท ส่วนรูปถูกดาวน์โหลดผ่าน Messaging API แล้วส่งเข้า OCR',
          'สลิปแต่ละธนาคารวางข้อมูลไม่เหมือนกัน จึงต้องรู้ก่อนว่าเป็นสลิปแบบไหน บอทตัดส่วนบนสุดของภาพ 13% แรก แล้วเทียบกับโลโก้ที่เก็บไว้ด้วย ORB feature matching ถ้าจำนวนจุดที่ตรงกันถึง 12 ถือว่าเจอ ตอนนี้รองรับ SCB และ TrueMoney สองรูปแบบ ส่วน MAKE แยกได้แต่ยังไม่อ่านข้อมูล',
          'การอ่านทั้งภาพทีเดียวทำให้ฟิลด์ปนกัน จึงตัดสลิปเป็น Header, Body และ Footer ตามสัดส่วนความสูง โซนซ้อนกันเล็กน้อยโดยตั้งใจ เพื่อไม่ให้ข้อความตรงรอยตัดหาย EasyOCR อ่านสามโซนขนานกัน และเก็บเฉพาะข้อความที่ความมั่นใจอย่างน้อย 0.4',
          'แต่ละฟิลด์ใช้ regex หรือคำนำหน้า วันที่แปลงชื่อเดือนไทยหรืออังกฤษเป็นเลข และลบ 543 ถ้าเป็นปี พ.ศ. ผู้ส่งหาคำหลัง “จาก” ผู้รับหาคำหลัง “ไปยัง” จำนวนเงินจับรูปแบบ 1,234.00',
          'ก่อนบันทึก บอทค้นตาราง payment_transection ด้วยรหัสอ้างอิง ถ้าเคยมีแล้วตอบ Duplicate Slip ถ้ายังไม่มีก็บันทึก แล้วตอบกลับเป็น Flex Message แสดงจำนวนเงิน วันเวลา ผู้ส่ง ผู้รับ และ Ref ID',
        ],
      },
      {
        title: 'ผลลัพธ์',
        paragraphs: [
          'เส้นทางของสลิปหนึ่งใบคือส่งรูปเข้า LINE OA → webhook ตรวจลายเซ็น → ตรวจโลโก้แล้วเลือก parser → กันรายการซ้ำด้วยรหัสอ้างอิง → บันทึกลง Supabase → ตอบกลับด้วยการ์ด RECEIPT บนแชท',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'แยกงานเป็นจำแนกประเภท แล้วอ่านตามแม่แบบของประเภทนั้น ง่ายและแม่นกว่าใช้ตัวอ่านเดียวกับทุกสลิป การครอปเป็นโซนทำให้ทั้งแม่นขึ้นและเร็วขึ้น เพราะอ่านพร้อมกันได้ และรหัสอ้างอิงในสลิปเป็น unique key ที่ดีที่สุดสำหรับกันการบันทึกซ้ำ',
        ],
      },
    ],
    stack: ['Python', 'OpenCV', 'EasyOCR', 'FastAPI', 'Supabase', 'LINE OA', 'Next.js'],
    href: 'https://github.com/bebarboss/slip-bot',
    image: slipBot,
    workflow: workflowSlipBot,
  },
  {
    slug: 'airflow-etl',
    code: '02',
    name: 'Compare price',
    blurb: 'น้ำยาซักผ้าขวดไหนคุ้มที่สุด ให้ Airflow ตอบทุกวัน',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ราคาบนชั้นวางเทียบกันยาก ขวดหนึ่ง 700 มล. อีกขวดเป็นแพ็ก 2 ถุง 1.4 ลิตร แถมโปรเปลี่ยนทุกสัปดาห์ สิ่งที่อยากรู้จริง ๆ คือราคาต่อหน่วยของทุกสินค้า และอยากได้ตัวเลขนี้ใหม่ทุกวันโดยไม่ต้องเปิดเว็บเอง',
        ],
      },
      {
        title: 'สถาปัตยกรรม',
        paragraphs: [
          'ไปป์ไลน์แบบ Bronze → Silver → Gold รันใน Apache Airflow ผ่าน Docker Compose วันละครั้ง DAG ชื่อ etl_to_supabase มี task เดียวที่เรียกฟังก์ชันดึง แปลง แล้วโหลด Airflow 2.8.1 ใช้ PostgreSQL เก็บ metadata ของตัวมันเอง',
        ],
      },
      {
        title: 'ลงมือทำ',
        paragraphs: [
          'ขั้น Extract ไม่ได้ scrape HTML แอปมือถือของ Lotus’s ส่งรายการสินค้าเป็น JSON อยู่แล้ว จึงเรียก endpoint นั้นตรง ๆ ด้วย requests ขอทั้งหมวดในครั้งเดียว ได้ข้อมูลที่สะอาดและเสถียรกว่าการแกะหน้าเว็บ',
          'ขั้น Clean ใช้ json_normalize แตก JSON ซ้อนชั้นเป็นคอลัมน์ เปลี่ยนชื่อให้อ่านง่าย เลือกเฉพาะคอลัมน์ที่ใช้ และแปลงราคาด้วย to_numeric ค่าที่แปลงไม่ได้กลายเป็นค่าว่างแทนที่จะทำให้ job ล่ม',
          'ขั้น Transform แยกชื่อสินค้าภาษาไทยด้วย regex เป็นปริมาณ หน่วย จำนวนชิ้น หมวด และแบรนด์ ลำดับแพตเทิร์นสำคัญ เช่น ต้องจับ “แพ็ก 2+1” ก่อน “แพ็ก 2” ไม่งั้นจำนวนจะผิด จากนั้นแปลงทุกหน่วยเป็นมิลลิลิตร แล้วคำนวณราคาต่อหน่วย ถ้าชื่อตรงหลายแบรนด์จะเลือกชื่อที่ยาวที่สุด',
          'ขั้น Load เติมเวลาที่ประมวลผลและแหล่งที่มา เปลี่ยนค่าว่างให้ส่งเป็น JSON ได้ แล้ว upsert ลงตาราง products บน Supabase รันซ้ำกี่ครั้งก็ไม่เกิดแถวซ้ำ แดชบอร์ด Streamlit แสดงการเทียบราคาต่อหน่วยตามหมวดและแบรนด์',
        ],
      },
      {
        title: 'ผลลัพธ์',
        paragraphs: [
          'ได้ราคาต่อหน่วยของสินค้าซักผ้าอัปเดตทุกวันโดยไม่ต้องเปิดเว็บเอง และเทียบข้ามขนาดกับโปรได้บนแดชบอร์ด',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'ก่อนเขียน scraper ให้เปิด Network tab ดูก่อน หลายเว็บมี JSON API ให้ใช้อยู่แล้ว ข้อมูลภาษาไทยที่ไม่มีโครงสร้างต้องใช้ regex หลายชั้น เรียงจากรูปแบบเฉพาะไปทั่วไป และ upsert ทำให้ job รันซ้ำได้อย่างปลอดภัย ซึ่งสำคัญมากเมื่อให้ scheduler รัน',
        ],
      },
    ],
    stack: ['Python', 'Pandas', 'Apache Airflow', 'Supabase', 'Streamlit', 'Docker'],
    href: 'https://github.com/bebarboss/Airflow_ETL_products',
    image: airflow,
    workflow: workflowAirflow,
  },
  {
    slug: 'botboss',
    code: '03',
    name: 'BOTBOSS',
    blurb: 'บอทกึ่งอัตโนมัติช่วยกดบัตรคอนเสิร์ต หลังผู้ใช้ล็อกอินและยืนยันตัวตนเอง',
    sections: [
      {
        title: 'ที่มา',
        paragraphs: [
          'ทุกครั้งที่มีคอนเสิร์ต แฟนต้องนั่งกดบัตรแข่งกับคนเป็นหมื่น หรือเฝ้ากดรีเฟรชรอบัตรที่หลุดจากคนที่จ่ายเงินไม่ทัน จึงอยากให้หน้าที่ของคนเหลือแค่ดูหน้าจอและจ่ายเงิน ส่วนการแย่งที่นั่งให้บอททำ',
        ],
      },
      {
        title: 'ขอบเขตที่ตั้งใจไว้',
        paragraphs: [
          'บอทเป็นแบบกึ่งอัตโนมัติ ขั้นล็อกอิน เลือกคอนเสิร์ต และยืนยันว่าไม่ใช่บอท ผู้ใช้ยังต้องทำเอง บอทเริ่มทำงานหลังจากนั้นเท่านั้น และหยุดทันทีที่จองที่นั่งได้ ให้คนเป็นคนจ่ายเงิน',
        ],
      },
      {
        title: 'ลงมือทำ',
        paragraphs: [
          'แทนการเปิดเบราว์เซอร์ใหม่ที่ไม่มี session แอปเปิด Chrome ในโหมดดีบักพร้อมโปรไฟล์ของผู้ใช้ แล้วให้ Selenium เกาะเข้าทางพอร์ต 9222 ผู้ใช้จึงล็อกอินในหน้าต่างเดียวกับที่บอทใช้ โดยบอทไม่แตะขั้นยืนยันตัวตน หาที่อยู่ Chrome ได้ทั้งบน Windows, macOS และ Linux',
          'เมื่อผู้ใช้ผ่านการยืนยัน เว็บจะพาไปหน้าเลือกโซนซึ่ง URL มีคำว่า zones.php แอปเช็ก URL เป็นระยะ พอเจอก็เริ่มทันที อ่านชื่อโซนจากช่องกรอก หาพื้นที่ของโซนนั้น แล้วสุ่มที่นั่งว่างก่อนกด เพื่อไม่ให้ชนกับคนอื่นที่กดที่นั่งแรกเหมือนกัน',
          'ถ้าไม่มีที่นั่งว่าง รอแล้วรีเฟรช ถ้ามี popup ค้างหลังกด Submit แปลว่าที่นั่งถูกคนอื่นแย่งไป ก็รีเฟรชแล้ววนใหม่ ถ้า popup หายไปถือว่าส่งสำเร็จแล้วหยุด มี selector สำรองสองแบบ เพราะปุ่มบนจอใหญ่กับจอเล็กไม่เหมือนกัน',
          'หน้าจอทำด้วย PyQt6 งานเชื่อม Chrome รันใน QThread เพื่อไม่ให้หน้าต่างค้าง และ redirect stdout เข้ากล่อง log ในแอป ผู้ใช้จึงเห็นทุกขั้นที่บอททำ แจกจ่ายเป็น .app และ .dmg ด้วย PyInstaller พร้อม GitHub Actions สำหรับ build บน macOS และ Windows',
        ],
      },
      {
        title: 'ผลลัพธ์',
        paragraphs: [
          'ผู้ใช้กด Connect Chrome แล้วล็อกอินกับยืนยันตัวตนเอง เมื่อถึงหน้าโซนบอทเลือกที่นั่งและกดส่งให้ จนถึงขั้นพร้อมจ่ายเงิน',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'การเกาะ Chrome ผ่าน debug port ทำให้ใช้ session จริงของผู้ใช้ได้ และไม่ต้องให้บอทแตะขั้นยืนยันตัวตน เว็บขายบัตรเปลี่ยนหน้าตาบ่อย การมี selector สำรองและ try รอบทุกขั้นช่วยให้บอทไม่ล่มกลางทาง README พูดถึงการตั้งเวลา แต่โค้ดตอนนี้เริ่มจากการเจอหน้าโซนเท่านั้น และควรตรวจเงื่อนไขการใช้งานของเว็บก่อนใช้จริงทุกครั้ง',
        ],
      },
    ],
    stack: ['Python', 'PyQt6', 'Selenium', 'PyInstaller'],
    href: 'https://github.com/bebarboss/botboss',
    image: botboss,
    workflow: workflowBotboss,
  },
  {
    slug: 'eol-data',
    code: '04',
    name: 'EOLdata',
    blurb: 'เปลี่ยนรายงาน WIP ที่กรอกมือให้สร้างเองในคลิกเดียว',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ในสายการผลิตช่วง End of Line ต้องรายงานทุกวันว่ามี lot ค้างอยู่ที่แต่ละสถานีเท่าไร แยกตาม package และแยกระหว่างงาน ASSY ONLY กับ ASSY TEST เดิมต้องดึงข้อมูลจากระบบ BWIP แล้วนั่งจัดลง Excel template เอง ซึ่งช้าและพลาดง่าย',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'ให้ Python ดึงข้อมูลจาก Oracle ตรง ๆ แล้วทำทุกขั้นที่คนเคยทำ ตั้งแต่ล้างข้อมูล จัดกลุ่ม และ pivot จนได้ตารางหน้าตาเดียวกับรายงานเดิม ตรรกะข้อมูลอยู่ใน main.py ส่วนแดชบอร์ด Streamlit อยู่ใน app.py จึงเปลี่ยนวิธีแสดงผลได้โดยไม่แตะส่วนประมวลผล',
        ],
      },
      {
        title: 'ลงมือทำ',
        paragraphs: [
          'หนึ่ง lot อาจมีหลายแถวในระบบ จึงใช้ ROW_NUMBER() แบ่งตาม lot แล้วเรียงจากวันที่เริ่มล่าสุด เก็บไว้แค่แถวแรก จากนั้น map รหัส package ให้เป็นกลุ่มเดียวกัน เช่น SOT2305 กับ SOT2306 อยู่ในกลุ่ม SOT 5/6/8 L และแยกประเภท flow จากตัวอักษรในรหัส ถ้ามี T เป็น ASSY TEST นอกนั้นเป็น ASSY ONLY',
          'pivot ตามสถานี แล้วรวมคอลัมน์ที่รายงานนับเป็นช่องเดียว เช่น X-RAY กับ PKG CURE เป็น PMC จากนั้น reindex ให้ลำดับสถานีและแถว package ตรงเทมเพลตทุกครั้ง แม้วันนั้นบาง package จะไม่มีของเลย',
          'แยกสองตารางด้วย xs() แล้วตัดสถานีที่ flow นั้นไม่ผ่าน ASSY ONLY ไม่มี DEFLASH กับ REFLOW ส่วน ASSY TEST ไม่มี LASER DEFLASH, LASER MARK BACK และ TEMP CYCLE ค่าว่างถูกทำให้เป็นช่องว่าง เพื่อให้ตารางดูเหมือนรายงานที่คนกรอก',
          'หน้า Streamlit มีเมนู Inventory EOL สำหรับสองตารางนี้ และหน้า DataEOL สำหรับดูข้อมูลดิบราย lot',
        ],
      },
      {
        title: 'ผลลัพธ์',
        paragraphs: [
          'รายงานที่เคยต้องจัดเองกลายเป็นหน้าแดชบอร์ดที่โหลดข้อมูลล่าสุดทุกครั้งที่เปิด ลำดับแถวและคอลัมน์ตรงกับรายงานเดิมเสมอ',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'ใช้ reindex ล็อกโครงสร้างตาราง ดีกว่าหวังให้ข้อมูลออกมาครบเอง และ dictionary ใน Python มี key ซ้ำไม่ได้ รายการ package ที่ใช้ชื่อกลุ่มซ้ำจะทับกัน ควรรวมเป็นรายการเดียวต่อกลุ่ม',
        ],
      },
    ],
    stack: ['Python', 'Pandas', 'Oracle', 'Streamlit'],
    href: 'https://github.com/bebarboss/EOLdata',
    image: eolData,
    workflow: workflowEol,
  },
  {
    slug: 'boa',
    code: '05',
    name: 'BOA GUI',
    blurb: 'สอน CNN ให้จำว่า “นี่คือมือของใคร”',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'อยากได้ระบบยืนยันตัวตนจากภาพมือ ถ่ายภาพหนึ่งครั้งแล้วรู้ทันทีว่าเป็นของใคร โดยเทรนโมเดลเองทั้งหมด ไม่ใช้ API สำเร็จรูป',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'ทำเป็นแอปเดสก์ท็อปด้วย PyQt5 ที่มีสองโหมด โหมด REGISTRATION เปิดกล้องหรือเลือกภาพมือของผู้ใช้ใหม่ สร้างชุดข้อมูล train/test แล้วกดเทรนโมเดล โหมด RECOGNITION รับภาพมือ ประมวลผล แล้วบอกว่าเป็นมือของใคร',
        ],
      },
      {
        title: 'ลงมือทำ',
        paragraphs: [
          'ภาพจากกล้องมีแสงและพื้นหลังรบกวน จึงต่อหลายขั้นด้วย OpenCV เพิ่มคอนทราสต์ กรองขอบแบบ bilateral เบลอจุดเล็ก แยกมือด้วย adaptive threshold แล้วลบเศษด้วย morphological opening จากนั้นหาจุดศูนย์กลางของมือด้วย moments แล้วตัดด้วยหน้ากากวงกลมรัศมี 170 พิกเซล',
          'แทนที่จะให้ผู้ใช้ถ่าย 100 รูป แอปหมุนภาพที่ตัดแล้วทีละ 3.6 องศาจนครบ 360 องศา ได้ 100 ภาพต่อคน บันทึกลงโฟลเดอร์ชื่อผู้ใช้ ซึ่งกลายเป็นป้ายกำกับของคลาสนั้นทันที',
          'โมเดลเป็น CNN สองชั้น convolution รับภาพ 64×64 เทรน 30 epochs แล้วบันทึกไว้ พร้อม ResultsMap.pkl ที่แปลงเลขคลาสกลับเป็นชื่อคน ภาพใหม่ผ่านการเตรียมภาพชุดเดียวกัน แล้วค่าที่โมเดลมั่นใจที่สุดถูกแสดงบนหน้าจอ',
          'ในเวอร์ชันนี้ปุ่ม OPEN CAMERA เปิดหน้าต่างเลือกไฟล์ภาพ ส่วนการถ่ายจากกล้องสดอยู่ในสคริปต์ทดลองแยกต่างหาก หน้าต่างไม่มีกรอบ ลากย้ายได้ และมีเมนูแฮมเบอร์เกอร์ยืดหดได้',
        ],
      },
      {
        title: 'ผลลัพธ์',
        paragraphs: [
          'ได้แอปที่ลงทะเบียนผู้ใช้ใหม่ เทรน และจำแนกมือได้ในโปรแกรมเดียว ผู้ใช้กดแค่ปุ่ม OPEN CAMERA, GENERATE และ TRAIN MODEL',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'การหมุนภาพช่วยได้มากเมื่อมีภาพต้นฉบับน้อย แต่ทุกภาพยังมาจากรูปเดียว ควรเก็บภาพจริงหลายมุมเพิ่ม ตอนนี้ชุด train และ test ชี้ไปโฟลเดอร์เดียวกัน ค่า validation จึงสูงเกินจริง และพาธที่ฝังในโค้ดควรย้ายไปไว้ในไฟล์ตั้งค่าถ้าจะรันบนเครื่องอื่น',
        ],
      },
    ],
    stack: ['Python', 'OpenCV', 'TensorFlow', 'PyQt5'],
    href: 'https://github.com/bebarboss/BOA',
    image: boa,
    workflow: workflowBoa,
  },
  {
    slug: 'tiktok-pipeline',
    code: '06',
    name: 'Auto TikTok',
    blurb: 'โรงงานผลิตคลิปข่าวเกมที่ไม่มีคนทำงาน',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ช่องข่าวเกมต้องโพสต์บ่อยถึงจะโต แต่การทำคลิปหนึ่งคลิปต้องหาข่าว เขียนบท อัดเสียง หาภาพประกอบ ตัดต่อ และอัปโหลด ถ้าทำเองทุกวันจะหมดแรงก่อนช่องโต',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'ใช้ n8n เป็นตัวคุมลำดับงานทั้งหมด งานที่ n8n ทำเองไม่ได้ เช่น ตัดต่อวิดีโอ ให้ API ที่เขียนด้วย Python และ FastAPI ทำแทน และใช้ Google Sheet เป็นฐานข้อมูลเบา ๆ จำว่าข่าวไหนทำไปแล้ว โปรเจกต์นี้ยังไม่มี repo สาธารณะ',
        ],
      },
      {
        title: 'ลงมือทำ',
        paragraphs: [
          'workflow เริ่มจาก scrape ข่าวเกมตามรอบเวลา แล้วเช็กซ้ำกับรายการใน Google Sheet ข่าวที่เคยทำแล้วถูกข้าม ข่าวใหม่ถูกบันทึกลง Sheet ก่อนทำขั้นถัดไป การกรองซ้ำตั้งแต่ต้นสำคัญ เพราะขั้น TTS และตัดต่อใช้เวลาและโควตามากที่สุด',
          'เนื้อข่าวถูกแปลงเป็นเสียงพากย์ด้วย Google AI Studio คลิปจาก YouTube ถูกนำมาเป็นภาพประกอบ แล้ว FastAPI เรียก ffmpeg รวมภาพจากคลิปกับเสียงพากย์เป็นวิดีโอเดียว ถ้าคลิปต้นทางเป็นแนวนอนต้องครอปหรือขยายให้เป็นวิดีโอแนวตั้ง 1080×1920 ก่อน',
          'ไฟล์ที่เสร็จถูกอัปโหลดขึ้น Google Drive เพื่อให้มีลิงก์ที่บริการภายนอกดึงไปใช้ได้ จากนั้น n8n ส่งต่อ Zapier เพื่อให้ Buffer โพสต์ลง TikTok โดยไม่ต้องขอสิทธิ์ TikTok API เอง',
        ],
      },
      {
        title: 'ผลลัพธ์',
        paragraphs: [
          'ได้โรงงานผลิตคลิปที่รันตามตาราง ดึงข่าวใหม่ สร้างเสียงพากย์ ตัดต่อ แล้วโพสต์ลง TikTok โดยคนไม่ต้องทำทุกขั้นเอง',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'ขั้นเช็กข่าวซ้ำเป็นขั้นที่สำคัญที่สุดของไปป์ไลน์ที่รันเองตลอดเวลา ไม่มีขั้นนี้ช่องจะเต็มไปด้วยคลิปซ้ำ เครื่องมือ no-code กับโค้ดใช้ร่วมกันได้ดี ให้แต่ละฝั่งทำในสิ่งที่ถนัด และควรตรวจสิทธิ์การใช้คลิป YouTube กับเนื้อหาข่าวก่อนนำไปเผยแพร่',
        ],
      },
    ],
    stack: ['Python', 'FastAPI', 'n8n', 'ffmpeg', 'Google AI', 'Zapier'],
    href: 'https://github.com/bebarboss',
    image: tiktok,
    workflow: workflowTiktok,
  },
  {
    slug: 'notebook-rag',
    code: '07',
    name: 'Notebook RAG',
    blurb:
      'ผู้ช่วยแบบ NotebookLM ที่ตอบคำถามซัพพอร์ตภาษาไทยจากคู่มือระบบและเคสเก่า พร้อมอ้างอิงหน้าต้นทาง',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ทีมซัพพอร์ตต้องเปิดคู่มือหลายไฟล์และย้อนดูเคสเก่าทุกครั้งที่มีคำถาม เอกสารเป็น PDF สแกน ไฟล์ Office และ CSV ของ incident การหาคำตอบที่ใช้ได้จริงจึงช้า และมักไม่รู้ว่าคำตอบมาจากหน้าไหน',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'แยกงานเป็นสองเส้นทาง INGEST แปลงเอกสารเป็นเวกเตอร์เก็บใน PostgreSQL กับ pgvector ส่วน ASK รับคำถามภาษาไทย ค้นคืนบริบท แล้วให้ LLM ตอบพร้อม citation หน้าจอเป็น React ด้วย TanStack Start และ API เป็น FastAPI ใน Docker',
        ],
      },
      {
        title: 'ลงมือทำ',
        paragraphs: [
          'เส้นทางอัปโหลดรับ PDF, DOCX, PPTX, DOC และ Incident CSV ดึงข้อความด้วย PyMuPDF และใช้ LibreOffice แปลงไฟล์ .doc หน้าสแกนที่มีตัวอักษรน้อยกว่า 10 ตัวจะส่งเข้า Typhoon OCR จากนั้นลบหัวท้าย ตัดชิ้นข้อความยาว 1,000 ตัวอักษรทับซ้อน 200 ตัว แล้วฝังด้วย multilingual-e5-small โดยใส่คำนำหน้า passage: ก่อนเก็บลง pgvector แบบ HNSW cosine และกรองตาม service ได้',
          'เส้นทางถามรับข้อความไทยและสกรีนช็อตที่เป็นทางเลือก แล้วค้น manual กับ incident ได้ฝั่งละ 16 รายการ จากนั้น rerank ด้วยความหมาย รหัส error และ service เหลือ 8 รายการก่อนประกอบบริบทเป็น Manual, Incident และ Known Issues',
          'LLM agent เลือกใช้ Typhoon, OpenAI, Gemini หรือ Claude ได้ ถ้าบริบทแรกไม่พอ agent เรียก search_manual หรือ search_incident เองได้อีกไม่เกิน 3 รอบ แล้วคืนคำตอบพร้อมจำนวน citation ชี้กลับไปหน้าต้นทาง',
        ],
      },
      {
        title: 'ผลลัพธ์',
        paragraphs: [
          'ได้ผู้ช่วยซัพพอร์ตที่อ่านคู่มือกับเคสเก่าให้ แล้วตอบเป็นภาษาไทยพร้อมอ้างอิง ไม่ต้องไล่เปิดไฟล์เองทีละหน้า',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'เอกสารไทยและหน้าสแกนต้องมี OCR ในไปป์ไลน์ ไม่ใช่แค่ extract ข้อความอย่างเดียว การ rerank ตามรหัส error กับ service ช่วยตัด noise จากเวกเตอร์ล้วน ๆ และ citation กลับไปหน้าต้นทางสำคัญพอ ๆ กับคำตอบ เพราะทีมซัพพอร์ตต้องตรวจซ้ำได้',
        ],
      },
    ],
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'sentence-transformers',
      'PyMuPDF',
      'Typhoon OCR',
      'React',
      'Docker',
    ],
    href: 'https://github.com/bebarboss',
    image: notebookRag,
    workflow: workflowNotebookRag,
  },
]

export const certifications = [
  {
    name: 'Deep Learning with PyTorch',
    issuer: 'Skooldio',
    year: '2026',
    image: certPytorch,
  },
  {
    name: 'Artificial Intelligence / Machine Learning',
    issuer: 'School of Engineering KMITL',
    year: '2026',
    image: certKmitl,
  },
  {
    name: 'Databricks · Data Engineer Bootcamp',
    issuer: 'Gosoft Academy · depa · Trainocate',
    year: '2026',
    image: certDatabricks,
  },
  {
    name: 'Python in Action · Reskill for the Future of Work',
    issuer: 'depa',
    year: '2026',
    image: certPython,
  },
  {
    name: 'Basic Data Science for InsurTech Innovator',
    issuer: 'OIC InsurTech Award',
    year: '2022',
    image: certOic,
  },
  {
    name: 'Introduction to Data Classification with Python',
    issuer: 'MHESI · AI for Everyone',
    year: '2022',
    image: certClassify,
  },
  {
    name: 'Data Science for Everyone',
    issuer: 'FutureSkill',
    year: '2022',
    image: certFutureSkill,
  },
  {
    name: 'Introduction to Artificial Intelligence in the Workplace',
    issuer: 'Samsung Innovation Campus',
    year: '2025',
    image: certSamsungAi,
  },
  {
    name: 'Python Mini-Course: Complex Data Structures',
    issuer: 'Samsung Innovation Campus',
    year: '2025',
    image: certSamsungPython,
  },
]

export const nav = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certs', href: '/certs' },
  { label: 'Contact', href: '/contact' },
]

/** One cartoon banner + card per page — click through to full detail */
export const topics = [
  {
    code: '01',
    eyebrow: 'Profile',
    title: 'โปรไฟล์ของคุณ',
    blurb:
      'From instrumentation and IC manufacturing into IT — building systems that keep operations sharp.',
    cta: 'ดูรายละเอียด',
    href: '/about',
    image: topicAbout,
    tone: 'red' as const,
  },
  {
    code: '02',
    eyebrow: 'Career',
    title: 'ประสบการณ์ของคุณ',
    blurb:
      'Gosoft · CP ALL, UTAC, Advance Siam Tech, and Micropower — hands-on ops to application support.',
    cta: 'ดูรายละเอียด',
    href: '/experience',
    image: topicExperience,
    tone: 'dark' as const,
  },
  {
    code: '03',
    eyebrow: 'Arsenal',
    title: 'สกิลของฉัน',
    blurb:
      'Python, SQL, Airflow, Power BI, Docker, and data pipelines — the stack that ships insights.',
    cta: 'ดูสกิลทั้งหมด',
    href: '/skills',
    image: topicSkills,
    tone: 'red' as const,
  },
  {
    code: '04',
    eyebrow: 'Missions',
    title: 'โปรเจคเพิ่มเติมสกิลของฉัน',
    blurb:
      'Automation, OCR, ETL, and computer vision — builds that cut friction and surface signal.',
    cta: 'ดูโปรเจคเพิ่มเติม',
    href: '/projects',
    image: topicProjects,
    tone: 'cream' as const,
  },
  {
    code: '05',
    eyebrow: 'Unlocks',
    title: 'ใบรับรองของคุณ',
    blurb: 'Bootcamps and credentials across AI/ML, data engineering, and Python.',
    cta: 'ดูรายละเอียด',
    href: '/certs',
    image: topicCerts,
    tone: 'red' as const,
  },
  {
    code: '06',
    eyebrow: 'Comms',
    title: 'ช่องทางติดต่อ',
    blurb:
      'Open to IT, data, and application support opportunities. Reach out via email or LinkedIn.',
    cta: 'ติดต่อเลย',
    href: '/contact',
    image: topicContact,
    tone: 'dark' as const,
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
