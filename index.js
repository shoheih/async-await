const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const messages = 'ありがとう';

async function delayEchoes(messages) {
    for (const message of messages) {
        await wait(1000);
        console.log(message);
    }
}

delayEchoes(messages);