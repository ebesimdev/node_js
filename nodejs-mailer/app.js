'use strict';
const nodemailer = require('nodemailer');
// async..await is not allowed in global scope, must use a wrapper
async function main() {
// สร้างออปเจ็ค transporter เพื่อกำหนดการเชื่อมต่อ SMTP และใช้ตอนส่งเมล
let transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
 port: 587,
 secure: false, // true for 465, false for other ports
 auth: { // ข้อมูลการเข้าสู่ระบบ
   user: 'ebesim.dev@gmail.com', // email user ของเรา
   pass: 'ebesim.devP@ssw0rd!'
  // email password
 }
});
// เริ่มทำการส่งอีเมล
let info = await transporter.sendMail({
from: '"ebesim 👻" <ebesim.dev@gmail.com>', // อีเมลผู้ส่ง
to: 'thanakrit.su@mail.wu.ac.th', // อีเมลผู้รับ สามารถกำหนดได้มากกว่า 1 อีเมล โดยขั้นด้วย ,(Comma)
subject: 'ยืนยันรหัสผ่าน ✔', // หัวข้ออีเมล
text: 'Hello world?', // plain text body
html: '<b>สวัสดี มีการลงทะเบียน ebesim App กรุณากดลิ้งเพื่อยื่นยันตัวตัว www.ebesim.com</b>' // html body
});
// log ข้อมูลการส่งว่าส่งได้-ไม่ได้
console.log('Message sent: %s', info.messageId);
}
main().catch(console.error);