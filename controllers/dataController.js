// const data = require('../data');
// const sampleData = require('../sampleData');
// const sampleData2 = require('../sampleData2');
const sampleData3 = require('../sampleData3');

const getData = (req, res) => {
  const { appointmentNumber } = req.query;
  const datas = sampleData3;
  const data = datas.find(d => d.appointmentNumber === appointmentNumber)

  if (data) {
    res.json(data)
  } else {
    res.status(404).json({ message: `Questionnaire with appointmentNumber ${appointmentNumber} not found.` });
  }
};

const postData = (req, res) => {
  const receivedData = req.body;
  console.log('Received Data:', receivedData);

  res.json({
    status: 'success',
    receivedData,
  });
};

module.exports = { getData, postData };
