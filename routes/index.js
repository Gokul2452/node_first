var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:'Gokul',age:21,Mark_1:90,Mark_2:90,total:180,
 college:[{name:'Ug in Anjac'},{name:'PG in Anjac'}
]
});
});

module.exports = router;
