console.log("lets write javascript")

async function main(){
    let a = await fetch("file:///C:/Users/Home/Pictures/2024-03-09/spotify%20clone%20vsc45/")
    let response = await a.text();
    console.log("response")
}


main()