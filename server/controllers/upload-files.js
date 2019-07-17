/* eslint-disable no-console */
import formidable from 'formidable';
import path from 'path';

const uploadFilesController = async (req, res) => {
  new formidable.IncomingForm()
    .parse(req)
    .on('field', (name, field) => {
      console.log('Field', name, field);
    })
    .on('fileBegin', (name, file) => {
      const milliseconds = new Date().getTime();
      const fileName = `${milliseconds}-${file.name}`;
      // eslint-disable-next-line no-param-reassign
      file.path = `${path.resolve(__dirname, '..')}/images/${fileName}`;
    })
    .on('file', () => {
      console.log('Uploaded file');
    })
    .on('aborted', () => {
      console.error('Request aborted by the user');
    })
    .on('error', err => {
      console.error('Error', err);
      throw err;
    })
    .on('end', () => {
      res.end();
    });
};

export default uploadFilesController;
