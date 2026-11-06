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
    name: 'Slip-Bot',
    blurb: 'ส่งสลิปเข้า LINE แล้วให้บอทอ่าน กันรายการซ้ำ และจดบัญชีให้',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'การจดรายรับรายจ่ายพังเพราะขี้เกียจจด แต่ทุกการโอนมีสลิปอยู่แล้ว ถ้าส่งรูปเข้าแชทแล้วระบบอ่านและบันทึกให้ การจดบัญชีจะเหลือแค่การแชร์รูปครั้งเดียว',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'LINE Messaging API รับข้อความและรูป FastAPI เป็น webhook ที่ /callback รันใน Docker คู่กับ ngrok ตอนพัฒนา และดีพลอยบน Render ได้ OpenCV กับ EasyOCR แยกประเภทสลิปและอ่านข้อความไทยกับอังกฤษ รายการเก็บใน Supabase และเปิดดูหรือแก้บนแดชบอร์ด Next.js',
        ],
      },
      {
        title: 'วิธีทำ',
        paragraphs: [
          'ทุก request ถูกตรวจลายเซ็น X-Line-Signature ก่อน ข้อความแบบ +500 บันทึกเป็นรายรับ 500 บาท ส่วนรูปถูกดาวน์โหลดแล้วส่งเข้า OCR',
          'สลิปแต่ละเจ้าวางข้อมูลไม่เหมือนกัน บอทจึงตัดส่วนบนสุด 13% แล้วเทียบโลโก้ด้วย ORB ถ้าจับคู่ได้อย่างน้อย 12 จุดถือว่าเจอ ตอนนี้รองรับ SCB และ TrueMoney สองรูปแบบ ส่วน MAKE แยกโลโก้ได้แต่ยังไม่อ่านข้อมูล',
          'ภาพถูกแบ่งเป็น Header, Body และ Footer ตามสัดส่วนความสูง โซนซ้อนกันเล็กน้อยเพื่อไม่ให้ข้อความตรงรอยตัดหาย EasyOCR อ่านสามโซนพร้อมกัน และเก็บเฉพาะข้อความที่ความมั่นใจอย่างน้อย 0.4 จากนั้น regex ดึงวันที่ ผู้ส่ง ผู้รับ และจำนวนเงิน',
          'ก่อนบันทึกลงตาราง payment_transection บอทค้นรหัสอ้างอิง ถ้าเคยมีแล้วตอบ Duplicate Slip ถ้ายังไม่มีก็บันทึก แล้วตอบกลับด้วย Flex Message ที่แสดงจำนวนเงิน วันเวลา ผู้ส่ง ผู้รับ และ Ref ID',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'แยกงานเป็นจำแนกประเภทก่อน แล้วอ่านตามแม่แบบของประเภทนั้น ง่ายและแม่นกว่าใช้ตัวอ่านเดียวกับทุกสลิป การครอปเป็นโซนทำให้ทั้งแม่นขึ้นและเร็วขึ้น และรหัสอ้างอิงในสลิปเป็นกุญแจที่ดีที่สุดสำหรับกันการบันทึกซ้ำ',
        ],
      },
    ],
    stack: ['Python', 'OpenCV', 'EasyOCR', 'FastAPI', 'Supabase', 'LINE OA', 'Next.js'],
    href: 'https://github.com/bebarboss/slip-bot',
    image: slipBot,
  },
  {
    slug: 'airflow-etl',
    code: '02',
    name: 'Airflow ETL Products',
    blurb: 'ดึงสินค้า Lotus’s จาก API แปลงเป็นราคาต่อหน่วย แล้วอัปเดตทุกวัน',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ราคาบนชั้นวางเทียบกันยาก ขวดหนึ่ง 700 มล. อีกขวดเป็นแพ็ก 2 ถุง 1.4 ลิตร และโปรเปลี่ยนทุกสัปดาห์ สิ่งที่อยากรู้คือราคาต่อหน่วยของทุกสินค้า และอยากได้ตัวเลขใหม่ทุกวันโดยไม่ต้องเปิดเว็บเอง',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'ไปป์ไลน์แบบ Bronze, Silver, Gold รันใน Apache Airflow วันละครั้ง DAG ชื่อ etl_to_supabase เรียกฟังก์ชันเดียวที่ดึง แปลง แล้วโหลด Airflow 2.8.1 กับ PostgreSQL สำหรับ metadata รันผ่าน Docker Compose',
        ],
      },
      {
        title: 'วิธีทำ',
        paragraphs: [
          'ขั้น Extract ไม่ได้แกะ HTML แอปมือถือของ Lotus’s ส่งรายการสินค้าเป็น JSON อยู่แล้ว จึงเรียก endpoint นั้นตรง ๆ ได้ข้อมูลที่เสถียรกว่าการ scrape หน้าเว็บ',
          'ขั้น Clean ใช้ json_normalize แตก JSON ซ้อนชั้น เปลี่ยนชื่อคอลัมน์ให้อ่านง่าย และแปลงราคาด้วย to_numeric ค่าที่แปลงไม่ได้กลายเป็นค่าว่างแทนที่จะทำให้ job ล่ม',
          'ขั้น Transform แยกชื่อสินค้าภาษาไทยด้วย regex เป็นปริมาณ หน่วย จำนวนชิ้น หมวด และแบรนด์ ลำดับของแพตเทิร์นสำคัญ เช่น ต้องจับ “แพ็ก 2+1” ก่อน “แพ็ก 2” ไม่งั้นจำนวนจะผิด จากนั้นแปลงทุกหน่วยเป็นมิลลิลิตร แล้วคำนวณราคาต่อหน่วย ถ้าชื่อตรงหลายแบรนด์จะเลือกชื่อที่ยาวที่สุด เพื่อไม่ให้คำสั้นไปทับคำยาว',
          'ขั้น Load เติมเวลาที่ประมวลผลและแหล่งที่มา แล้ว upsert ลงตาราง products บน Supabase รันซ้ำกี่ครั้งก็ไม่เกิดแถวซ้ำ แดชบอร์ด Streamlit แสดงการเทียบราคาต่อหน่วยตามหมวดและแบรนด์',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'ก่อนเขียน scraper ให้เปิด Network tab ดูก่อน หลายเว็บมี JSON API อยู่แล้ว ข้อมูลภาษาไทยที่ไม่มีโครงสร้างต้องใช้ regex หลายชั้น เรียงจากรูปแบบเฉพาะไปทั่วไป และ upsert ทำให้ scheduler รันซ้ำได้อย่างปลอดภัย',
        ],
      },
    ],
    stack: ['Python', 'Pandas', 'Apache Airflow', 'Supabase', 'Streamlit', 'Docker'],
    href: 'https://github.com/bebarboss/Airflow_ETL_products',
    image: airflow,
  },
  {
    slug: 'botboss',
    code: '03',
    name: 'BotBoss',
    blurb: 'บอทกึ่งอัตโนมัติช่วยเลือกโซนและที่นั่ง หลังผู้ใช้ล็อกอินและยืนยันตัวตนเอง',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ทุกครั้งที่มีคอนเสิร์ต ต้องนั่งกดบัตรแข่งกับคนจำนวนมาก หรือเฝ้ากดรีเฟรชรอบัตรที่หลุดจากคนที่จ่ายเงินไม่ทัน อยากให้คนเหลือแค่ดูหน้าจอและจ่ายเงิน ส่วนการแย่งที่นั่งให้บอททำ',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'บอทเป็นแบบกึ่งอัตโนมัติ ขั้นล็อกอิน เลือกคอนเสิร์ต และยืนยันว่าไม่ใช่บอท ผู้ใช้ยังต้องทำเอง บอทเริ่มทำงานหลังจากนั้น และหยุดทันทีที่จองที่นั่งได้ เพื่อให้คนเป็นคนจ่ายเงิน',
        ],
      },
      {
        title: 'วิธีทำ',
        paragraphs: [
          'แอปเปิด Chrome ในโหมดดีบักพร้อมโปรไฟล์ของผู้ใช้ แล้วให้ Selenium เกาะเข้าทางพอร์ต 9222 ผู้ใช้จึงล็อกอินในหน้าต่างเดียวกับที่บอทใช้ โดยบอทไม่แตะขั้นยืนยันตัวตน หาที่อยู่ Chrome ได้ทั้งบน Windows, macOS และ Linux',
          'เมื่อผู้ใช้ผ่านการยืนยัน เว็บจะพาไปหน้าเลือกโซนซึ่ง URL มีคำว่า zones.php แอปเช็ก URL เป็นระยะ พอเจอก็อ่านชื่อโซนจากช่องกรอก หาพื้นที่ของโซนนั้น แล้วสุ่มที่นั่งว่างก่อนกด เพื่อไม่ให้ชนกับคนที่กดที่นั่งแรกเหมือนกัน',
          'ถ้าไม่มีที่นั่งว่าง หรือมี popup ค้างหลังกดส่ง แปลว่าที่นั่งถูกคนอื่นแย่งไป บอทจะรอแล้วรีเฟรชแล้ววนใหม่ ถ้า popup หายไปถือว่าส่งสำเร็จ แล้วหยุดทันที มี selector สำรองเพราะปุ่มบนจอใหญ่กับจอเล็กไม่เหมือนกัน',
          'หน้าจอทำด้วย PyQt6 งานเชื่อม Chrome รันในเธรดแยกเพื่อไม่ให้หน้าต่างค้าง และข้อความที่บอทพิมพ์ถูกส่งเข้ากล่อง log บนจอ แอปแพ็กเป็น .app และ .dmg ด้วย PyInstaller มี GitHub Actions สำหรับ build บน macOS และ Windows',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'การเกาะ Chrome ผ่าน debug port ทำให้ใช้ session จริงของผู้ใช้ได้ เว็บขายบัตรเปลี่ยนหน้าตาบ่อย การมี selector สำรองช่วยให้บอทไม่ล่มกลางทาง README พูดถึงการตั้งเวลา แต่โค้ดตอนนี้เริ่มเมื่อเจอหน้าโซน ไม่ได้ตั้งเวลารอไว้ล่วงหน้า และควรตรวจเงื่อนไขการใช้งานของเว็บก่อนใช้จริงทุกครั้ง',
        ],
      },
    ],
    stack: ['Python', 'PyQt6', 'Selenium', 'PyInstaller'],
    href: 'https://github.com/bebarboss/botboss',
    image: botboss,
  },
  {
    slug: 'eol-data',
    code: '04',
    name: 'EOL Data',
    blurb: 'ดึงล็อต WIP จาก Oracle แล้วจัดเป็นรายงาน ASSY ONLY กับ ASSY TEST บน Streamlit',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ที่ปลายสายการผลิตต้องรายงานทุกวันว่ามี lot ค้างอยู่ที่แต่ละสถานีเท่าไร แยกตาม package และแยกระหว่างงาน ASSY ONLY กับ ASSY TEST เดิมต้องดึงข้อมูลจากระบบ BWIP แล้วนั่งจัดลงเทมเพลตเอง ซึ่งช้าและพลาดง่าย',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'ให้ Python ดึงข้อมูลจาก Oracle แล้วทำทุกขั้นที่คนเคยทำ ตั้งแต่ล้างข้อมูล จัดกลุ่ม จน pivot ได้ตารางหน้าตาเดียวกับรายงานเดิม ตรรกะข้อมูลอยู่ใน main.py ส่วนแดชบอร์ด Streamlit อยู่ใน app.py จึงเปลี่ยนวิธีแสดงผลได้โดยไม่แตะส่วนประมวลผล',
        ],
      },
      {
        title: 'วิธีทำ',
        paragraphs: [
          'หนึ่ง lot อาจมีหลายแถวในระบบ จึงใช้ ROW_NUMBER() แบ่งตาม lot แล้วเรียงจากวันที่เริ่มล่าสุด เก็บไว้แค่แถวแรก จากนั้น map รหัส package ให้เป็นกลุ่มเดียวกัน เช่น SOT2305 กับ SOT2306 อยู่ในกลุ่ม SOT 5/6/8 L และแยก flow จากตัวอักษรในรหัส ถ้ามี T เป็น ASSY TEST นอกนั้นเป็น ASSY ONLY',
          'pivot ตามสถานี แล้วรวมคอลัมน์ที่รายงานนับเป็นช่องเดียว เช่น X-RAY กับ PKG CURE เป็น PMC จากนั้น reindex ให้ลำดับสถานีและแถว package ตรงเทมเพลตทุกครั้ง แม้วันนั้นบาง package จะไม่มีของเลย',
          'แยกสองตารางด้วย xs() แล้วตัดสถานีที่ flow นั้นไม่ผ่าน ASSY ONLY ไม่มี DEFLASH กับ REFLOW ส่วน ASSY TEST ไม่มี LASER DEFLASH, LASER MARK BACK และ TEMP CYCLE ค่าว่างถูกทำให้เป็นช่องว่าง เพื่อให้ตารางดูเหมือนรายงานที่คนกรอก',
          'หน้า Streamlit มีแท็บ Inventory EOL สำหรับสองตารางนี้ และหน้า DataEOL สำหรับดูข้อมูลดิบราย lot',
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
  },
  {
    slug: 'boa',
    code: '05',
    name: 'BOA',
    blurb: 'แอปเดสก์ท็อปที่เทรน CNN จากภาพมือ แล้วบอกว่าเป็นมือของใคร',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'อยากได้ระบบยืนยันตัวตนจากภาพมือ ถ่ายหรือเลือกภาพครั้งหนึ่งแล้วรู้ทันทีว่าเป็นของใคร โดยเทรนโมเดลเองทั้งหมด ไม่ใช้ API สำเร็จรูป',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'ทำเป็นแอปเดสก์ท็อปด้วย PyQt5 สองโหมด โหมดลงทะเบียนสร้างชุดข้อมูลจากภาพมือแล้วกดเทรน โหมดจดจำรับภาพใหม่แล้วบอกว่าเป็นมือของใคร มีหน้าสแปลชก่อนเข้าหน้าหลัก',
        ],
      },
      {
        title: 'วิธีทำ',
        paragraphs: [
          'ภาพจากกล้องมีแสงและพื้นหลังรบกวน จึงต่อหลายขั้นด้วย OpenCV เพิ่มคอนทราสต์ กรองขอบแบบ bilateral เบลอจุดเล็ก แยกมือด้วย adaptive threshold แล้วลบเศษด้วย morphological opening จากนั้นหาจุดศูนย์กลางของมือแล้วตัดด้วยหน้ากากวงกลม',
          'แทนที่จะให้ผู้ใช้ถ่ายเป็นร้อยรูป แอปหมุนภาพที่ตัดแล้วทีละ 3.6 องศาจนครบ 360 องศา ได้ 100 ภาพต่อคน บันทึกลงโฟลเดอร์ชื่อผู้ใช้ ซึ่งกลายเป็นป้ายกำกับของคลาสนั้นทันที',
          'โมเดลเป็น CNN สองชั้น convolution รับภาพ 64×64 เทรน 30 epochs แล้วบันทึกไว้ พร้อม ResultsMap.pkl ที่แปลงเลขคลาสกลับเป็นชื่อคน ภาพใหม่ผ่านการเตรียมภาพชุดเดียวกัน แล้วค่าที่โมเดลมั่นใจที่สุดถูกแสดงบนหน้าจอ',
          'ในเวอร์ชันนี้ปุ่มเปิดกล้องของแอปเลือกไฟล์ภาพ ส่วนการถ่ายจากกล้องสดอยู่ในสคริปต์ทดลองแยกต่างหาก หน้าต่างไม่มีกรอบ ลากย้ายได้ และมีเมนูที่ยืดหดได้',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'การหมุนภาพช่วยได้มากเมื่อมีภาพต้นฉบับน้อย แต่ทุกภาพยังมาจากรูปเดียว ควรเก็บภาพจริงหลายมุมเพิ่ม ตอนนี้ชุดฝึกกับชุดทดสอบชี้ไปโฟลเดอร์เดียวกัน ค่าความแม่นจึงสูงเกินจริง และพาธที่ฝังในโค้ดควรย้ายไปไว้ในไฟล์ตั้งค่าถ้าจะรันบนเครื่องอื่น',
        ],
      },
    ],
    stack: ['Python', 'OpenCV', 'TensorFlow', 'PyQt5'],
    href: 'https://github.com/bebarboss/BOA',
    image: boa,
  },
  {
    slug: 'tiktok-pipeline',
    code: '06',
    name: 'TikTok Auto Pipeline',
    blurb: 'ต่อข่าวเกมเป็นคลิปพากย์อัตโนมัติ ตั้งแต่เช็กข่าวซ้ำจนโพสต์ TikTok',
    sections: [
      {
        title: 'ปัญหา',
        paragraphs: [
          'ช่องข่าวเกมต้องโพสต์บ่อยถึงจะโต แต่ทำคลิปหนึ่งชิ้นต้องหาข่าว เขียนบท อัดเสียง หาภาพประกอบ ตัดต่อ และอัปโหลด ถ้าทำเองทุกวันจะหมดแรงก่อนช่องโต',
        ],
      },
      {
        title: 'แนวคิด',
        paragraphs: [
          'ใช้ n8n เป็นตัวคุมลำดับงานทั้งหมด งานที่ n8n ทำเองไม่ได้ เช่น ตัดต่อวิดีโอ ให้ API ที่เขียนด้วย Python และ FastAPI เรียก ffmpeg แทน และใช้ Google Sheet เป็นฐานข้อมูลเบา ๆ จำว่าข่าวไหนทำไปแล้ว โปรเจกต์นี้ยังไม่มี repo สาธารณะ',
        ],
      },
      {
        title: 'วิธีทำ',
        paragraphs: [
          'เริ่มจากดึงข่าวเกมตามรอบเวลา แล้วเทียบกับรายการใน Google Sheet ข่าวที่เคยทำแล้วถูกข้าม ข่าวใหม่ถูกบันทึกไว้ก่อนทำขั้นถัดไป การกรองซ้ำตั้งแต่ต้นสำคัญ เพราะการสังเคราะห์เสียงและตัดต่อใช้เวลาและโควตามากที่สุด',
          'เนื้อข่าวถูกแปลงเป็นเสียงพากย์ด้วย Google AI Studio คลิปจาก YouTube ถูกนำมาเป็นภาพประกอบ แล้ว ffmpeg รวมภาพจากคลิปกับเสียงพากย์เป็นวิดีโอเดียว ถ้าคลิปต้นทางเป็นแนวนอนต้องครอปหรือขยายให้เป็นวิดีโอแนวตั้งก่อน',
          'ไฟล์ที่เสร็จถูกอัปโหลดขึ้น Google Drive เพื่อให้มีลิงก์ที่บริการภายนอกดึงไปใช้ได้ จากนั้น n8n ส่งต่อ Zapier เพื่อให้ Buffer โพสต์ลง TikTok โดยไม่ต้องขอสิทธิ์ TikTok API เอง',
        ],
      },
      {
        title: 'บทเรียน',
        paragraphs: [
          'ขั้นเช็กข่าวซ้ำเป็นขั้นที่สำคัญที่สุดของไปป์ไลน์ที่รันเองตลอดเวลา ไม่มีขั้นนี้ช่องจะเต็มไปด้วยคลิปซ้ำ เครื่องมือ no-code กับโค้ดใช้ร่วมกันได้ดี ถ้าให้แต่ละฝั่งทำในสิ่งที่ถนัด และควรตรวจสิทธิ์การใช้คลิปกับเนื้อหาข่าวก่อนนำไปเผยแพร่',
        ],
      },
    ],
    stack: ['Python', 'FastAPI', 'n8n', 'ffmpeg', 'Google AI', 'Zapier'],
    href: 'https://github.com/bebarboss',
    image: tiktok,
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
