let promice = new promice((resolve, reject) => {
    console.log("I am a promice");
    reject("Some error occupied");
});

function getData(dataId, getNextData) {
    return new promice((resolve, reject) => {
        setTimeout(() =>{
            console.log("data", dataId);
            if (getNextData) {
                getNextData();
            }
        },2000);
    });
}