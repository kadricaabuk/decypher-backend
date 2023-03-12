class MainController {
    static main(req, res){
        res.send('Hello from main controller');
    }
    static home(req, res){
        res.send('Hello from home of main controller');
    }
}

export default MainController