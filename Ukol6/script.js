const fillcut = (str, len) => {
    if (len > str.length) {
        //dopln pred retazec bodky
                
        return str.padStart(len, '.')

    } else if (len < str.length) {
        //orezat na dlzku len
        return str.slice(0, len)
        return 
    } else {
        return str
    }
}

document.body.innerHTML += fillcut('petr', 8) + '<br>';
document.body.innerHTML += fillcut('petr', 3) + '<br>';
document.body.innerHTML += fillcut('petr', 4) + '<br>';