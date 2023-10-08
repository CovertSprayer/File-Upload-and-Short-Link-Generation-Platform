
module.exports.invalidHandler = (req, res, next) => {
    if(!req.files){
        return res.render('error', {err: 'Invalid file type. Please select a valid file type.'})
    }
    const file = req.files.file;

    if(file === null || file.mimetype.split('/')[0] !== 'image'){
        return res.render('error', {err: 'Invalid file type. Please select a valid file type.'})
    }
    else if(file.size > 51200){
        return res.render('error', {err: 'File size exceeds the allowed limit. Please select a smaller file.'})
    }
    next();
};