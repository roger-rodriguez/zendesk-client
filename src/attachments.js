import fetch from './fetch';

export default function(options){

  return {
    upload : upload.bind(null, options),
  }

}

const upload = (config, files = []) =>{

  if(!files.length){
    throw new Error('need files to upload');
  }

  const {url, token}      = config;
  const isMultiFileUpload = files.length > 1;
  const firstFile         = files[0];
  const restOfFiles       = files.slice(1);

  let options = {
    domain  : url,
    path    : `uploads`,
    query   : {
      filename : '',
      token    : '',
    },
    method  : "POST",
    headers : {
      'Content-Type'  : "application/binary",
      'Accept'        : "application/json",
      'Authorization' : `Bearer ${token}`
    },
    body    : null,
  };

  return uploadFile(firstFile, options)
    .then((res) =>{
      // if multi file upload we must use the token in the first response on all other uploads
      if(isMultiFileUpload){
        options.query.token = res.upload.token;
        return Promise.all(restOfFiles.map((file) =>{
          return uploadFile(file, options)
        })).then(handleUploads)
      } else{
        return handleUploads([res]);
      }
    })

};

const uploadFile = (file, options) =>{
  options.query.filename = file.name;
  options.body           = file;
  return fetch(options)
};

const handleUploads = (res) =>{
  return res[res.length - 1].upload.token;
};