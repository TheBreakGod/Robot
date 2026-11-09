const fs = require('fs');

fs.readFile('head.txt', 'utf8', (err, headData) => {
    if (err) throw err;

    fs.readFile('body.txt', 'utf8', (err, bodyData) => {
        if (err) throw err;

        fs.readFile('leg.txt', 'utf8', (err, legData) => {
            if (err) throw err;

            fs.readFile('feet.txt', 'utf8', (err, feetData) => {
                if (err) throw err;

                const robotText = headData + '\n' + bodyData + '\n' + legData + '\n' + feetData;

                fs.writeFile('robot.txt', robotText, 'utf8', (err) => {
                    if (err) throw err;
                    console.log('สร้างไฟล์ robot.txt สำเร็จเรียบร้อย!');
                });
            });
        });
    });
});
