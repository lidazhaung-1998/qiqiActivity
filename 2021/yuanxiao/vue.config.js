module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        // proxy:'http://192.168.25.130:8080',
        before(app) {
            app.get('/data/finalAnchorRank', function (req, res) {
                let page = req.query.page;
                if (page == 0) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿1",
                                    "diffScores": 0,
                                    "rankNo": 1,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿2",
                                    "diffScores": 0,
                                    "rankNo": 2,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿3",
                                    "diffScores": 0,
                                    "rankNo": 3,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿4",
                                    "diffScores": 0,
                                    "rankNo": 4,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿5",
                                    "diffScores": 0,
                                    "rankNo": 5,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿6",
                                    "diffScores": 0,
                                    "rankNo": 6,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿7",
                                    "diffScores": 0,
                                    "rankNo": 7,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿8",
                                    "diffScores": 0,
                                    "rankNo": 8,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿9",
                                    "diffScores": 0,
                                    "rankNo": 9,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿10",
                                    "diffScores": 0,
                                    "rankNo": 10,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                            ],
                            "totalPage": 4
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else if (page == 1) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿11",
                                    "diffScores": 0,
                                    "rankNo": 1,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿22",
                                    "diffScores": 0,
                                    "rankNo": 2,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿33",
                                    "diffScores": 0,
                                    "rankNo": 3,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿44",
                                    "diffScores": 0,
                                    "rankNo": 4,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿55",
                                    "diffScores": 0,
                                    "rankNo": 5,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿66",
                                    "diffScores": 0,
                                    "rankNo": 6,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿77",
                                    "diffScores": 0,
                                    "rankNo": 7,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿88",
                                    "diffScores": 0,
                                    "rankNo": 8,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿99",
                                    "diffScores": 0,
                                    "rankNo": 9,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿100",
                                    "diffScores": 0,
                                    "rankNo": 10,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                            ],
                            "totalPage": 4
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else if (page == 2) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿11",
                                    "diffScores": 0,
                                    "rankNo": 1,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿22",
                                    "diffScores": 0,
                                    "rankNo": 2,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿33",
                                    "diffScores": 0,
                                    "rankNo": 3,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿44",
                                    "diffScores": 0,
                                    "rankNo": 4,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿55",
                                    "diffScores": 0,
                                    "rankNo": 5,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿66",
                                    "diffScores": 0,
                                    "rankNo": 6,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿77",
                                    "diffScores": 0,
                                    "rankNo": 7,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿88",
                                    "diffScores": 0,
                                    "rankNo": 8,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿99",
                                    "diffScores": 0,
                                    "rankNo": 9,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿100",
                                    "diffScores": 0,
                                    "rankNo": 10,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                            ],
                            "totalPage": 4
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else if (page == 3) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿11",
                                    "diffScores": 0,
                                    "rankNo": 1,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿22",
                                    "diffScores": 0,
                                    "rankNo": 2,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿33",
                                    "diffScores": 0,
                                    "rankNo": 3,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿44",
                                    "diffScores": 0,
                                    "rankNo": 4,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿55",
                                    "diffScores": 0,
                                    "rankNo": 5,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿66",
                                    "diffScores": 0,
                                    "rankNo": 6,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿77",
                                    "diffScores": 0,
                                    "rankNo": 7,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿88",
                                    "diffScores": 0,
                                    "rankNo": 8,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿99",
                                    "diffScores": 0,
                                    "rankNo": 9,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿100",
                                    "diffScores": 0,
                                    "rankNo": 10,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                            ],
                            "totalPage": 4
                        },
                        "errmsg": "",
                        "status": 200
                    })
                }
            });
            app.get('/data/promotedRank', function (req, res) {
                let page = req.query.page;
                if (page == 0) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿1",
                                    "diffScores": 0,
                                    "rankNo": 1,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿2",
                                    "diffScores": 0,
                                    "rankNo": 2,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿3",
                                    "diffScores": 0,
                                    "rankNo": 3,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿4",
                                    "diffScores": 0,
                                    "rankNo": 4,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿5",
                                    "diffScores": 0,
                                    "rankNo": 5,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿6",
                                    "diffScores": 0,
                                    "rankNo": 6,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿7",
                                    "diffScores": 0,
                                    "rankNo": 7,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿8",
                                    "diffScores": 0,
                                    "rankNo": 8,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿9",
                                    "diffScores": 0,
                                    "rankNo": 9,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿10",
                                    "diffScores": 0,
                                    "rankNo": 10,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                            ],
                            "totalPage": 3
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else if (page == 1) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿11",
                                    "diffScores": 0,
                                    "rankNo": 1,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿22",
                                    "diffScores": 0,
                                    "rankNo": 2,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿33",
                                    "diffScores": 0,
                                    "rankNo": 3,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿44",
                                    "diffScores": 0,
                                    "rankNo": 4,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿55",
                                    "diffScores": 0,
                                    "rankNo": 5,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿66",
                                    "diffScores": 0,
                                    "rankNo": 6,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿77",
                                    "diffScores": 0,
                                    "rankNo": 7,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿88",
                                    "diffScores": 0,
                                    "rankNo": 8,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿99",
                                    "diffScores": 0,
                                    "rankNo": 9,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿100",
                                    "diffScores": 0,
                                    "rankNo": 10,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                            ],
                            "totalPage": 3
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else if (page == 2) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿1",
                                    "diffScores": 0,
                                    "rankNo": 1,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿2",
                                    "diffScores": 0,
                                    "rankNo": 2,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿3",
                                    "diffScores": 0,
                                    "rankNo": 3,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿4",
                                    "diffScores": 0,
                                    "rankNo": 4,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿5",
                                    "diffScores": 0,
                                    "rankNo": 5,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿6",
                                    "diffScores": 0,
                                    "rankNo": 6,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿7",
                                    "diffScores": 0,
                                    "rankNo": 7,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿8",
                                    "diffScores": 0,
                                    "rankNo": 8,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿9",
                                    "diffScores": 0,
                                    "rankNo": 9,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                    "anchorId": 445442,
                                    "anchorName": "蜜兔儿10",
                                    "diffScores": 0,
                                    "rankNo": 10,
                                    "roomId": 200016,
                                    "scores": 999900,
                                    "showDiff": 1,
                                    "state": 2,
                                    "timeStampe": 1610955035487
                                },
                            ],
                            "totalPage": 3
                        },
                        "errmsg": "",
                        "status": 200
                    })
                }
            });
            app.get('/data/userRank', function (req, res) {
                let type = req.query.type;
                if (type == 0) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "award": 0,
                                    "rank": 1,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 2,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 3,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 4,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 5,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                            ],
                            "totalPage": 1
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "award": 0,
                                    "rank": 1,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 2,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 3,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 4,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 5,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                            ],
                            "totalPage": 1
                        },
                        "errmsg": "",
                        "status": 200
                    })
                }
            });
            app.get('/data/awardPool', function (req, res) {
                let type = req.query.type;
                if (type == 0) {
                    res.send( {
                        "errcode": 0,
                        "result": "汤圆",
                        "errmsg": "",
                        "status": 200
                    })
                } else {
                    res.send( {
                        "errcode": 0,
                        "result": "饺子",
                        "errmsg": "",
                        "status": 200
                    })
                }
            });
        }
    }
}