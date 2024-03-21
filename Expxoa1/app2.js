const express = require('express');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3004;
//để sử dụng portman
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//tạo key 
const acessk = '123456'
const refeshk = '123456'
const users = [
    {id:1,username:'user1',password:'pwd1'},
];
//hàm sinh ra access token
function sinhAccessToken(user) {
    return jwt.sign({ user }, acessk, {
        expiresIn:'15m'
    });
}
function sinhRefreshToken(user){
    return jwt.sign({ user }, refeshk, {
        expiresIn:'7d'
    })
}
//login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('thông tin');
    console.log(username);
    console.log(password);
    //tìm user có trong mảng user
    const user = users.find((u)=> u.username === username && u.password === password);
    if(!user){
        return res.sendStatus(404).json({message:'không tồn tại user'})
    }
    //lấy về acess token
    const accessToken = sinhAccessToken({id:user.id,username:user.username});
    const refreshToken = sinhRefreshToken({id:user.id,username:user.username});

    //trả về cho người dùng 
    res.json({
        accessToken,
        refreshToken
    })
    console.log("access token: " + accessToken);
    console.log("refresh token: " + refreshToken);
});
app.listen(PORT, () => {
    console.log('server đang chạy')
})