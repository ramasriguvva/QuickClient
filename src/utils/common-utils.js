


export const formatDate = (date) => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    const am_pm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // appending zero in the start if hours and minutes less than 10
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} ${am_pm}`;
}

export const MsgDate = (date) => {
    let datetime = new Date(date);
    let text = datetime.toString();
    return text.substring(1,10);
}


export const downloadMedia = (e, originalImage) => {
    try{
        fetch(originalImage)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = "none";
            a.href = url;

            const nameSplit = originalImage.split('file-');
            const duplicateName = nameSplit.pop();
            
            a.download = "" + duplicateName + "";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(error => console.log("Error while downloading image ", error.message));
    }catch(error){
        console.log("Error while downloading image ", error.message);
    }
}