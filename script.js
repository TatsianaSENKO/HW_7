let Alarm = function(t, s, c, h, m) {

    this.status = false;

    this.type = t || 1,
    this.signal = s || 'pi-pi-pi',
    this.color = c || 'green';
    this.hourSet = h || null;
    this.minSet = m || null;

    this.onOff = function() {
        if (this.hourSet !== null && this.minSet !== null) this.status = true;
    }

    this.on = function() {
        let dateNow = new Date();
        // console.log(dateNow);
        if (this.hourSet == dateNow.getHours() && this.minSet == dateNow.getMinutes()) {
            alert (this.signal + '\n'+ this.hourSet + ':' + this.minSet);
        };
    }
}

let alarm1 = new Alarm(1, 'trrr-trrr-trrr', 'yellow', 9, 14);

alarm1.onOff();
alarm1.on();

console.log(alarm1);
