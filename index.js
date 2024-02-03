var mainModel = {
    admin :{
        firstName: ko.observable("Ivan"),
        lastName: ko.observable("Ivanov"),
        fullName: ko.observable("Ivan Ivanov")    
    },
    callPost: function(){
        console.log("data");
    }
}

mainModel.admin.firstName.subscribe(function(val){
    mainModel.admin.fullName(val + ' ' + mainModel.admin.lastName());
});

mainModel.admin.lastName.subscribe(function(val){
    mainModel.admin.fullName(mainModel.admin.firstName() + ' ' + val);
});

ko.applyBindings(mainModel);
