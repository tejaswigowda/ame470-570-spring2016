function authenticate(userID, pass, collection, db, fn) {
	db.collection("users").findOne({userID:userID, password:pass}, function(err, user) {
		if (err) {
			return fn(err);
		}
		if(user) {
			return fn(null, user);

		}else{
			return fn(null, null);
		}
	});
}

function restrict(req, res, db, fn) {
    db.collection("users").findOne({userID:req.session.userID}, function(err, result) {
      if(result) { 
        if(result.userID == req.session.userID && result.password == req.session.password) {
           ret = true;
        }
        else {
           ret = false;
        }
        return fn(ret);
      }
      else{
          return fn(false);
      }
    });
	return fn(false);
}
		

exports.authenticate = authenticate;
exports.restrict = restrict;
