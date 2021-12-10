function timer(){
    let startDate = new Date();
    let elapsedTime = 0;

    const focus = function() {
        startDate = new Date();
    };

    const blur = function() {
        const endDate = new Date();
        const spentTime = endDate.getTime() - startDate.getTime();
        elapsedTime += spentTime;
    };

    const beforeunload = function() {
        const endDate = new Date();
        const spentTime = endDate.getTime() - startDate.getTime();
        elapsedTime += spentTime;


    };

    window.addEventListener('focus', focus);
    window.addEventListener('blur', blur);
    window.addEventListener('beforeunload', beforeunload);

}
