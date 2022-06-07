// TODO: import module bila dibutuhkan di sini
const fs = require('fs');


// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(
    file1,
    'utf-8',
    (err, readData1) => {
      if (err) {
        return fnCallback(err);
      };
      fs.readFile(
        file2,
        'utf-8',
        (err, readData2) => {
          if (err) {
            return fnCallback(err);
          };
          fs.readFile(
            file3,
            'utf-8',
            (err, readData3) => {
              let data1 = JSON.parse(readData1).message;
              let data2 = JSON.parse(readData2)[0].message;
              let data3 = JSON.parse(readData3)[0].data.message;
              let result = `${data1} ${data2} ${data3}`;

              fnCallback(
                err,
                result.split(' ').filter(element => element.toLowerCase() !=='halo')
              )
            }
          )
        }
      )
    }
  )
}
// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
