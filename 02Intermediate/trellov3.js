let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num
    },

    meetingDone: function(num){
        this.meetDone = this.meetDone + num
    },

    summary: function () {
        let leftMeeting = this.meetings - this.meetDone
        return `You have ${leftMeeting} meetings today`
    },

    reset: function () {
        this.meetings = 0
        this.meetDone = 0
    },



}

myTodos.addMeeting(4)
myTodos.meetingDone(2)
console.log(myTodos.summary());
myTodos.reset()
console.log(myTodos.summary());
