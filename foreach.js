var mainModel = {
    users: ko.observableArray([
        {id: Date.now(), login: "login_1", name: "Name 1"},
        {id: Date.now() + 1, login: "login_2", name: "Name 2"}
    ]),
    dialogModel: {
        data: {
            id: ko.observable(),
            login: ko.observable(),
            name: ko.observable()
        }
    },
    appendUser: function(){
        if (mainModel.dialogModel.data != null){
            mainModel.users.push(new User(mainModel.dialogModel.data.login(), mainModel.dialogModel.data.name()));
            mainModel.dialogModel.data.login("");
            mainModel.dialogModel.data.name("");
            
            var myModalEl = document.getElementById('appendDialog');
            var modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
        }
    },
    deleteUser: function(selectedItem){
        mainModel.users.remove((item)=>{ return selectedItem.id === item.id });
    }
}

function User(login, name){
    this.id = Date.now();
    this.login = login;
    this.name = name;
}

ko.applyBindings(mainModel);
