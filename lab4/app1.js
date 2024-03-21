//import thư viện
const express = require('express');
const mailer = require('nodemailer')
const app = express();// tạo đối tượng server
//tạo transporter
let transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user:'dungptph36187@fpt.edu.vn',
        pass:'yaaa yhvk drly tohx'
    }
})
//chuẩn bị thông tin
let mailOption = {
    from :'dungptph36187@fpt.edu.vn',
    to:'phungtiendung211104@gmail.com',
    subject:'hello',
    text:'tôi là dũng'
}
//gửi mail
transporter.sendMail(mailOption,(err,info)=>{
    if(err){
        console.log(err);
    }else{
        console.log(info.messageId);
    }
})
//khởi động máy chủ
app.listen(3001,()=>{
    console.log('server dang chay o cong 3001');
})
