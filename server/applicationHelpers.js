function getInstanceKeys(req,res,next){
    req.requestKeys = {
        instanceId:req.wixInstance.instanceId,
        compId:req.widgetCompId
    };

    next();
}

module.exports = {
    getInstanceKeys
};