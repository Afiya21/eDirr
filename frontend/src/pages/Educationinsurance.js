const axios=require('axios');
const { scryRenderedComponentsWithType } = require('react-dom/test-utils');

exports.homeroute=(req,res)=>{
  axios.get('http://localhost:3000')
  .then(function(responce){
    console.log(responce)
    scryRenderedComponentsWithType.render('app',{users:responce.data})
  })[+
  ]
  .catch(err=>{
    res.send(err);
  })
}