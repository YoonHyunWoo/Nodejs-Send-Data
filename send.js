//express 모듈 호출, app에 express()담는다
const express = require('express');
const app = express();

//Server 만들기
const PORT = 80;
const server = app.listen(PORT,()=>{
    console.log(`server running localhost`);
});

//path에 :이 들어가면 뭐가 들어가도 되고, 이를 parameter로 받을 수 있다
app.get("/class/:about",(req,res)=>{
    //parameter로 about을 받았다
    let {about} = req.params;
    //if문을 통하여 Client가 URI로 요청한 정보에 맞는 정보를 보내준다. 보통 JSON형식이다
    if(about == '1'){
        const data = [
            {
                name : 'yoonhyenwoo',
                birth: '2005/10/13'
            },
            {
                name:'kimgaeddong',
                birth:'2005/12/10',
            },
        ];
        res.send(data);
    }else if(about == '2'){
        const data = [
            {
                name : 'parkminsu',
                birth: '2005/6/15'
            },
            {
                name:'kimsangso',
                birth:'2005/9/21',
            },
        ];
        res.send(data);
    }else{
        res.send("Not Found");
    }
})