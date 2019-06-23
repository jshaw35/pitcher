const Observable = require("tns-core-modules/data/observable").Observable;

function getMessage(listen) {
    if (listen) {
        return "Blow dawg blow!!";
    }
    return "";
}

function getImage(listen) {
    if (listen) {
        // return "https://media.giphy.com/media/3o6gDUfmjGOPlZRave/giphy.gif";
        return "~/guy.jpeg";
    }
    return "";
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.listen = false;
    viewModel.message = getMessage(viewModel.listen);
    viewModel.blowImg = getImage(viewModel.listen);

    viewModel.image = viewModel.onTap = () => {
        viewModel.set("listen", !viewModel.listen);
        viewModel.set("message", getMessage(viewModel.listen));
        viewModel.set("blowImg", getImage(viewModel.listen));
    };
    return viewModel;
}

exports.createViewModel = createViewModel;
