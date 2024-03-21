let body = document.querySelector('body');

const usePrompt = () => {
    let ask = prompt("This is my 60 seconds pitch!")
    let answer = document.createElement('div')
    answer.setAttribute('class','rightAnswer')
    answer.innerHTML = ask
    let body= document.querySelector('body')
    body.append(answer);

};





const useAlert = ()  => {
    alert("Failure is Way for Success, Keep Try.")
};

const useConfirm = () => {
    let ask = prompt("Enter Approved")
    let answer = document.createElement('div')
    answer.setAttribute('class','rightAnswer')
    answer.innerHTML = ask
    let body= document.querySelector('body')
    body.append(answer);
}

// const useOpen = () => {
//     let useOpen("Open the window.");
//     console.log(useOpen);
//  };

let useFocus = () => {
    let ask = prompt("Enter Approved")
    let answer = document.createElement('div')
    answer.setAttribute('class','rightAnswer')
    answer.innerHTML = ask
    let body= document.querySelector('body')
    body.append(answer);
}

const malia = () => {
    let ask =  prompt("This Is Malia!, How may I help you?");
    let answer = document.createElement('div');
    answer.setAttribute('class','rightAnswer');
    answer.innerHTML = ask
    let body = document.querySelector('body')
    body.append(answer);
}


const henri = () => {
    let ask = prompt("Enter Something")
    let answer = document.createElement('div')
    answer.setAttribute('class','rightAnswer')
    answer.innerHTML = ask
    let body= document.querySelector('body')
    body.append(answer);
}
