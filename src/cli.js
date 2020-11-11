import promptly from 'promptly';

export default (async () => {
    const UserName = await promptly.prompt('May I have your name?');
    console.log(`Hello, ${UserName}!`);
})();
 
