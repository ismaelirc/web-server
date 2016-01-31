var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('Private Route!');
		next();
	},
	logger: function(req,res,next){
		console.log('Request '+req.method+' '+req.originalUrl+' on date '+ new Date().toString());
		next();
	}
};

module.exports = middleware;