let a = "Organize command executed with path -> ";
let itsPath = process.cwd();
let types = {
    media : ["mp4", "jpeg", "jpg", "png"],
    archives : ["zip", "tar", "iso"],
    documents : ["pdf", "docx", "doc", "xls", "pptx", "ppt"],
    app : ["exe"]
}
function fn(address)
{
    let fs = require("fs");
    let path = require("path");
    let folderfiles = fs.readdirSync(address);
    // console.log(folderfiles);
    fs.mkdirSync("Media");
    fs.mkdirSync("Archives");
    fs.mkdirSync("Documents");
    fs.mkdirSync("Apps");
    fs.mkdirSync("Others");
    let mediaPath = path.join(address, "Media");
    let archivePath = path.join(address, "Archives");
    let docPath = path.join(address, "Documents");
    let appPath = path.join(address, "Apps");
    let othersPath = path.join(address, "Others");
    
    for(let i = 0; i < folderfiles.length; i++)
    {
        let extension = folderfiles[i].split(".");
        // console.log(folderfiles[i] + "  ->  " + extension + " types -> ");
        for (let [key, value] of Object.entries(types)) {
            for(let j = 0; j < value.length; j++)
            {
                let srcPath = path.join(address, folderfiles[i]);
                if(extension[1] == value[j])
                {
                    // console.log(folderfiles[i] + " -> " + extension[1] + " -> " + value[j]);
                    switch(key)
                    {
                        case "media":
                        {
                            let destPath = path.join(mediaPath, folderfiles[i]);
                            fs.copyFileSync(srcPath, destPath);
                            fs.unlinkSync(srcPath);
                            break;
                        }
                        case "archives":
                        {
                            let destPath = path.join(archivePath, folderfiles[i]);
                            fs.copyFileSync(srcPath, destPath);
                            fs.unlinkSync(srcPath);
                            break;
                        }
                        case "documents":
                        {
                            let destPath = path.join(docPath, folderfiles[i]);
                            fs.copyFileSync(srcPath, destPath);
                            fs.unlinkSync(srcPath);
                            break;
                        }
                        case "apps":
                        {
                            let destPath = path.join(appPath, folderfiles[i]);
                            fs.copyFileSync(srcPath, destPath);
                            fs.unlinkSync(srcPath);
                            break;
                        }
                        default:
                        {
                            let destPath = path.join(othersPath, folderfiles[i]);
                            fs.copyFileSync(srcPath, destPath);
                            fs.unlinkSync(srcPath);
                            break;
                        }
                    }
                }
            }
          }    
    }
}
module.exports = {
    varName : a+itsPath,
    func : fn
}