
let hasMeeting =false

let promise1 = new Promise((resolve,reject)=>{
       if(!hasMeeting){
         let meetingDetails ="There have meething  on sunday at 3 pm"
         resolve(meetingDetails)
       } else{
         reject("Thre have not any meeting")
       }
})

let promise2 = ((detailse)=>{
    return Promise.resolve(detailse + "in Dhanmondi 32")
})


async function myMeeting() {
    let firstCall = await promise1
    let secondCall = await promise2(firstCall)
    console.log(firstCall)
    console.log(secondCall)
}

myMeeting()