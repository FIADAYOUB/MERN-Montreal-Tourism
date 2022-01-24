const  express=require("express");  
const { getPlaces,addPlace,deletePlace,filterPlace} = require("../Controller/place");
const router = express.Router();


router.route('/Add').post(addPlace) ;
  
router.route('/List').get(getPlaces);


router.route('/Delete/:id').delete(deletePlace);
 
router.route('/Filter/:ville').get(filterPlace) ;


module.exports=router;