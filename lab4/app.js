//upload anh
//su dung thu vien multer
//cai: npm i multer
const express=require('express');
const multer=require('multer');
//tao ung dung
const app=express();
const port=3000;//cong server chay
//cau hinh de luu anh vao thu muc
const storage=multer.diskStorage({
    //luu o dau?
    destination: (req,file,cb)=>{
        cb(null,'uploads');//cb la viet tat cua callback
    },
    //ten file la gi?
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    },
});
const upload=multer({storage});//bien quan ly upload
//route (cho phep goi qua trinh duyet)
app.get('/upload',(req,res)=>{ //khi nguoi dung goi den localhost:3004/upload
    //tra ve ket qua
    res.sendFile(__dirname +'/upload.html');//dirname: ten thu muc
});
app.post('/upload',upload.single('image'),
(req,res)=>{
    res.send('upload anh thanh cong');
});///thuc hien upload anh
//tao server lang nghe yeu cau
app.listen(port,()=>{
    console.log('server dang chay o cong 3000');
});