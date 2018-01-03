import Actions from './actions';
import fetch from './fetch';

export default class Attachments extends Actions {

  constructor(settings){
    super(settings);
    this.settings = settings;
  }

  upload(files){

    const isMultiFileUpload = files.length > 1;
    const firstFile         = files[0];
    const restOfFiles       = files.slice(1);

    let options = {
      domain  : this.settings.url,
      path    : `uploads`,
      query   : {
        filename : '',
        token    : '',
      },
      method  : "POST",
      headers : {
        'Content-Type'  : "application/binary",
        'Accept'        : "application/json",
        'Authorization' : `Bearer ${this.settings.token}`
      },
      body    : null,
    };

    return this.uploadFile(firstFile, options)
      .then((res) =>{
        // if multi file upload we must use the token in the first response on all other uploads
        if(isMultiFileUpload){
          options.query.token = res.upload.token;
          return Promise.all(restOfFiles.map((file) =>{
            return this.uploadFile(file, options)
          })).then(this.handleUploads)
        } else{
          return this.handleUploads([res]);
        }
      })

  }

  uploadFile = (file, options) =>{
    options.query.filename = file.name;
    options.body           = file;
    return fetch(options)
  }

  handleUploads = (res) =>{
    return res[res.length - 1].upload.token;
  }

}