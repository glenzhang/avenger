## Svn init

       ├── avenger
            ├── bin/
                ├── www
			├── conf/
				├── pageconfig.json
            ├── public/
                ├── css/
                ├── images/
                └── js/
            ├── routes/
            ├── views/
            ├── .bowerrc
            ├── app.js
            ├── bower.json 
            ├── gulpfile.js
			├── package.json
            └── README.md

## Express
1. install express-gerentor `$ npm install -g express-generator`
2. create express project `$ express -e avenger`

## Bower
1. install bower `$ npm install -g bower`
2. create bower.json `$ bower init`
3. create .bowerrc `$ touch .bowerrc`
       
		{
            "directory": "public/libs"
        }
        
4. install bower component `$ bower install angular --save`, `$ bower install echarts --save`


## 如何开发
1. 签出dev branch
2. 安装node module, `$ npm install`
3. 安装bower component `$ bower install`
4. 启动node server `$ DEBUG=avenger:* ./bin/www`
5. public/libs下面的文件是不需要提交svn, 使用bower.json控制。如增加react js
    - check库信息 `$ bower lookup react`
    - 安装react库，并且修改bower.json `$ bower install react --save`



## 实例-开发index页面
1. 
