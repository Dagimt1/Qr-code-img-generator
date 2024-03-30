import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url, function (err) {
      if (!err) {
        console.log(`\nYour URL has been saved to the file named 'URL.txt'.`);
        console.log("\nThe QR code image is saved as 'qr_img.png'.");
      } else {
        console.log(`\nError occurred while writing to 'URL.txt': ${err}`);
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
