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
    items: ['Python', 'SQL', 'JSON', 'Bash'],
  },
  {
    title: 'Data Engineering',
    items: [
      'Apache Airflow',
      'ETL / ELT',
      'Pandas',
      'PySpark',
      'Web Scraping (Selenium)',
      'Incremental Load',
    ],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'Oracle', 'Supabase', 'Query Optimization'],
  },
  {
    title: 'Tools',
    items: [
      'Power BI (DAX)',
      'Excel · Power Query',
      'Docker',
      'Git / GitHub',
      'Linux CLI',
      'Vercel',
      'Arduino IDE',
    ],
  },
  {
    title: 'Languages',
    items: ['Thai · Native', 'English · Intermediate'],
  },
]

export const projects = [
  {
    slug: 'slip-bot',
    code: '01',
    name: 'Slip-Bot',
    blurb:
      'อ่านสลิปโอนเงินที่ส่งเข้า LINE แล้วแปลงเป็นรายการรายรับรายจ่ายรายเดือน โดยไม่ต้องคีย์ยอดทีละใบ',
    detail: [
      'Slip-Bot รับรูปสลิปจาก LINE Official Account แล้วเดินทั้งเส้นทางตั้งแต่รับข้อความ เตรียมภาพ อ่านตัวอักษร จนบันทึกเป็นรายการที่ใช้ติดตามได้ เป้าหมายคือเลิกคีย์ยอดจากสลิปทีละใบเวลาสรุปค่าใช้จ่ายรายเดือน',
      'ภาพถูกปรับก่อนเข้า OCR เพื่อให้อ่านตัวเลขและวันที่ได้ชัดขึ้น จากนั้นตัวอ่านแยกฟอร์แมตของ SCB กับ TrueMoney คนละชุด ดึงยอดเงิน วันที่ และเลขอ้างอิงออกมาเป็นข้อมูลโครงสร้าง แล้วตอบกลับในแชทด้วย Flex Message เพื่อยืนยันว่ารายการถูกเก็บแล้ว',
      'รายการที่อ่านได้ถูกเก็บไว้สำหรับสรุปรายเดือน และเปิดดูบนแดชบอร์ดแยกจากตัวบอท บริการรันใน Docker และพร้อมดีพลอยผ่าน Render ทำให้รับสลิปได้ต่อเนื่องโดยไม่ต้องเปิดเครื่องคอยดูเอง',
    ],
    stack: ['Python', 'OpenCV', 'EasyOCR', 'FastAPI', 'PostgreSQL', 'LINE OA'],
    href: 'https://github.com/bebarboss/slip-bot',
    image: slipBot,
  },
  {
    slug: 'airflow-etl',
    code: '02',
    name: 'Airflow ETL Products',
    blurb:
      'ดึงราคาสินค้าตามรอบเวลา ทำความสะอาดหน่วยกับปริมาณ แล้วเทียบราคาต่อหน่วยบนแดชบอร์ด',
    detail: [
      'โปรเจกต์นี้เก็บราคาสินค้าเป็นชุดตามเวลา แทนการเปิดหน้าเว็บแล้วจดราคาเอง DAG บน Apache Airflow ชื่อเส้นทางจาก Lotus ไปยัง Supabase เป็นตัวจัดคิวว่าเมื่อไรต้องดึง เมื่อไรต้องแปลง และเมื่อไรต้องโหลด',
      'หลังดึงข้อมูล Pandas ทำความสะอาดช่องปริมาณและหน่วยให้เทียบกันได้ เช่น สินค้าขนาดต่างกันถูกแปลงเป็นราคาต่อหน่วยเดียวกัน แล้วโหลดเข้า Supabase เพื่อให้รอบถัดไปเทียบกับราคาเดิมได้',
      'ฝั่งที่อ่านผลเป็นแดชบอร์ด Streamlit แสดงราคาเทียบกันตามแบรนด์และขนาด ใช้ดูว่าสินค้าไหนถูกกว่าเมื่อคิดเป็นหน่วยเดียวกัน โดยไม่ต้องรวมไฟล์ราคาเองทุกครั้งที่รอบใหม่จบ',
    ],
    stack: ['Python', 'Pandas', 'Apache Airflow', 'PostgreSQL', 'Streamlit'],
    href: 'https://github.com/bebarboss/Airflow_ETL_products',
    image: airflow,
  },
  {
    slug: 'botboss',
    code: '03',
    name: 'BotBoss',
    blurb:
      'แอปเดสก์ท็อปสำหรับกดซื้อบัตรตามเวลาที่ตั้งไว้ ควบคุมจาก GUI โดยไม่ต้องใช้เทอร์มินัล',
    detail: [
      'BotBoss เป็นแอปกดซื้อบัตรที่สั่งงานจากหน้าต่าง ไม่ใช่จากคำสั่งในเทอร์มินัล ผู้ใช้ใส่ URL ของหน้าจองบัตร กดเชื่อม Chrome ตั้งเวลา แล้วสั่งเริ่มหรือหยุดได้จากปุ่มบนหน้าจอ',
      'Selenium ควบคุม Chrome ที่เปิดในโหมดดีบัก เพื่อกดตามจังหวะที่ตั้งไว้ หน้าต่าง PyQt6 แสดงสถานะแบบเรียลไทม์ จึงเห็นได้ว่าบอทเชื่อมเบราว์เซอร์แล้วหรือยัง และกำลังรอเวลาหรือกำลังกดอยู่',
      'ตัวแอปแพ็กเป็นโปรแกรม macOS ได้ทั้งไฟล์ DMG และ ZIP และบิลด์บน Windows ได้ด้วย PyInstaller ตัวโปรเจกต์เปิดเป็นโอเพนซอร์สเพื่อการศึกษา การใช้งานต้องอยู่ในเงื่อนไขของเว็บที่เข้าไปกด',
    ],
    stack: ['Python', 'PyQt6', 'Selenium'],
    href: 'https://github.com/bebarboss/botboss',
    image: botboss,
  },
  {
    slug: 'eol-data',
    code: '04',
    name: 'EOL Data',
    blurb:
      'ดึงล็อตจาก Oracle แล้วจัดกลุ่มแพ็กเกจและโฟลว์การผลิต ก่อนส่งออกเป็นรายงาน Excel',
    detail: [
      'EOL Data แทนที่งานคัดลอกล็อตจากระบบผลิตมาลง Excel ทีละแถว สคริปต์เชื่อม Oracle ดึงล็อตตามคำสั่งซื้อ แล้วจัดคอลัมน์ให้พร้อมใช้ต่อในรายงาน WIP',
      'ข้อมูลถูกจัดกลุ่มตามชนิดแพ็กเกจของไอซี เช่น SOIC, SOT, MSOP, TSSOP และ DFN และแยกโฟลว์เป็นประกอบอย่างเดียวกับประกอบพร้อมทดสอบ จากนั้นล้างค่าว่างก่อนเขียนออกไฟล์',
      'ผลลัพธ์เป็น Excel ที่โครงตรงกับเทมเพลตรายงานที่ใช้อยู่ ลดการกรอกซ้ำและลดแถวที่หลุดเพราะคัดลอกมือ โดยยังคงรหัสล็อตและรหัสลูกค้าไว้ให้ตรวจย้อนได้',
    ],
    stack: ['Python', 'Pandas', 'OpenPyXL', 'Oracle'],
    href: 'https://github.com/bebarboss/EOLdata',
    image: eolData,
  },
  {
    slug: 'boa',
    code: '05',
    name: 'BOA',
    blurb:
      'ยืนยันตัวตนจากลายเส้นเลือดหลังมือ โดยถ่ายภาพ ครอป แล้วจำแนกด้วยโครงข่ายประสาท',
    detail: [
      'BOA เป็นระบบยืนยันตัวตนแบบไม่สัมผัส อ่านลายเส้นเลือดฝั่งหลังมือแทนลายนิ้วหรือบัตร ภาพถูกถ่ายจากกล้องในแอป แล้วส่งเข้าขั้นตอนเตรียมภาพก่อนจำแนก',
      'OpenCV ครอปบริเวณมือและจัดภาพให้เข้าโมเดล จากนั้น Keras CNN จำแนกว่าภาพตรงกับบุคคลที่ลงทะเบียนไว้หรือไม่ ผลถูกเก็บคู่กับเวลาที่ตรวจ เพื่อย้อนดูภายหลังได้',
      'ทั้งหน้าจอเปิดกล้อง จังหวะครอป และผลลัพธ์อยู่ใน GUI ที่เขียนด้วย PyQt5 มีหน้าสแปลชก่อนเข้าหน้าหลัก จึงใช้งานได้โดยไม่ต้องรันสคริปต์ทีละขั้น',
    ],
    stack: ['Python', 'OpenCV', 'Keras', 'PyQt5'],
    href: 'https://github.com/bebarboss/BOA',
    image: boa,
  },
  {
    slug: 'tiktok-pipeline',
    code: '06',
    name: 'TikTok Auto Pipeline',
    blurb:
      'ต่อข่าวเกมเป็นคลิปเสียงพากย์ แล้วอัปโหลดขึ้น TikTok ตามลำดับงานที่ตั้งไว้',
    detail: [
      'ไปป์ไลน์นี้ทำคลิปข่าวเกมซ้ำ ๆ ให้จบในชุดเดียว ตั้งแต่เก็บข่าว ตัดข่าวซ้ำ ไปจนถึงไฟล์วิดีโอที่พร้อมโพสต์ โดยไม่ต้องตัดต่อทีละคลิป',
      'ข่าวที่ผ่านการคัดซ้ำถูกส่งให้ Google AI สังเคราะห์เสียงพากย์ จากนั้น ffmpeg รวมเสียงกับคลิปภาพ ไฟล์ที่เสร็จถูกอัปโหลดขึ้น Google Drive เพื่อเก็บต้นฉบับก่อนส่งต่อ',
      'ขั้นสุดท้าย n8n ส่งงานต่อไปยัง Zapier และ Buffer เพื่อโพสต์ขึ้น TikTok ตามคิว FastAPI เป็นจุดเชื่อมระหว่างสคริปต์กับเวิร์กโฟลว์ ทำให้เพิ่มขั้นหรือหยุดคิวได้โดยไม่รื้อทั้งเส้น',
    ],
    stack: ['Python', 'FastAPI', 'n8n', 'ffmpeg', 'Google AI'],
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
